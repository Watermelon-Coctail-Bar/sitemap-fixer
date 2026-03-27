import { StructuredAnalysis } from './urlAnalyzer';

export function buildSEOPrompt(domain: string, analysis: StructuredAnalysis, sitemapSource: string): string {
  const clusterSummary = analysis.clusters
    .map(c => `  - /${c.prefix}/ → ${c.count} pages`)
    .join('\n');

  const sampleUrls = analysis.urlSamples.slice(0, 15).join('\n  ');

  const staleSample = analysis.stalePages.slice(0, 5).join('\n  ');
  const orphanSample = analysis.orphanLike.slice(0, 5).join('\n  ');

  return `You are an elite SEO analyst. Analyze this sitemap data and return ONLY a JSON object — no markdown, no explanation, no preamble.

DOMAIN: ${domain}
SITEMAP: ${sitemapSource}
TOTAL PAGES: ${analysis.totalPages}
MAX DEPTH: ${analysis.maxDepth}
PAGES WITHOUT LASTMOD: ${analysis.noLastmod}

URL CLUSTERS (section → page count):
${clusterSummary || '  (no clear clusters detected)'}

SAMPLE URLs:
  ${sampleUrls || '(none)'}

STALE PAGES (>1 year old, sample):
  ${staleSample || '(none detected)'}

ORPHAN-LIKE PAGES (isolated, no cluster):
  ${orphanSample || '(none detected)'}

URL ISSUES:
  ${analysis.inconsistentPatterns.join('\n  ') || '(none detected)'}

DEPTH DISTRIBUTION: ${JSON.stringify(analysis.depthDistribution)}

Return EXACTLY this JSON structure, filled with domain-specific insights. Be precise and concrete — reference actual URL paths and sections from the data above. NO generic SEO advice.

{
  "seoScore": <integer 0-100 based on actual data>,
  "scoreReason": "<1 sentence why this score — cite specifics>",
  "topActions": [
    "<specific action #1 with exact page/URL context>",
    "<specific action #2>",
    "<specific action #3>",
    "<specific action #4>",
    "<specific action #5>"
  ],
  "quickWins": [
    { "action": "<concrete action>", "example": "<specific URL or page name from their site>" },
    { "action": "<concrete action>", "example": "<specific URL or page name>" },
    { "action": "<concrete action>", "example": "<specific URL or page name>" }
  ],
  "missingPages": [
    { "intent": "<search intent>", "suggestedUrl": "/<slug>", "suggestedTitle": "<exact title>" },
    { "intent": "<search intent>", "suggestedUrl": "/<slug>", "suggestedTitle": "<exact title>" },
    { "intent": "<search intent>", "suggestedUrl": "/<slug>", "suggestedTitle": "<exact title>" },
    { "intent": "<search intent>", "suggestedUrl": "/<slug>", "suggestedTitle": "<exact title>" }
  ],
  "internalLinkingFixes": [
    { "from": "<URL from their sitemap>", "to": "<URL from their sitemap>", "reason": "<why>" },
    { "from": "<URL>", "to": "<URL>", "reason": "<why>" },
    { "from": "<URL>", "to": "<URL>", "reason": "<why>" }
  ],
  "contentRefresh": [
    { "url": "<URL from stale pages>", "issue": "<specific issue>", "fix": "<exact action>" },
    { "url": "<URL>", "issue": "<specific issue>", "fix": "<exact action>" },
    { "url": "<URL>", "issue": "<specific issue>", "fix": "<exact action>" }
  ],
  "structureIssues": [
    "<specific structural issue #1 with path examples>",
    "<specific structural issue #2>"
  ]
}`;
}
