import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WordPress Robots.txt: The Complete Guide',
  description: 'How to edit WordPress robots.txt via Yoast, Rank Math, All in One SEO, or FTP. Sample file, common mistakes, and GSC testing.',
  keywords: 'wordpress robots.txt, robots.txt wordpress, edit wordpress robots.txt, yoast robots.txt, rank math robots.txt, wordpress robots txt file',
  alternates: { canonical: 'https://sitemapfixer.com/learn/wordpress-robots-txt-guide' },
  openGraph: {
    title: 'WordPress Robots.txt: The Complete Guide',
    description: 'How to edit WordPress robots.txt via Yoast, Rank Math, All in One SEO, or FTP. Sample file, common mistakes, and GSC testing.',
    url: 'https://sitemapfixer.com/learn/wordpress-robots-txt-guide',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Where is the WordPress robots.txt file located?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"By default WordPress generates a virtual robots.txt at yourdomain.com/robots.txt - there is no physical file on disk. As soon as you upload a real robots.txt to the root directory via FTP, WordPress stops serving the virtual one and your file takes over.\"}},{\"@type\":\"Question\",\"name\":\"Should I block /wp-admin/ in robots.txt?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, but allow /wp-admin/admin-ajax.php. WordPress core does this automatically in its virtual robots.txt because many themes and plugins use admin-ajax.php on the frontend and Googlebot needs to reach it.\"}},{\"@type\":\"Question\",\"name\":\"Can I edit robots.txt with Yoast SEO?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Go to Yoast SEO > Tools > File editor. If the editor is missing, your server has disabled file editing (DISALLOW_FILE_EDIT) or the file is not writable. Use FTP as a fallback.\"}}]}";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{'  /  '}
          <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{'  /  '}
          <span>WordPress Robots.txt Guide</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>WordPress Robots.txt: The Complete Guide</h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          The WordPress robots.txt file tells search engines which URLs they may crawl on your site. WordPress generates a virtual robots.txt by default, but you can override it with Yoast, Rank Math, All in One SEO, or by uploading a real file via FTP. This guide shows you exactly how, plus the common WordPress robots.txt mistakes that break indexing.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Audit your WordPress sitemap and robots.txt</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Catch misconfigured Disallow rules in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>Analyze My Site Free</a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What robots.txt does in WordPress</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Robots.txt is a plain text file at the root of your domain (yourdomain.com/robots.txt) that gives crawling instructions to bots. It does not control indexing - a URL blocked by robots.txt can still be indexed if other sites link to it. For indexing control, use a meta robots noindex tag on the page itself. WordPress treats robots.txt as a traffic cop for crawlers: use it to keep bots out of admin, search results, and feed noise, not to hide pages from search.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Default WordPress robots.txt</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          If you have not uploaded a file or installed an SEO plugin, WordPress serves this virtual robots.txt out of the box:
        </p>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php</pre>
        </div>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          This is generated by WordPress core and served dynamically - there is no file on disk. The moment you drop a real robots.txt into your web root, the virtual one is replaced.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to edit robots.txt via Yoast, Rank Math, and All in One SEO</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 12 }}>
          <strong>Yoast SEO:</strong> Go to <em>Yoast SEO &gt; Tools &gt; File editor</em>. Click "Create robots.txt file" if it does not exist yet, edit the contents, and save. Yoast writes a real file to your server root.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 12 }}>
          <strong>Rank Math:</strong> Go to <em>Rank Math &gt; General Settings &gt; Edit robots.txt</em>. Toggle it on and edit inline. Rank Math serves it virtually unless a physical file exists.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          <strong>All in One SEO:</strong> Go to <em>All in One SEO &gt; Tools &gt; Robots.txt Editor</em>. Enable the custom robots.txt toggle and add rules using the visual builder or raw editor.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to edit robots.txt manually via FTP</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Connect to your site with FileZilla or your host's file manager. Navigate to the web root (the folder that contains wp-config.php and wp-content/). Create a plain text file named <code>robots.txt</code>, paste your rules, and upload. Confirm it is live by visiting yourdomain.com/robots.txt - the file should render in your browser. A real file always overrides the virtual WordPress one and any SEO plugin's version.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common WordPress robots.txt mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>Blocking /wp-content/uploads/</strong> - this hides all your images and media from Google Images. Never disallow the uploads folder.</li>
          <li style={{ marginBottom: 8 }}><strong>Blocking /wp-content/ or /wp-includes/ entirely</strong> - Googlebot needs CSS and JS from these folders to render your pages. Blocking them breaks mobile-friendly rendering.</li>
          <li style={{ marginBottom: 8 }}><strong>Blocking /feed/</strong> when you have an RSS feed others rely on - and it does not help SEO either way.</li>
          <li style={{ marginBottom: 8 }}><strong>Using wildcards incorrectly</strong> - <code>Disallow: /*?*</code> blocks every URL with a query string, including legitimate filter and pagination URLs.</li>
          <li style={{ marginBottom: 8 }}><strong>Adding a noindex directive</strong> - Google stopped supporting noindex in robots.txt in 2019. Use a meta robots tag instead.</li>
          <li style={{ marginBottom: 8 }}><strong>Forgetting the Sitemap line</strong> - always declare your sitemap URL so crawlers can find it.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Recommended WordPress robots.txt</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          A safe, modern default for a WordPress blog or business site:
        </p>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>User-agent: *
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /xmlrpc.php
Disallow: /?s=
Disallow: /search/
Allow: /wp-admin/admin-ajax.php
Allow: /wp-content/uploads/

Sitemap: https://yourdomain.com/sitemap.xml
Sitemap: https://yourdomain.com/sitemap_index.xml</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Testing robots.txt in Google Search Console</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Open Search Console and use the <em>Settings &gt; robots.txt</em> report to see the latest fetched version, timestamp, and any parsing errors. You can also use the URL Inspection tool on a specific page - it will tell you if a URL is blocked by robots.txt. After editing, click "Request a recrawl" so Google picks up the new file within a few hours instead of days.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where is the WordPress robots.txt file located?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>By default WordPress generates a virtual robots.txt at yourdomain.com/robots.txt - there is no physical file on disk. As soon as you upload a real robots.txt to the root directory via FTP, WordPress stops serving the virtual one and your file takes over.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I block /wp-admin/ in robots.txt?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, but allow /wp-admin/admin-ajax.php. WordPress core does this automatically in its virtual robots.txt because many themes and plugins use admin-ajax.php on the frontend and Googlebot needs to reach it.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I edit robots.txt with Yoast SEO?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. Go to Yoast SEO &gt; Tools &gt; File editor. If the editor is missing, your server has disabled file editing (DISALLOW_FILE_EDIT) or the file is not writable. Use FTP as a fallback.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your WordPress site for indexing issues</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and robots.txt analysis in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Site Free</a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Fix WordPress Sitemap</a></li>
            <li><a href="/gsc-errors/blocked-by-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Blocked by robots.txt</a></li>
            <li><a href="/gsc-errors/indexed-though-blocked-by-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Indexed though blocked</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>How to Create a Sitemap</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
