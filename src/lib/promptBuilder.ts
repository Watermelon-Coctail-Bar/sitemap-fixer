import { StructuredAnalysis } from './urlAnalyzer';

export function buildSEOPrompt(domain: string, analysis: StructuredAnalysis, sitemapSource: string): string {
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

Rules:
- Reference actual URLs/slugs from the data. Never give generic advice.
- Every "fix" must be a specific action someone can do right now, ideally with example text to copy-paste.
- issues array is the most important part — this is what users act on first.

Return EXACTLY this JSON (no extra keys, no comments):
{
  "seoScore": <0-100 integer based on actual data>,
  "scoreReason": "<1 sentence, cite specifics like URL count/depth/staleness>",
  "summary": "<2-3 sentence honest assessment of their SEO health. What is broken, what is good. Specific.>",
  "issues": [
    {
      "severity": "critical",
      "problem": "<specific problem, cite URL or count>",
      "fix": "<exact action to take — copy-paste ready where possible>",
      "effort": "low"
    },
    {
      "severity": "warning",
      "problem": "<specific problem>",
      "fix": "<specific fix>",
      "effort": "medium"
    }
  ],
  "topActions": [
    "<action #1 — specific, with URL context>",
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
    { "from": "<their URL>", "to": "<their URL>", "reason": "<why — max 8 words>" },
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
For effort: "low" = under 30 minutes, "medium" = 1-4 hours, "high" = days.
Include 3-7 issues total covering the most important problems found.`;
}
