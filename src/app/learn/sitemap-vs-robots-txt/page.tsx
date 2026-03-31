import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap vs robots.txt - What is the Difference? | SitemapFixer',
  description: 'Confused about sitemap.xml vs robots.txt? Learn exactly what each file does, how they interact, and why you need both for effective technical SEO.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/sitemap-vs-robots-txt' },
  openGraph: {
    title: 'Sitemap vs robots.txt - What is the Difference?',
    description: 'Confused about sitemap.xml vs robots.txt? Learn exactly what each file does, how they interact, and why you need both for effective technical SEO.',
    url: 'https://sitemapfixer.com/learn/sitemap-vs-robots-txt',
    type: 'article',
  },
};

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>
        {'  '}
        <span>Sitemap vs robots.txt - What is the Difference?</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        Sitemap vs robots.txt - What is the Difference?
      </h1>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your sitemap for free </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer
        </a>
      </div>

      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Sitemaps and robots.txt files are both technical SEO essentials, but they serve opposite purposes. Understanding the difference - and how they interact - is fundamental to managing how search engines crawl your site.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What robots.txt Does</h2>
        <p style={{ marginBottom: 20 }}>robots.txt tells crawlers what they CANNOT access. It's a set of permissions - blocking crawlers from directories, file types, or specific URLs you don't want crawled. Example:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: '16px', overflow: 'auto', fontSize: 13, lineHeight: 1.6, fontFamily: 'DM Mono, monospace' }}><code>User-agent: *
Disallow: /admin/
Disallow: /checkout/
Allow: /</code></pre>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What sitemap.xml Does</h2>
        <p style={{ marginBottom: 20 }}>Your sitemap tells crawlers what they SHOULD visit. It's a positive signal - a list of all the important URLs you want discovered and indexed.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>The Critical Interaction</h2>
        <p style={{ marginBottom: 20 }}>Here's where many sites make a serious mistake: if a URL appears in your sitemap but is also blocked by robots.txt, Google faces a contradiction. The official behavior is that robots.txt wins - blocked URLs won't be crawled even if they're in the sitemap.</p>
        <p style={{ marginBottom: 20 }}>**Always ensure**: URLs in your sitemap are NOT blocked by robots.txt.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Do You Need Both?</h2>
        <p style={{ marginBottom: 20 }}>Yes. robots.txt controls crawl access. Sitemaps guide discovery. They work together - your robots.txt should reference your sitemap URL: `Sitemap: https://yoursite.com/sitemap.xml`</p>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap 
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>More guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Best Practices</a></li>
          <li><a href="/learn/sitemap-vs-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap vs robots.txt</a></li>
          <li><a href="/learn/why-pages-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Why Pages Not Indexed</a></li>
        </ul>
      </div>
    </div>
  );
}
