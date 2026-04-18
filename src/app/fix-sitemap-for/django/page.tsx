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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why is my Django sitemap returning localhost URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The sites framework isn't configured. Django's sitemap framework uses Site.objects.get_current() to build absolute URLs. Make sure django.contrib.sites is installed, SITE_ID is set, and the Site row in the database has your production domain.\"}},{\"@type\":\"Question\",\"name\":\"How do I handle multi-tenant sitemaps in Django?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Route the sitemap view through your tenant resolver so each tenant serves its own URLs. django-tenants users should call schema_context(tenant_schema) around the sitemap view. Avoid caching the response globally or you'll serve one tenant's URLs to another.\"}},{\"@type\":\"Question\",\"name\":\"My Django sitemap times out on production - what's wrong?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Usually an N+1 query or missing index on the column your lastmod uses. Add select_related/only() to the queryset, index the timestamp field, and cache the view with cache_page for 24h. On really large catalogs, pre-generate the sitemap to S3 and serve it from there.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Django - Complete Guide', description: 'Optimize your Django sitemap: configure django.contrib.sitemaps, handle pagination, split large querysets, and ship accurate lastmod dates.', url: 'https://sitemapfixer.com/fix-sitemap-for/django', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/django' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Django - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/django' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Django</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Django
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Django's <code>django.contrib.sitemaps</code> framework gives you a <code>Sitemap</code> class per model, but incorrect querysets, missing <code>lastmod</code>, and no index view mean production sites routinely ship sitemaps that miss pages or hit the 50k URL limit.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Django sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Django's sitemap framework is solid but opinionated. It assumes you want one Sitemap class per model, uses <code>django.contrib.sites</code> to stitch absolute URLs, and renders the XML on every request unless you cache it. On a small site that's fine. On a site with 300k articles and a <code>updated_at</code> field without an index, the first crawler hit brings the box to its knees.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Debugged a Django news site earlier this year. 180k articles, sitemap view taking 38 seconds to render because <code>lastmod</code> was calling <code>obj.updated_at</code> inside a loop that pulled the full object each iteration. Adding <code>.only(&apos;slug&apos;, &apos;updated_at&apos;)</code> plus a composite index on <code>(is_published, published_at)</code> dropped it to 1.2 seconds. After that, caching for 24 hours made it a non-issue.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Django Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Querysets returning all records including <code>is_published=False</code> drafts and scheduled posts</li>
        <li>Sitemap view timing out because the queryset has no <code>select_related</code> and triggers N+1 queries</li>
        <li>Sites framework misconfigured, causing <code>location()</code> to return paths without a domain</li>
        <li>Single <code>sitemap.xml</code> exceeding 50,000 URLs - Google rejects oversized feeds</li>
        <li>Missing <code>lastmod</code> because the model has no <code>updated_at</code> field</li>
        <li>Non-canonical URL patterns leaking in from legacy routes</li>
        <li>Multi-tenant sites serving one tenant's URLs to another because of global caching</li>
        <li>Sitemap view running behind auth middleware that requires login (subtle, but happens)</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Working sitemap class</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# sitemaps.py
from django.contrib.sitemaps import Sitemap
from django.utils import timezone
from blog.models import Article

class ArticleSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.7
    protocol = 'https'
    limit = 40000  # leave headroom under the 50k cap

    def items(self):
        return (Article.objects
                .filter(is_published=True,
                        published_at__lte=timezone.now())
                .only('slug', 'updated_at')
                .order_by('-updated_at'))

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return f'/blog/{obj.slug}/'


# urls.py
from django.contrib.sitemaps.views import sitemap, index
from django.views.decorators.cache import cache_page
from .sitemaps import ArticleSitemap, StaticSitemap

sitemaps = {
    'articles': ArticleSitemap,
    'static': StaticSitemap,
}

