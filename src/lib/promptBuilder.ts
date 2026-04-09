import { StructuredAnalysis } from './urlAnalyzer';
import { HealthSummary } from './urlChecker';

export function buildSEOPrompt(domain: string, analysis: StructuredAnalysis, sitemapSource: string, health?: HealthSummary | null): string {
  const clusterSummary = analysis.clusters
    .map(c => ` - /${c.prefix}/ -> ${c.count} pages`)
    .join('\n');
  const sampleUrls = analysis.urlSamples.slice(0, 15).join('\n  ');
  const staleSample = analysis.stalePages.slice(0, 5).join('\n  ');
  const orphanSample = analysis.orphanLike.slice(0, 5).join('\n  ');

  return `You are a senior SEO consultant who gives brutally honest, specific advice. Analyze this sitemap and return ONLY a JSON object. No markdown, no explanation, no preamble.

DOMAIN: ${domain}
SITEMAP: ${sitemapSource}
TOTAL PAGES: ${analysis.totalPages}
MAX DEPTH: ${analysis.maxDepth}
PAGES WITHOUT LASTMOD: ${analysis.noLastmod}
URL CLUSTERS: ${clusterSummary || '(no clusters detected)'}
SAMPLE URLs: ${sampleUrls || '(none)'}
STALE PAGES (>1yr): ${staleSample || '(none)'}
ORPHAN-LIKE PAGES: ${orphanSample || '(none)'}
URL ISSUES: ${analysis.inconsistentPatterns.join('\n  ') || '(none)'}
DEPTH: ${JSON.stringify(analysis.depthDistribution)}
${health ? `
URL HEALTH CHECK (${health.checked} URLs sampled):
- Healthy: ${health.healthy}/${health.checked}
- 404 Not Found: ${health.issues.notFound.length > 0 ? health.issues.notFound.join(', ') : '(none)'}
- Redirects: ${health.issues.redirects.length > 0 ? health.issues.redirects.map(r => `${r.url} -> ${r.redirectsTo}`).join(', ') : '(none)'}
- Server Errors: ${health.issues.serverErrors.length > 0 ? health.issues.serverErrors.join(', ') : '(none)'}
- noindex but in sitemap: ${health.issues.noindexConflict.length > 0 ? health.issues.noindexConflict.join(', ') : '(none)'}
- Canonical mismatch: ${health.issues.canonicalMismatch.length > 0 ? health.issues.canonicalMismatch.map(c => `${c.url} canonical=${c.canonical}`).join(', ') : '(none)'}
- Blocked by robots.txt: ${health.issues.blockedByRobots.length > 0 ? health.issues.blockedByRobots.join(', ') : '(none)'}
- Slow (>3s): ${health.issues.slow.length > 0 ? health.issues.slow.map(s => `${s.url} (${(s.ms/1000).toFixed(1)}s)`).join(', ') : '(none)'}` : ''}

Rules:
- Reference actual URLs/slugs from the data. Never give generic advice.
- Every "fix" must be a specific action someone can do right now, ideally with example text to copy-paste.
- issues array is the most important part - this is what users act on first.
- For each issue, include affectedUrls (actual URLs from the sitemap data that have this problem) and fixedUrls (the corrected version of each URL, same order). Include up to 20 affected URLs per issue. If the fix is not a URL change (e.g. add a meta tag), fixedUrls should contain the action for each URL (e.g. "add noindex tag").
- CRITICAL: Check for duplicate URLs and keyword cannibalization (different URLs targeting the same keyword). Flag these as critical issues.
- Check if sitemap should be split into multiple sitemaps (sitemap index) for better crawl efficiency.
- If URL health check found noindex/canonical/404 issues, make them the TOP priority issues.

Return EXACTLY this JSON (no extra keys, no comments):
{
  "seoScore": <0-100 integer based on actual data>,
  "scoreReason": "<1 sentence, cite specifics like URL count/depth/staleness>",
  "summary": "<2-3 sentence honest assessment of their SEO health. What is broken, what is good. Specific.>",
  "issues": [
    {
      "severity": "critical",
      "problem": "<specific problem, cite URL or count>",
      "fix": "<exact action to take - copy-paste ready where possible>",
      "effort": "5min",
      "affectedUrls": ["<actual broken/problematic URL from sitemap>", "<another URL>"],
      "fixedUrls": ["<corrected version of first URL>", "<corrected version of second URL>"]
    },
    {
      "severity": "warning",
      "problem": "<specific problem>",
      "fix": "<specific fix>",
      "effort": "15min",
      "affectedUrls": ["<actual URL from sitemap>"],
      "fixedUrls": ["<corrected URL>"]
    }
  ],
  "topActions": [
    "<action #1 - specific, with URL context>",
    "<action #2>",
    "<action #3>",
    "<action #4>",
    "<action #5>"
  ],
  "quickWins": [
    { "action": "<concrete, specific action>", "example": "<URL or code snippet>" },
    { "action": "<action>", "example": "<example>" },
    { "action": "<action>", "example": "<example>" }
  ],
  "missingPages": [
    { "intent": "<search intent>", "suggestedUrl": "/<slug>", "suggestedTitle": "<exact H1 title>" },
    { "intent": "<search intent>", "suggestedUrl": "/<slug>", "suggestedTitle": "<exact H1 title>" },
    { "intent": "<search intent>", "suggestedUrl": "/<slug>", "suggestedTitle": "<exact H1 title>" },
    { "intent": "<search intent>", "suggestedUrl": "/<slug>", "suggestedTitle": "<exact H1 title>" }
  ],
  "internalLinkingFixes": [
    { "from": "<their URL>", "to": "<their URL>", "reason": "<why - max 8 words>" },
    { "from": "<URL>", "to": "<URL>", "reason": "<why>" },
    { "from": "<URL>", "to": "<URL>", "reason": "<why>" }
  ],
  "contentRefresh": [
    { "url": "<stale URL>", "issue": "<specific problem>", "fix": "<exact action>" },
    { "url": "<URL>", "issue": "<issue>", "fix": "<fix>" },
    { "url": "<URL>", "issue": "<issue>", "fix": "<fix>" }
  ],
  "structureIssues": [
    "<issue #1 with path examples>",
    "<issue #2>"
  ]
}

For issues severity: "critical" = blocking indexing or major ranking impact. "warning" = losing traffic. "opportunity" = easy wins. "info" = good to know.
For effort: "5min" = trivial one-line change, "15min" = simple fix, "30min" = moderate work, "1hr" = significant effort. Most sitemap fixes are 5-15 minutes. Do NOT overestimate.
Include 3-7 issues total covering the most important problems found.
IMPORTANT: Each topAction MUST correspond to one of the issues. The topActions array should be ordered to match the issues array priority. Each action must reference specific URL counts or patterns so the user understands exactly what it covers.`;
}
