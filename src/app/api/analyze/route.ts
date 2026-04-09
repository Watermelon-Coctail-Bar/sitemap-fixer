import { NextRequest, NextResponse } from 'next/server';
import { discoverAndParseSitemap } from '@/lib/sitemapParser';
import { analyzeUrls } from '@/lib/urlAnalyzer';
import { buildSEOPrompt } from '@/lib/promptBuilder';
import { checkUrlHealth, HealthSummary } from '@/lib/urlChecker';

export const maxDuration = 60;

const FREE_LIMIT = 3;

function checkFreeLimit(req: NextRequest): { allowed: boolean; count: number; setCookie?: string } {
  // Check if user has auth token (skip limit for authenticated users)
  const token = req.cookies.get('sf_token')?.value;
  if (token) return { allowed: true, count: 0 };

  // Use cookie-based counting (persists across deploys)
  const usageCookie = req.cookies.get('sf_usage')?.value;
  let count = 0;
  try {
    if (usageCookie) count = parseInt(usageCookie, 10) || 0;
  } catch { /* ignore */ }

  if (count >= FREE_LIMIT) {
    return { allowed: false, count };
  }

  const newCount = count + 1;
  // Set cookie that expires in 30 days
  const cookie = `sf_usage=${newCount}; Path=/; Max-Age=${30 * 24 * 60 * 60}; SameSite=Lax`;
  return { allowed: true, count: newCount, setCookie: cookie };
}

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json();
    if (!domain || typeof domain !== 'string') {
      return NextResponse.json({ error: 'Domain is required' }, { status: 400 });
    }

    // Check free tier limit
    const { allowed, count, setCookie } = checkFreeLimit(req);
    if (!allowed) {
      return NextResponse.json({
        error: 'limit_reached',
        message: 'You have used your 3 free analyses. Create an account and upgrade to continue.',
        count,
      }, { status: 429 });
    }

    // Step 1: Discover and parse sitemap
    const sitemap = await discoverAndParseSitemap(domain);

    if (sitemap.sitemapSource === 'not_found' || sitemap.urls.length === 0) {
      return NextResponse.json(
        {
          error: 'no_sitemap',
          message:
            'No sitemap found for this domain. We checked /sitemap.xml, /sitemap_index.xml, and robots.txt. Make sure your sitemap is publicly accessible.',
        },
        { status: 404 }
      );
    }

    // Step 2: Analyze URLs
    const analysis = analyzeUrls(sitemap.urls);

    // Step 2.5: Run URL health checks (parallel with prompt building)
    const allUrls = sitemap.urls.map(u => u.loc);
    let healthSummary: HealthSummary | null = null;
    try {
      healthSummary = await checkUrlHealth(allUrls, sitemap.robotsTxt, 30);
    } catch (err) {
      console.error('URL health check failed:', err);
    }

    // Step 3: Build prompt and call Claude API (include health data)
    const prompt = buildSEOPrompt(domain, analysis, sitemap.sitemapSource, healthSummary);

    const aiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      console.error('Claude API error:', errText);
      return NextResponse.json({ error: 'AI analysis failed', detail: errText }, { status: 500 });
    }

    const aiData = await aiRes.json();
    const rawText = aiData.content?.[0]?.text || '';

    let seoReport;
    try {
      // Strip any accidental markdown fences
      const cleaned = rawText.replace(/```json|```/g, '').trim();
      seoReport = JSON.parse(cleaned);
    } catch {
      console.error('Failed to parse AI JSON:', rawText);
      return NextResponse.json({ error: 'Failed to parse AI response', raw: rawText }, { status: 500 });
    }

    const response = NextResponse.json({
      domain,
      sitemapUrl: sitemap.sitemapSource,
      isSitemapIndex: sitemap.isSitemapIndex,
      totalUrls: sitemap.urls.length,
      clusters: analysis.clusters.slice(0, 8).map(c => ({
        label: c.label,
        prefix: c.prefix,
        count: c.count,
        urls: c.urls.slice(0, 20),
      })),
      staleCount: analysis.stalePages.length,
      orphanCount: analysis.orphanLike.length,
      noLastmodCount: analysis.noLastmod,
      report: seoReport,
      urlHealth: healthSummary ? {
        checked: healthSummary.checked,
        healthy: healthSummary.healthy,
        issues: healthSummary.issues,
        results: healthSummary.results.filter(r => r.issue), // only send URLs with issues
      } : null,
    });

    // Set usage cookie to persist across deploys
    if (setCookie) {
      response.headers.set('Set-Cookie', setCookie);
    }
    return response;
  } catch (err) {
    console.error('Analyze error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
