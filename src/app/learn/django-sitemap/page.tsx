import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Django Sitemap: Using the Built-in Sitemaps Framework',
  description: "Django has a built-in sitemap framework. Here is how to set it up, add your models, generate dynamic sitemaps, and fix common configuration issues.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/django-sitemap' },
  openGraph: {
    title: 'Django Sitemap: Using the Built-in Sitemaps Framework',
    description: 'Django has a built-in sitemap framework. Here is how to set it up, add your models, generate dynamic sitemaps, and fix common configuration issues.',
    url: 'https://sitemapfixer.com/learn/django-sitemap',
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
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Django Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Django Sitemap: Using the Built-in Sitemaps Framework</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Django sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Django ships with a built-in sitemaps framework in django.contrib.sitemaps. Unlike most frameworks, you do not need a third-party package. You define sitemap classes for each type of content, wire them into your URL configuration, and Django serves them at /sitemap.xml automatically. The framework also supports sitemap indexes out of the box.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Basic Setup</h2>
        <p style={{ marginBottom: 16 }}>Add django.contrib.sitemaps to INSTALLED_APPS and django.contrib.sites if not already present. Then define a sitemap class and wire it up:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}># sitemaps.py</div>
          <div>from django.contrib.sitemaps import Sitemap</div>
          <div>from .models import BlogPost</div>
          <div style={{ marginTop: 8 }}>class BlogSitemap(Sitemap):</div>
          <div style={{ paddingLeft: 20 }}>changefreq = "weekly"</div>
          <div style={{ paddingLeft: 20 }}>priority = 0.7</div>
          <div style={{ paddingLeft: 20 }}>def items(self):</div>
          <div style={{ paddingLeft: 40 }}>return BlogPost.objects.filter(published=True)</div>
          <div style={{ paddingLeft: 20 }}>def lastmod(self, obj):</div>
          <div style={{ paddingLeft: 40 }}>return obj.updated_at</div>
        </div>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}># urls.py</div>
          <div>from django.contrib.sitemaps.views import sitemap</div>
          <div>from .sitemaps import BlogSitemap</div>
          <div>sitemaps = {"{'blog': BlogSitemap}"}</div>
          <div>urlpatterns = [</div>
          <div style={{ paddingLeft: 20 }}>path("sitemap.xml", sitemap, {"{'sitemaps': sitemaps}"},</div>
          <div style={{ paddingLeft: 40 }}>name="django.contrib.sitemaps.views.sitemap"),</div>
          <div>]</div>
        </div>
        <p style={{ marginBottom: 24 }}>Each item returned by items() must implement get_absolute_url(). Django calls this method on each object to generate the URL in the sitemap. If your model does not have get_absolute_url(), either add it or override the location() method in your sitemap class.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The Sites Framework Requirement</h2>
        <p style={{ marginBottom: 24 }}>Django sitemaps use the Sites framework to determine your domain name. You must have a Site record in your database with your correct production domain. Go to the Django admin, then Sites, and update the example.com entry to your actual domain. If the Sites framework is not configured correctly, all sitemap URLs will use example.com instead of your real domain - a common mistake that causes the sitemap to be rejected by Google.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Caching Django Sitemaps</h2>
        <p style={{ marginBottom: 24 }}>Django sitemaps are generated on every request by default. For large sites, this is expensive. Use Django cache_page decorator or the cached_sitemap view wrapper: from django.contrib.sitemaps.views import sitemap and wrap it with cache_page(60 * 60 * 24) to cache for 24 hours. Invalidate the cache when content changes using Django signals - send a cache clear signal on post_save for your content models.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Django Sitemap Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>DisallowedHost error when generating sitemap:</strong> This happens if your ALLOWED_HOSTS setting does not include the domain being used to access the sitemap. Make sure your production domain is in ALLOWED_HOSTS.</p>
        <p style={{ marginBottom: 24 }}><strong>get_absolute_url not defined:</strong> Django throws a ImproperlyConfigured error if items in your sitemap do not have get_absolute_url(). Add the method to your model or override location() in your Sitemap class to return the correct URL path for each object.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Django sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks every URL in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress Sitemap: Setup, Fix, and Submit Guide</a></li>
            <li><a href="/learn/shopify-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Shopify Sitemap: Location, Errors, and How to Submit It</a></li>
            <li><a href="/learn/wix-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Wix Sitemap: How It Works and How to Submit It</a></li>
            <li><a href="/learn/squarespace-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Squarespace Sitemap: How It Works and Common Fixes</a></li>
            <li><a href="/learn/webflow-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Webflow Sitemap: How It Works and How to Submit It</a></li>
          </ul>
        </div>
    </div>
  );
}
