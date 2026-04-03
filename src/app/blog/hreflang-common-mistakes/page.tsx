import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hreflang Common Mistakes: Why Your International SEO Is Broken | SitemapFixer',
  description: "Hreflang is one of the most error-prone SEO implementations. Here are the 7 most common hreflang mistakes and exactly how to fix each one.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/hreflang-common-mistakes' },
  openGraph: { title: 'Hreflang Common Mistakes and Fixes', description: 'The 7 most common hreflang mistakes and how to fix them.', url: 'https://sitemapfixer.com/blog/hreflang-common-mistakes', type: 'article' },
};
const mistakes = [
  { t: "Missing x-default tag", d: "Every hreflang implementation needs an x-default tag to specify what Google shows to users who do not match any of your specified locales. Without it, Google may show users the wrong language version. Fix: add link rel=alternate hreflang=x-default href=https://yoursite.com/default-page on every page in the hreflang set, pointing to your default or international-facing version." },
  { t: "Tags not bidirectional", d: "If page A references page B in its hreflang tags, page B must also reference page A. Unidirectional hreflang tags are invalid and ignored by Google. This is the most common hreflang implementation error. Fix: audit every page in your hreflang set and verify that every URL referenced in the alternates is present on all other pages in the set. In practice, this means maintaining a consistent hreflang implementation across your entire site - not just some pages." },
  { t: "Wrong locale codes", d: "Google uses IETF language tags (BCP 47) for hreflang values. en-US is correct; en_US (underscore) is invalid. Common mistakes: using EN instead of en, using en-uk instead of en-GB, using pt instead of pt-BR for Brazilian Portuguese. Fix: consult the IANA Language Subtag Registry for correct codes. Common ones: en for English worldwide, en-GB for UK English, en-US for US English, es for Spanish worldwide, es-ES for Spain, pt-BR for Brazil, zh-Hans for Simplified Chinese." },
  { t: "Implementing hreflang on some pages but not others", d: "Partial hreflang implementations confuse Google. If your homepage has hreflang tags but your product pages do not, Google cannot reliably determine which version to show for product queries. Fix: hreflang must be implemented consistently across all pages that have multilingual equivalents. If you are using a sitemap-based implementation, ensure all language versions appear in the sitemap hreflang entries." },
  { t: "Canonical and hreflang conflicts", d: "A page should have a self-referencing canonical AND hreflang tags - these are not mutually exclusive. A common mistake is setting the canonical of all language variants to point to the default language page, which tells Google all variants are duplicates. Fix: each language version should have a self-referencing canonical (canonical pointing to itself, not to the default language) plus hreflang tags pointing to all other language versions." },
  { t: "Using hreflang for the same language in different countries", d: "Hreflang can specify language-only (en), country-only is invalid, or language + country (en-US). If you want to target US vs UK English specifically, use en-US and en-GB. If you only have one English version and want to serve all English speakers, use just en. Many sites incorrectly create separate pages for the same language in different countries with no actual content differences - this creates duplicate content without SEO benefit." },
  { t: "Not testing after implementation", d: "Hreflang errors are silent - Google does not show indexing errors for invalid hreflang (unlike sitemap errors). Use the hreflang Testing Tool by Aleyda Solis or Sistrix Toolbox to test your implementation. Google Search Console International Targeting report (under Legacy Tools) shows detected alternate pages and any implementation issues. Test a representative sample of pages from each language section after implementation." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Hreflang Common Mistakes</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Hreflang Common Mistakes: Why Your International SEO Is Broken</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your international sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Hreflang tells Google which language version to show to which users. When it works, it eliminates international duplicate content issues. When it is wrong, Google ignores it entirely and shows the wrong version to your users. Here are the 7 mistakes that break most hreflang implementations.</p>
        {mistakes.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your international sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks hreflang patterns and conflicts</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </article>
  );
}
