import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Django - Complete Guide',
  description: 'Optimize your Django sitemap: configure django.contrib.sitemaps, handle pagination, split large querysets, and ship accurate lastmod dates.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/django' },
  openGraph: {
    title: 'Fix Sitemap for Django - Complete Guide',
    description: 'Optimize your Django sitemap: configure django.contrib.sitemaps, handle pagination, split large querysets, and ship accurate lastmod dates.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/django',
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
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Django</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Django
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Django&apos;s django.contrib.sitemaps framework gives you a Sitemap class per model, but incorrect querysets, missing lastmod, and no index view mean production sites routinely ship sitemaps that miss pages or hit the 50k URL limit.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Django sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        A typical Django site exposes sitemap.xml at a URL that renders from Sitemap classes bound to Article, Product, or Category models.
        This guide walks through the configuration, pagination, and performance patterns that produce a clean sitemap.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Django Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Querysets returning all records including is_published=False drafts</li>
        <li>Sitemap responses timing out because the queryset has no select_related and triggers N+1 queries</li>
        <li>Sites framework not configured, causing location() to return paths without domain</li>
        <li>Single sitemap.xml exceeding 50,000 URLs - Google rejects oversized feeds</li>
        <li>Missing lastmod because Sitemap.lastmod returns None when models lack an updated_at field</li>
        <li>Non-canonical URL paths from legacy url patterns leaking into sitemap</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Add &apos;django.contrib.sitemaps&apos; and &apos;django.contrib.sites&apos; to INSTALLED_APPS and set SITE_ID = 1 with the correct Site row pointing at your production domain</li>
        <li style={{ marginBottom: 12 }}>Create a Sitemap subclass per model with filters in items(): return Article.objects.filter(is_published=True, published_at__lte=timezone.now())</li>
        <li style={{ marginBottom: 12 }}>Implement def lastmod(self, obj): return obj.updated_at and add an updated_at DateTimeField(auto_now=True) to every model</li>
        <li style={{ marginBottom: 12 }}>Use the sitemap index view (sitemap_index) in urls.py and register sub-sitemaps per model so each shard stays under 50k URLs</li>
        <li style={{ marginBottom: 12 }}>Wire up urlpatterns += [path(&apos;sitemap.xml&apos;, sitemap_index, ...), path(&apos;sitemap-&lt;section&gt;.xml&apos;, sitemap_section, ...)]</li>
        <li style={{ marginBottom: 12 }}>Cache the sitemap view with @cache_page(60 * 60 * 24) and add select_related / only() to the queryset to avoid N+1 queries</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap.xml and submit to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Django sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/laravel" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Laravel</a></li>
          <li><a href="/fix-sitemap-for/rails" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Ruby on Rails</a></li>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/drupal" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Drupal</a></li>
          <li><a href="/learn/django-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Django Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
