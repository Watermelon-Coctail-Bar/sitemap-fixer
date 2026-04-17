import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hreflang and Canonical Tags: How They Work',
  description: 'How hreflang and canonical tags interact. Avoid the most common international SEO mistake that kills localized rankings in Google.',
  keywords: 'hreflang canonical, canonical hreflang, hreflang and canonical, hreflang canonical relationship, international seo canonical, self-referencing canonical hreflang, canonical tag hreflang',
  alternates: { canonical: 'https://sitemapfixer.com/learn/hreflang-canonical-relationship' },
  openGraph: {
    title: 'Hreflang and Canonical Tags: How They Work',
    description: 'How hreflang and canonical tags interact, common mistakes, and the correct combinations for international SEO.',
    url: 'https://sitemapfixer.com/learn/hreflang-canonical-relationship',
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
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Hreflang and Canonical Tags: How They Work Together","description":"How hreflang and canonical tags interact, common mistakes, and correct combinations for international SEO.","url":"https://sitemapfixer.com/learn/hreflang-canonical-relationship","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2026-04-17","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/hreflang-canonical-relationship"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Should hreflang variants canonicalize to each other?","acceptedAnswer":{"@type":"Answer","text":"No. Each hreflang variant must self-canonicalize. A French page should canonical to itself and hreflang to the English, German, and Spanish versions. Canonicalizing all variants to one URL tells Google to ignore the other languages."}},{"@type":"Question","name":"What happens if I set canonical to a different language version?","acceptedAnswer":{"@type":"Answer","text":"Google treats the canonical as a stronger signal than hreflang. Your localized pages will be dropped from the index and only the canonical target will rank, killing visibility in every other market."}},{"@type":"Question","name":"Do hreflang tags need to be reciprocal?","acceptedAnswer":{"@type":"Answer","text":"Yes. If page A points hreflang to page B, page B must point hreflang back to page A. Missing return tags are one of the most common hreflang errors reported in Google Search Console."}}]}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Hreflang and Canonical Tags</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Hreflang and Canonical Tags: How They Work Together</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Audit your hreflang and canonical setup</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>The hreflang canonical relationship is where a surprising number of international sites silently lose rankings. On their own, each tag is simple. Together, they trip up even experienced SEOs. This guide walks through how canonical and hreflang interact, the single most damaging mistake, and the correct pattern for multilingual sites.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How the Canonical Tag Works</h2>
        <p style={{ marginBottom: 20 }}>A canonical tag (<code>&lt;link rel="canonical" href="..."/&gt;</code>) tells Google which URL is the preferred version when multiple URLs serve similar content. Google uses it to consolidate ranking signals on a single URL and to avoid indexing duplicates. Critically, it is a strong hint — not a directive — but in practice Google follows it in the large majority of cases.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How Hreflang Works</h2>
        <p style={{ marginBottom: 20 }}>Hreflang (<code>&lt;link rel="alternate" hreflang="en-us" href="..."/&gt;</code>) tells Google that two URLs are alternate language or regional versions of the same page. It does not consolidate ranking signals; it simply helps Google serve the right version to the right user based on language and country.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>The Relationship: Self-Canonicalize, Then Hreflang</h2>
        <p style={{ marginBottom: 20 }}>The correct pattern is this: every locale version must self-canonicalize AND list every locale (including itself) in the hreflang cluster. The French page canonicals to the French URL. The German page canonicals to the German URL. Both list all language variants via hreflang. This keeps each version indexable while telling Google they are equivalents.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>The Mistake That Kills International SEO</h2>
        <p style={{ marginBottom: 20 }}>The single most damaging mistake: pointing all hreflang variants to one canonical URL (usually the English version). When the French page declares <code>canonical = english URL</code>, Google drops the French page from its index and only ranks the English version — even in France. Every hreflang signal is overridden by the canonical. You lose visibility in every non-canonical market overnight.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Correct Setup Example</h2>
        <p style={{ marginBottom: 12 }}>On <code>example.com/fr/</code>:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: 16, fontSize: 13, fontFamily: 'DM Mono, monospace', overflowX: 'auto', marginBottom: 20 }}>{`<link rel="canonical" href="https://example.com/fr/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/" />
<link rel="alternate" hreflang="de" href="https://example.com/de/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/" />`}</pre>
        <p style={{ marginBottom: 20 }}>On <code>example.com/de/</code>, the canonical changes to the German URL but the hreflang cluster is identical. Every page points to every other page, including itself, and every return tag matches.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What Google Actually Does</h2>
        <p style={{ marginBottom: 20 }}>When canonical and hreflang conflict, canonical wins. Google treats hreflang as a secondary signal — it only activates once Google has decided to index the page. If canonical tells Google not to index a localized version, hreflang becomes irrelevant. This is confirmed in Google Search Central documentation and by John Mueller repeatedly: never canonicalize across languages.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Fix Guide</h2>
        <p style={{ marginBottom: 20 }}>1. Crawl your site and export canonical and hreflang for every localized URL. 2. For each URL, confirm canonical points to itself. 3. Confirm every hreflang cluster is reciprocal — if A points to B, B must point back. 4. Include an <code>x-default</code> tag for users whose language is not covered. 5. Resubmit sitemaps and request reindexing for the affected locales.</p>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/canonical-redirect-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical vs Redirect: When to Use Each for SEO</a></li>
            <li><a href="/learn/canonical-error-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical Tag Errors: How to Diagnose and Fix Them</a></li>
            <li><a href="/learn/canonical-noindex-relationship" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical + Noindex: The Conflict Google Warns About</a></li>
            <li><a href="/learn/how-to-add-canonical-tag-in-html" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Add a Canonical Tag in HTML (With Examples)</a></li>
          </ul>
        </div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find hreflang and canonical conflicts on your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/canonical-redirect-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical vs Redirect</a></li>
          <li><a href="/learn/canonical-error-fix" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical Errors</a></li>
          <li><a href="/learn/canonical-noindex-relationship" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical + Noindex</a></li>
          <li><a href="/learn/how-to-add-canonical-tag-in-html" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Add Canonical in HTML</a></li>
        </ul>
      </div>
    </div>
  );
}
