import { NextRequest, NextResponse } from 'next/server';
import { discoverAndParseSitemap } from '@/lib/sitemapParser';
import { analyzeUrls } from '@/lib/urlAnalyzer';
import { buildSEOPrompt } from '@/lib/promptBuilder';

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json();
    if (!domain || typeof domain !== 'string') {
      return NextResponse.json({ error: 'Domain is required' }, { status: 400 });
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

    // Step 3: Build prompt and call Claude API
    const prompt = buildSEOPrompt(domain, analysis, sitemap.sitemapSource);

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

    return NextResponse.json({
      domain,
      sitemapUrl: sitemap.sitemapSource,
      isSitemapIndex: sitemap.isSitemapIndex,
      totalUrls: sitemap.urls.length,
      clusters: analysis.clusters.slice(0, 8),
      staleCount: analysis.stalePages.length,
      orphanCount: analysis.orphanLike.length,
      noLastmodCount: analysis.noLastmod,
      report: seoReport,
    });
  } catch (err) {
    console.error('Analyze error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