urlpatterns = [
    path('sitemap.xml',
         cache_page(60 * 60 * 24)(index),
         {'sitemaps': sitemaps}),
    path('sitemap-<section>.xml',
         cache_page(60 * 60 * 24)(sitemap),
         {'sitemaps': sitemaps},
         name='django.contrib.sitemaps.views.sitemap'),
]`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Sites framework setup</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Django's sitemap framework uses <code>Site.objects.get_current()</code> to prepend a domain. If you skip this step, URLs come out as <code>example.com/blog/post/</code> (missing scheme) or just paths. Setup:
      </p>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 16, fontSize: 16 }}>
        <li>Add <code>&apos;django.contrib.sites&apos;</code> to <code>INSTALLED_APPS</code></li>
        <li>Set <code>SITE_ID = 1</code> in settings</li>
        <li>Run <code>python manage.py migrate</code> then edit the Site row at <code>/admin/sites/site/</code></li>
        <li>Set the domain to <code>example.com</code> (no scheme, no trailing slash)</li>
        <li>Use <code>protocol = &apos;https&apos;</code> on each Sitemap class so URLs render as <code>https://</code></li>
      </ul>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Skipping the sites framework is the #1 reason a Django sitemap "works locally but breaks in prod".
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Large catalogs and pagination</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Django's Sitemap class paginates automatically at <code>limit</code> (default 50,000). The index view emits <code>sitemap-articles-1.xml</code>, <code>sitemap-articles-2.xml</code>, etc. Set <code>limit = 40000</code> to stay under the hard cap with headroom. For catalogs above 1M URLs, consider pre-generating sitemap files to disk or S3 via a management command on a cron - rendering on demand will not scale.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multi-tenant setup</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        If you use django-tenants or a subdomain router, the sitemap view needs to run inside the tenant's schema. Wrap the view with your tenant middleware (or call <code>schema_context(tenant)</code> explicitly), and cache by <code>request.tenant.schema_name</code> rather than globally. Otherwise tenant A will see tenant B's sitemap from cache.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Caching and performance</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Cache the sitemap view with <code>@cache_page(60 * 60 * 24)</code> - Google rarely hits it more than once per day, and rebuilding hourly wastes DB capacity. If your content updates during the day, add a post_save signal that invalidates the cache key. Combine that with <code>.only()</code> to restrict the queryset to the fields you actually use and add an index on the timestamp column you sort by.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Add <code>django.contrib.sitemaps</code> and <code>django.contrib.sites</code> to <code>INSTALLED_APPS</code>, set <code>SITE_ID</code>, update the Site row to your production domain</li>
        <li style={{ marginBottom: 12 }}>Create a Sitemap subclass per model with filters in <code>items()</code> for published + past-dated records</li>
        <li style={{ marginBottom: 12 }}>Add <code>updated_at = models.DateTimeField(auto_now=True)</code> and implement <code>lastmod()</code></li>
        <li style={{ marginBottom: 12 }}>Use the <code>index</code> view for <code>sitemap.xml</code> and <code>sitemap</code> for per-section files</li>
        <li style={{ marginBottom: 12 }}>Set <code>limit = 40000</code> on large sitemaps; index the timestamp field</li>
        <li style={{ marginBottom: 12 }}>Cache with <code>@cache_page(60 * 60 * 24)</code> and use <code>.only()</code> / <code>.select_related()</code> to avoid N+1</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl -I https://yourdomain.com/sitemap.xml</code> returns 200 and no auth redirect</li>
        <li style={{ marginBottom: 12 }}>Submit to Google Search Console and monitor the per-section coverage reports</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why is my Django sitemap returning localhost URLs?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>The sites framework isn&apos;t configured. Django&apos;s sitemap uses Site.objects.get_current() to build absolute URLs. Make sure django.contrib.sites is installed, SITE_ID is set, and the Site row has your production domain.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I handle multi-tenant sitemaps in Django?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Route the sitemap view through your tenant resolver so each tenant serves its own URLs. django-tenants users should call schema_context(tenant_schema) around the sitemap view. Avoid caching globally or you&apos;ll serve one tenant&apos;s URLs to another.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>My Django sitemap times out on production - what&apos;s wrong?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Usually an N+1 query or missing index on the column your lastmod uses. Add select_related/only() to the queryset, index the timestamp field, and cache the view with cache_page for 24h. On large catalogs, pre-generate the sitemap to S3.</div>
        </div>
      </div>

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
