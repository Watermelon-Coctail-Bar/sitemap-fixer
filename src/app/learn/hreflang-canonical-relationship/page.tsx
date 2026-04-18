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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Hreflang and Canonical Tags: How They Work Together","description":"How hreflang and canonical tags interact, common mistakes, and correct combinations for international SEO.","url":"https://sitemapfixer.com/learn/hreflang-canonical-relationship","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2026-04-17","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/hreflang-canonical-relationship"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Should hreflang variants canonicalize to each other?","acceptedAnswer":{"@type":"Answer","text":"No. Each hreflang variant must self-canonicalize. A French page should canonical to itself and hreflang to the English, German, and Spanish versions. Canonicalizing all variants to one URL tells Google to ignore the other languages."}},{"@type":"Question","name":"What happens if I set canonical to a different language version?","acceptedAnswer":{"@type":"Answer","text":"Google treats the canonical as a stronger signal than hreflang. Your localized pages will be dropped from the index and only the canonical target will rank, killing visibility in every other market."}},{"@type":"Question","name":"Do hreflang tags need to be reciprocal?","acceptedAnswer":{"@type":"Answer","text":"Yes. If page A points hreflang to page B, page B must point hreflang back to page A. Missing return tags are one of the most common hreflang errors reported in Google Search Console."}}]}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Hreflang and Canonical Tags</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
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

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>A Real Case: 8-Locale SaaS Site That Dropped 62% in 6 Weeks</h2>
        <p style={{ marginBottom: 20 }}>Last year I audited a B2B SaaS site running 8 locales. Their developer had read somewhere that duplicate content across languages was a problem (it isn&apos;t, not if it&apos;s genuinely translated), and set canonical on every localized URL to point back to the English homepage.</p>
        <p style={{ marginBottom: 20 }}>The result: non-English impressions dropped from around 140k/month to under 54k in six weeks. French, German, and Spanish pages disappeared from <code>site:</code> queries. The English homepage didn&apos;t gain rankings to compensate. Traffic just vanished.</p>
        <p style={{ marginBottom: 20 }}>Fix took a single deploy and five days to recover. Self-canonical on every locale, full hreflang cluster with x-default, resubmit sitemaps. By week 3 after the fix, non-English traffic had already overtaken pre-crash levels. Here&apos;s the thing most guides get wrong: they explain the rule without showing how fast the damage compounds. Lose 10 days and you lose a quarter.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>The Valid Combinations Matrix</h2>
        <p style={{ marginBottom: 20 }}>Think of it as a 2x2. Canonical either points to self or to another locale. Hreflang either references other locales or doesn&apos;t.</p>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`Self-canonical + hreflang to siblings    VALID  ← the only correct pattern
Self-canonical + no hreflang             OK if no translations exist
Cross-canonical + hreflang to siblings   BROKEN (canonical wins, hreflang ignored)
Cross-canonical + no hreflang            Duplicates consolidated, translations lost
No canonical + hreflang                  Risky — Google picks a canonical itself`}</pre>
        </div>
        <p style={{ marginBottom: 20 }}>Only the first row ranks localized content. Every other configuration either loses translations from the index or gambles with Google&apos;s canonicalization heuristics.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Mistakes I Keep Seeing</h2>
        <p style={{ marginBottom: 12 }}>Six patterns I run into across almost every international audit:</p>
        <ul style={{ marginBottom: 20, paddingLeft: 24 }}>
          <li style={{ marginBottom: 8 }}><strong>Region codes without language codes.</strong> <code>hreflang=&quot;uk&quot;</code> is Ukrainian, not United Kingdom. Use <code>en-gb</code>.</li>
          <li style={{ marginBottom: 8 }}><strong>Underscores instead of hyphens.</strong> <code>en_US</code> is invalid — Google needs <code>en-US</code>.</li>
          <li style={{ marginBottom: 8 }}><strong>Trailing slash mismatches.</strong> <code>/fr</code> in hreflang, <code>/fr/</code> in canonical. Google treats them as different URLs.</li>
          <li style={{ marginBottom: 8 }}><strong>x-default pointing to a language picker page that noindexes.</strong> The fallback needs to be indexable.</li>
          <li style={{ marginBottom: 8 }}><strong>Hreflang only in the sitemap, no return tags on-page.</strong> This works, but if anyone adds HTML hreflang later, the mix breaks.</li>
          <li style={{ marginBottom: 8 }}><strong>Developers auto-generating hreflang from locale URLs that redirect.</strong> Hreflang targets must be 200 OK, not 301s.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Diagnose This in 10 Minutes</h2>
        <p style={{ marginBottom: 20 }}>You don&apos;t need a full crawl. Open DevTools on any localized URL, filter Elements by <code>rel=</code>, and check two things: does the canonical point to the current URL, and does the hreflang list include every locale (including this one)?</p>
        <p style={{ marginBottom: 20 }}>For a site-wide pass, Screaming Frog&apos;s Hreflang report flags missing return tags, non-canonical hreflang targets, and language code errors in one export. GSC&apos;s International Targeting report is slower to update but catches issues Google has actually seen.</p>
        <p style={{ marginBottom: 20 }}>One quick curl check:</p>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`curl -s https://example.com/fr/pricing | grep -E 'canonical|hreflang'`}</pre>
        </div>
        <p style={{ marginBottom: 20 }}>If the canonical doesn&apos;t end in <code>/fr/pricing</code>, you&apos;ve found the bug.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>When the Rule Bends: Edge Cases</h2>
        <p style={{ marginBottom: 20 }}>Real SEO has exceptions. A few where the straightforward pattern breaks down:</p>
        <p style={{ marginBottom: 20 }}><strong>Identical content across regions.</strong> If your en-US and en-GB pages are byte-for-byte identical with no regional content, you do not need hreflang — you can let Google pick one. But if they differ by pricing, shipping, or phone numbers, hreflang is worth it even when the prose is identical.</p>
        <p style={{ marginBottom: 20 }}><strong>Paginated listings with hreflang.</strong> Page 2 of the German blog archive should hreflang to page 2 of the French archive, not page 1. Mismatched pagination + hreflang is a surprisingly common source of cannibalization.</p>
        <p style={{ marginBottom: 20 }}><strong>Partial translations.</strong> If only half your product pages are translated, don&apos;t stub out the untranslated locales with English fallbacks served under <code>/de/</code>. Either translate the page or omit it from the hreflang cluster. Serving English at a German URL confuses both Google and users.</p>
        <p style={{ marginBottom: 20 }}><strong>Mobile separate URLs (m.example.com).</strong> Mobile alternates are handled via <code>rel=alternate media</code>, not hreflang. Don&apos;t mix them in the same cluster.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>HTML vs Sitemap vs HTTP Header Hreflang</h2>
        <p style={{ marginBottom: 20 }}>You can declare hreflang three ways. Each has tradeoffs I&apos;ve banged my head against on real sites.</p>
        <p style={{ marginBottom: 20 }}><strong>HTML link tags in head.</strong> Most common. Easy to audit — View Source, look for <code>rel=&quot;alternate&quot;</code>. Downside: every locale&apos;s page needs the complete cluster, which for a 15-locale site means 15 tags per page. On a site with 10,000 pages per locale, that&apos;s 150,000 hreflang tags total. Cache management gets expensive.</p>
        <p style={{ marginBottom: 20 }}><strong>XML sitemap.</strong> Scales better. One sitemap entry per URL with <code>&lt;xhtml:link&gt;</code> children listing all alternates. Google parses it once per sitemap fetch. Downside: if you also have HTML hreflang and they disagree, Google uses the stronger signal (usually HTML). Pick one method and stick to it.</p>
        <p style={{ marginBottom: 20 }}><strong>HTTP Link header.</strong> For non-HTML resources (PDFs served in multiple languages, for example). Rare but the only option for those cases.</p>
        <p style={{ marginBottom: 20 }}>My recommendation for new sites: HTML for 1-5 locales, sitemap for 6+. Simpler mental model, smaller blast radius when something goes wrong.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What Happens During a Site Migration</h2>
        <p style={{ marginBottom: 20 }}>Migrations are where hreflang clusters silently break. A client consolidated 12 regional subdomains (fr.example.com, de.example.com) to subdirectories (example.com/fr/, example.com/de/) last year. Their dev team set up 301 redirects from subdomains to subdirectories. Perfect.</p>
        <p style={{ marginBottom: 20 }}>Except the hreflang cluster on every migrated page still pointed to the old subdomain URLs. So each canonical said &quot;I am example.com/fr/this-page&quot; while hreflang said &quot;my German sibling lives at de.example.com/this-page&quot; — a URL that now 301s to example.com/de/this-page. Google followed the redirects but logged the hreflang as invalid (hreflang targets must be 200, not 301).</p>
        <p style={{ marginBottom: 20 }}>For 10 weeks, GSC&apos;s International Targeting report showed hundreds of &quot;No return tags&quot; errors. Rankings in non-English markets softened by 15-20%. Fix was to update the hreflang cluster to the new URLs in one deploy. Recovery took 4 weeks. If you&apos;re migrating an international site, audit hreflang the day your redirects go live, not a month later.</p>

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
