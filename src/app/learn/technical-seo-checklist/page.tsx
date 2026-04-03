import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Technical SEO Checklist 2025 | SitemapFixer',
  description: 'Complete technical SEO checklist for 2025. Sitemap, robots.txt, Core Web Vitals, indexing, canonicals, structured data - everything you need to audit.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/technical-seo-checklist' },
  openGraph: { title: 'Technical SEO Checklist 2025', description: 'Everything you need for a technical SEO audit.', url: 'https://sitemapfixer.com/learn/technical-seo-checklist', type: 'article' },
};
function Check({ done, text }: { done?: boolean; text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
      <div style={{ width: 20, height: 20, borderRadius: 4, border: '2px solid #2d5be3', background: done ? '#2d5be3' : 'transparent', flexShrink: 0, marginTop: 2 }} />
      <span style={{ fontSize: 15, color: '#3d3d4f', lineHeight: 1.6 }}>{text}</span>
    </div>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #e4e4ed' }}>{title}</h2>
      {children}
    </div>
  );
}
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Technical SEO Checklist</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Technical SEO Checklist 2025</h1>
      <p style={{ fontSize: 16, color: '#6b6b7d', marginBottom: 40 }}>Use this checklist to audit and fix technical SEO issues that prevent your pages from ranking.</p>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Run an automated technical SEO audit free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <Section title="Sitemap">
        <Check text="XML sitemap exists at /sitemap.xml or /sitemap_index.xml" />
        <Check text="Sitemap is submitted to Google Search Console" />
        <Check text="Sitemap is referenced in robots.txt" />
        <Check text="All URLs in sitemap return 200 status" />
        <Check text="No noindex pages included in sitemap" />
        <Check text="No URLs blocked by robots.txt included in sitemap" />
        <Check text="All URLs use canonical versions (HTTPS, trailing slash consistent)" />
        <Check text="Sitemap is under 50,000 URLs and 50MB" />
        <Check text="lastmod dates are accurate and updated on content changes" />
      </Section>
      <Section title="Robots.txt">
        <Check text="Robots.txt exists at /robots.txt and returns 200" />
        <Check text="Site is not accidentally blocked with Disallow: /" />
        <Check text="CSS and JS files are not blocked" />
        <Check text="Sitemap URL is declared in robots.txt" />
        <Check text="No important pages are unintentionally blocked" />
      </Section>
      <Section title="Indexing">
        <Check text="Check Index Coverage report in Google Search Console" />
        <Check text="Fix all Error status pages immediately" />
        <Check text="Review all Excluded pages to confirm they are intentionally excluded" />
        <Check text="No important pages have noindex tag" />
        <Check text="All important pages are crawlable by Googlebot" />
      </Section>
      <Section title="Canonical Tags">
        <Check text="Every page has a self-referencing canonical tag" />
        <Check text="Canonical tags use absolute URLs with HTTPS" />
        <Check text="No canonical chains (A canonicals to B which canonicals to C)" />
        <Check text="Canonical targets are not blocked by robots.txt" />
        <Check text="Sitemap only contains canonical URLs" />
      </Section>
      <Section title="Core Web Vitals">
        <Check text="LCP (Largest Contentful Paint) under 2.5 seconds" />
        <Check text="FID/INP (Interaction to Next Paint) under 200ms" />
        <Check text="CLS (Cumulative Layout Shift) under 0.1" />
        <Check text="Core Web Vitals pass in Google Search Console" />
        <Check text="Images are properly sized and use modern formats (WebP/AVIF)" />
      </Section>
      <Section title="Redirects and Links">
        <Check text="No redirect chains (A redirects to B to C)" />
        <Check text="No redirect loops" />
        <Check text="Internal links use canonical URLs (not redirecting versions)" />
        <Check text="No broken internal links returning 404" />
        <Check text="HTTP automatically redirects to HTTPS" />
      </Section>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Run this checklist automatically</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>SitemapFixer checks most of these items for you in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
