import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SEO Audit Tools: Best Tools for a Complete SEO Audit | SitemapFixer',
  description: "An SEO audit needs the right tools. Here are the best tools for auditing technical SEO, on-page quality, backlinks, and Core Web Vitals - with free options for each.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/seo-audit-tools' },
};
const categories = [
  { t: "Technical SEO audit tools", d: "Screaming Frog SEO Spider (free to 500 URLs) crawls your entire site and exports all URLs with their status codes, title tags, meta descriptions, canonical tags, and internal links - essential for any technical audit. Google Search Console (free) is the authoritative source for indexing status, crawl errors, and Core Web Vitals. SitemapFixer (free) specifically audits your sitemap for URL errors, robots.txt conflicts, and noindex conflicts. PageSpeed Insights (free) measures Core Web Vitals for any URL." },
  { t: "On-page and content audit tools", d: "Screaming Frog exports all pages with word count, title length, meta description length, H1 presence, and duplicate content flags. Ahrefs Site Audit flags thin content, missing meta tags, and broken links across your site. Semrush Site Audit covers similar ground with slightly different visualization. For content quality analysis beyond technical metrics, manually reviewing your top and bottom-performing pages in Google Search Console Performance gives the clearest signal." },
  { t: "Backlink audit tools", d: "Ahrefs Site Explorer provides the most comprehensive backlink data - external links, referring domains, domain rating, and lost links. Google Search Console Links report (free) shows what Google has actually discovered. Semrush Backlink Analytics offers comparable data at a similar price point. For disavow file creation: use Ahrefs or GSC to export your backlink list, then filter for obvious spam patterns." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>SEO Audit Tools</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>SEO Audit Tools: Best Tools for a Complete Site Audit</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Start your audit with SitemapFixer - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {categories.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start your audit with the sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks your sitemap in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
