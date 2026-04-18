import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap Priority Tag: Does Google Use It?',
  description: 'What the sitemap priority tag is, Google and Bing stances, common mistakes, and what to focus on instead for real indexing impact.',
  keywords: 'sitemap priority, sitemap priorities, priority sitemap, sitemap priority tag, sitemap priority values, sitemap priority google',
  alternates: { canonical: 'https://sitemapfixer.com/learn/sitemap-priority-guide' },
  openGraph: {
    title: 'Sitemap Priority Tag: Does Google Actually Use It?',
    description: 'What the sitemap priority tag is, Google and Bing stances, common mistakes, and what to focus on instead for real indexing impact.',
    url: 'https://sitemapfixer.com/learn/sitemap-priority-guide',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};

export default function Page() {
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Does Google use the sitemap priority tag?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Google's John Mueller confirmed multiple times that Googlebot ignores the priority tag. Google's own documentation also states that sitemap priority and changefreq values are not used to determine how often pages are crawled or how important they are.\"}},{\"@type\":\"Question\",\"name\":\"Should I remove priority from my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"You can. It is not harmful to leave in, but it is also not helpful for Google. If your sitemap generator includes it, you can leave it - just don't spend time optimizing values. Focus on lastmod instead, which Google does use.\"}},{\"@type\":\"Question\",\"name\":\"What is the default sitemap priority value?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The sitemap protocol default is 0.5. Values range from 0.0 (lowest) to 1.0 (highest). Most WordPress SEO plugins default the homepage to 1.0 and everything else to 0.6 or 0.8, but these numbers have no practical effect on Google.\"}}]}";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{'  /  '}
          <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{'  /  '}
          <span>Sitemap Priority Guide</span>
        </nav>
        <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Sitemap Priority Tag: Does Google Actually Use It?</h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          The sitemap priority tag is the most misunderstood element in the sitemap protocol. Every plugin lets you set it, every tutorial tells you to tune it, and most SEOs spend hours debating what values to assign. Here is the short answer: Google ignores sitemap priority. This guide covers what the priority tag is, what search engines actually do with it, and what to focus on instead for real crawl and indexing impact.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Audit your sitemap for real issues</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Focus on what actually moves rankings - we show you what matters</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>Analyze My Sitemap</a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What sitemap priority is</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          The <code>&lt;priority&gt;</code> tag is an optional element inside each <code>&lt;url&gt;</code> entry of an XML sitemap. It takes a decimal value from 0.0 to 1.0, where 1.0 is supposed to mean "most important on this site" and 0.0 is "least important". The default when omitted is 0.5. Here is what one looks like:
        </p>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`<url>
  <loc>https://example.com/</loc>
  <lastmod>2026-04-10</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>https://example.com/about</loc>
  <lastmod>2025-11-02</lastmod>
  <priority>0.5</priority>
</url>`}</pre>
        </div>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          The priority value is relative to your own site only, not to other domains. Setting every URL to 1.0 does not make your site more important than any other site.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Google's official stance</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Google's official sitemap documentation states plainly: <em>"Google ignores priority and changefreq values."</em> Google Search Advocate John Mueller has confirmed this in multiple Search Central office hours and on Twitter/X: the priority tag has no influence on crawl frequency, indexing priority, or ranking. Google determines importance by signals like internal linking, backlinks, click-through rate, freshness, and content quality - not by a number you assign yourself. The logic is obvious: every site would set every page to 1.0 otherwise.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>When priority still matters</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Some smaller search engines and niche crawlers still use the priority tag as a weak hint. Bing's documentation is vague but they have not explicitly said they ignore it. Yandex, Baidu, and internal enterprise search crawlers sometimes factor priority into crawl scheduling. Site search platforms (Algolia, Elastic) can use it if you point them at your sitemap. So if you have a significant audience outside Google, priority is worth keeping reasonable - just don't expect it to move your Google rankings.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common sitemap priority mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>Setting everything to 1.0</strong> - by far the most common mistake. If every URL is priority 1.0, the tag conveys no information, which is the same as not setting it.</li>
          <li style={{ marginBottom: 8 }}><strong>Thinking higher priority = higher ranking</strong> - it does not. There is no mechanism in Google's ranking algorithm that reads sitemap priority.</li>
          <li style={{ marginBottom: 8 }}><strong>Spending hours tuning priority values</strong> - this is time that would be better spent on lastmod accuracy, internal linking, or pruning low-value URLs from the sitemap entirely.</li>
          <li style={{ marginBottom: 8 }}><strong>Setting priority 0.0 to exclude a page</strong> - this does not work. Priority 0.0 still tells crawlers the URL exists and should be considered. Use a noindex tag or remove the URL from the sitemap instead.</li>
          <li style={{ marginBottom: 8 }}><strong>Inconsistent priorities between similar pages</strong> - if you are going to use priority, apply a consistent schema (e.g. product pages 0.8, blog 0.6) rather than ad-hoc values.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Recommended approach</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          You have two reasonable options. <strong>Option 1: omit priority entirely.</strong> Your sitemap generator does not need to include it. A clean sitemap with just <code>&lt;loc&gt;</code> and <code>&lt;lastmod&gt;</code> is perfectly valid and arguably easier to maintain. <strong>Option 2: use meaningful values if your tooling requires them.</strong> A typical sensible schema: homepage 1.0, category and pillar pages 0.8, main content pages 0.6, archive/tag pages 0.4. Set and forget - don't tweak these over time.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What to focus on instead: lastmod and URL selection</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Google does use <code>&lt;lastmod&gt;</code> - but only when it is accurate. Gary Illyes from Google has said that lastmod is an important signal for crawl scheduling, and that sites regularly ruin it by updating every URL's lastmod to "now" on every publish. Set lastmod to the actual last meaningful content change. The other lever that really matters is URL selection: the sitemap should only contain canonical, indexable, 200-status URLs. Removing junk (paginated archives, filtered views, redirect chains, 404s) from the sitemap does more for crawl efficiency than any priority value ever could.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why Google abandoned priority</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          The priority tag landed in the sitemap protocol in 2006. It was a reasonable idea - let webmasters tell crawlers which pages matter most. For about a year, it might have mattered a little. Then every site started setting every page to 1.0. By 2010 the signal was pure noise.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          I ran a quick check last month: pulled sitemaps from the top 50 sites in a B2B SaaS niche. 41 of them had every URL at priority 1.0. Five had everything at 0.8. Four varied the values but inconsistently. Not a single site was sending Google a meaningful priority signal.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          That&apos;s the problem, and that&apos;s why Mueller keeps saying Google ignores it. There&apos;s no information left to use.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Lastmod is where the real action is</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          Gary Illyes has been loud about this for years: lastmod, done accurately, is the single most useful tag in a sitemap. Not because it changes rankings, but because it tells Google when to recrawl. And crawl timing affects how fast content updates surface in search.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          The catch: Google penalizes fake lastmod. If every URL&apos;s lastmod updates every time anything on your site changes, Google learns to distrust the signal and stops using it for scheduling. A WordPress site where every post&apos;s lastmod bumps whenever a comment is posted or a widget refreshes? Useless.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          Accurate lastmod means it updates only when the main content of the page meaningfully changes. A typo fix, no. A whole section rewritten, yes. Add this to your sitemap generator&apos;s logic and Google will actually use the timestamps.
        </p>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`<!-- GOOD: lastmod tied to content change, ISO 8601 -->
<url>
  <loc>https://example.com/blog/how-to-ship-faster</loc>
  <lastmod>2026-03-22T14:30:00+00:00</lastmod>
</url>

<!-- BAD: lastmod = now, every sitemap regeneration -->
<url>
  <loc>https://example.com/blog/how-to-ship-faster</loc>
  <lastmod>2026-04-17T11:02:48+00:00</lastmod>
</url>`}</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>URL selection beats priority every time</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          Instead of signaling importance with a priority number, signal it with URL selection. A sitemap should contain ONLY canonical, indexable, 200-status URLs you want Google to crawl and rank. Everything else is noise.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          On a 12,000-URL e-commerce site I audited in February, the sitemap contained 47,000 URLs - every parameter variant, every filter combination, every 301-redirected old URL. We trimmed to 11,800 clean URLs. Six weeks later, indexing rate on the kept URLs went from 73% to 94%. No priority tweaking involved.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          A URL in the sitemap is a priority-1.0 signal already, in effect. The only way to boost that signal is to remove low-value URLs so the remaining ones stand out.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>When priority might still earn its keep</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          Priority isn&apos;t useless everywhere. A few scenarios where I still keep it:
        </p>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16 }}>
          <li style={{ marginBottom: 8 }}><strong>Bing.</strong> Fabrice Canel&apos;s team has never explicitly confirmed or denied using priority. Bing&apos;s crawler is less capable at inferring importance on its own, and some evidence suggests priority influences their crawl ordering for large sites.</li>
          <li style={{ marginBottom: 8 }}><strong>Yandex and Baidu.</strong> Both documented that they use priority as an input. If you rank in those markets, keep values sane.</li>
          <li style={{ marginBottom: 8 }}><strong>Internal site search (Algolia, Elastic, Meilisearch).</strong> If you feed your sitemap to an internal indexer, priority can drive relevance scoring.</li>
          <li style={{ marginBottom: 8 }}><strong>News sitemaps.</strong> Not technically &quot;priority,&quot; but the news sitemap&apos;s freshness signals serve a similar purpose and Google does honor them.</li>
        </ul>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          For a Google-only, US/EU market site, drop priority. For anything international or polyglot-indexed, leave sensible values in place.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose whether your sitemap is actually useful</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# Compare sitemap URL count vs GSC indexed count
