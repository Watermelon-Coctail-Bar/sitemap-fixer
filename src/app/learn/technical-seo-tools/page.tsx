import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Technical SEO Tools: Best Tools for Crawling, Auditing, and Monitoring | SitemapFixer',
  description: "The best technical SEO tools for crawling your site, auditing issues, monitoring performance, and analyzing competitors. Each tool explained with specific use cases.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/technical-seo-tools' },
};
const tools = [
  { name: "Google Search Console", cost: "Free", d: "The most important technical SEO tool because it shows you exactly how Google sees your site. Use it for: monitoring indexed pages, finding crawl errors, checking Core Web Vitals field data, tracking keyword rankings and impressions, submitting sitemaps, and receiving manual action notifications. No other tool provides this direct connection to Google's actual crawl and index data." },
  { name: "Screaming Frog SEO Spider", cost: "Free up to 500 URLs, paid for more", d: "Desktop crawler that mimics Googlebot and crawls your entire site. Use it for: finding broken links (4xx errors), identifying redirect chains, auditing title tags and meta descriptions at scale, exporting all canonical tags, finding pages with missing or duplicate metadata, and comparing your site's structure. Essential for any technical SEO audit." },
  { name: "Ahrefs", cost: "Paid", d: "All-in-one SEO platform strong in backlink analysis, keyword research, and content gap analysis. Technical features: Site Audit crawler finds technical issues similar to Screaming Frog but runs in the cloud, backlink profile analysis shows links pointing to your site, competitor analysis reveals what keywords your competitors rank for." },
  { name: "PageSpeed Insights", cost: "Free", d: "Google's performance measurement tool showing both lab scores (Lighthouse) and real-user field data (CrUX). Use it to: diagnose Core Web Vitals issues, get specific recommendations for LCP, CLS, and INP improvements, and track performance improvements after making changes. Always check the field data (actual user measurements) alongside the lab score." },
  { name: "Chrome DevTools", cost: "Free (built into Chrome)", d: "Browser development tools essential for diagnosing specific technical issues. Key uses: Performance panel to profile JavaScript execution and find long tasks causing INP issues, Network panel to analyze resource loading and identify render-blocking resources, Coverage panel to find unused CSS and JavaScript, Rendering panel to visualize Core Web Vitals issues including CLS Layout Shift Regions." },
  { name: "SitemapFixer", cost: "Free tier available", d: "Specialized tool for sitemap validation and analysis. Checks every URL in your sitemap for: 4xx and 5xx errors, robots.txt blocking conflicts, noindex tag conflicts, redirect chains, and HTTPS vs HTTP inconsistencies. Particularly useful after site migrations and when Google Search Console reports sitemap submission errors." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Technical SEO Tools</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Technical SEO Tools: What to Use and When</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Start your technical audit free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {tools.map(({ name, cost, d }) => (
          <div key={name} style={{ marginBottom: 36, borderLeft: '3px solid #e4e4ed', paddingLeft: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', margin: 0 }}>{name}</h2>
              <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 20, fontWeight: 600, background: cost.startsWith('Free') ? '#dcfce7' : '#fef9c3', color: cost.startsWith('Free') ? '#166534' : '#854d0e' }}>{cost}</span>
            </div>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start your technical SEO audit</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds — no tool install needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