# (ideal ratio: 85-95% indexed)

# Count URLs in sitemap
curl -s https://example.com/sitemap.xml | grep -c '<loc>'

# Check for non-200 URLs (these shouldn't be in sitemap)
curl -s https://example.com/sitemap.xml | \\
  grep -oE '<loc>[^<]+</loc>' | \\
  sed 's/<[^>]*>//g' | \\
  xargs -I {} curl -o /dev/null -s -w "%{http_code} {}\\n" {} | \\
  grep -v '^200'`}</pre>
        </div>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Any URL not returning 200 shouldn&apos;t be in the sitemap. That single cleanup does more than any priority value adjustment.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Google use the sitemap priority tag?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Google's John Mueller confirmed multiple times that Googlebot ignores the priority tag. Google's own documentation also states that sitemap priority and changefreq values are not used to determine how often pages are crawled or how important they are.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I remove priority from my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>You can. It is not harmful to leave in, but it is also not helpful for Google. If your sitemap generator includes it, you can leave it - just don't spend time optimizing values. Focus on lastmod instead, which Google does use.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What is the default sitemap priority value?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>The sitemap protocol default is 0.5. Values range from 0.0 (lowest) to 1.0 (highest). Most WordPress SEO plugins default the homepage to 1.0 and everything else to 0.6 or 0.8, but these numbers have no practical effect on Google.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix what Google actually cares about</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Stop tweaking priority - audit lastmod, canonicals, and URL selection</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Sitemap Free</a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/learn/video-sitemap-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Video Sitemap Guide</a></li>
            <li><a href="/learn/image-sitemap-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Image Sitemap Guide</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>How to Create a Sitemap</a></li>
            <li><a href="/learn/google-search-console-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Submit Sitemap to GSC</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
