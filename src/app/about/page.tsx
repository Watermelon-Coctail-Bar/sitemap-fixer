import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SitemapFixer',
  description: "SitemapFixer is built by Arnoldas Arny, a Lithuanian indie founder who got tired of watching technical SEO bugs silently kill indexing. Here's the story.",
  alternates: { canonical: 'https://sitemapfixer.com/about' },
  openGraph: {
    title: 'About SitemapFixer',
    description: "SitemapFixer is built by Arnoldas Arny, a Lithuanian indie founder who got tired of watching technical SEO bugs silently kill indexing.",
    url: 'https://sitemapfixer.com/about',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'About SitemapFixer',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "About SitemapFixer",
  "description": "The story behind SitemapFixer and why it exists.",
  "url": "https://sitemapfixer.com/about",
  "author": { "@type": "Person", "name": "Arnoldas Arny", "url": "https://sitemapfixer.com/about" },
  "publisher": {
    "@type": "Organization",
    "name": "SitemapFixer",
    "url": "https://sitemapfixer.com",
    "logo": { "@type": "ImageObject", "url": "https://sitemapfixer.com/opengraph-image" },
  },
  "datePublished": "2025-11-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sitemapfixer.com/about" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sitemapfixer.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://sitemapfixer.com/about" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Arnoldas Arny",
  "url": "https://sitemapfixer.com/about",
  "jobTitle": "Founder",
  "worksFor": { "@type": "Organization", "name": "SitemapFixer", "url": "https://sitemapfixer.com" },
  "email": "arnoldas@zvinys.lt",
  "nationality": "Lithuanian",
  "sameAs": [
    "https://github.com/Watermelon-Coctail-Bar",
  ],
};

export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <span>About</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>About SitemapFixer</h1>

      <div style={{ fontSize: 18, color: '#3d3d4f', lineHeight: 1.75, marginBottom: 40 }}>
        SitemapFixer is a small, opinionated tool for finding and fixing the boring technical problems that stop Google from indexing your pages. It exists because I kept seeing the same pattern everywhere: great content, decent site, zero traffic, and a sitemap quietly broken in a way no one checked.
      </div>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Try the tool that sparked this whole thing</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>

      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The problem I kept seeing</h2>
        <p>Technical SEO tooling is split into two unhelpful camps. One side is Screaming Frog, Sitebulb, DeepCrawl — incredible depth, but a flat wall of checkboxes if you don&apos;t already know what you&apos;re looking for. The other side is the &quot;Site Audit&quot; tab inside Ahrefs or Semrush, which tells you your H1 is missing on the 404 page and calls it a day.</p>
        <p>Meanwhile the sitemap, which is the single document Google uses to decide what to crawl on your site, gets almost no attention. I&apos;ve seen production sites shipping sitemaps with staging URLs in them. Sites where every URL in the sitemap returns a 301. Sites where the sitemap was generated once in 2021 and never updated. None of the generic audits flagged it as the blocker.</p>
        <p>So people spend a month rewriting meta descriptions while the actual reason Google won&apos;t index them is a five-line XML bug.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Why I built SitemapFixer</h2>
        <p>I kept running into this on client work and on my own projects. Every time I hit it I&apos;d end up in a terminal with <code style={{ background: '#f0f4ff', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>curl</code>, grep, and a mental checklist I&apos;d written down a dozen times. At some point it became obvious the checklist should be a tool.</p>
        <p>I wanted something that does one thing well: pull your sitemap, find what&apos;s wrong with it, and tell you in plain English what to change. Not a 40-page PDF report. Not a dashboard with 18 metrics. Just &quot;these 47 URLs in your sitemap return 404 — here they are, go fix them.&quot;</p>
        <p>The AI pattern-detection piece is there because every site breaks differently. A Webflow sitemap fails in different ways than a Next.js one, which fails in different ways than a WordPress one on a custom theme. Hardcoded rules catch the obvious stuff. Pattern detection catches the rest.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>What I believe about SEO</h2>
        <p><strong style={{ color: '#0a0a0f' }}>Technical SEO is underrated.</strong> The industry is obsessed with content and backlinks because they&apos;re the fun parts. But you can publish 500 excellent articles and rank for nothing if your crawl budget is being burned on faceted-search URLs, or if half your canonicals point to the wrong version of the page. Technical SEO is the foundation. Content on a broken foundation is a waste of writing.</p>
        <p><strong style={{ color: '#0a0a0f' }}>Most &quot;AI SEO tools&quot; are just longer output.</strong> A good tool makes decisions simpler, not your report longer. If I have to read 30 pages to find out what to do next, the tool failed. SitemapFixer uses AI to narrow down what matters, not to generate filler.</p>
        <p><strong style={{ color: '#0a0a0f' }}>Sitemap.xml is the most-ignored high-leverage asset in SEO.</strong> It&apos;s the one file you directly hand Google that says &quot;index these pages.&quot; If it&apos;s wrong, everything downstream is wrong. Almost no one audits it.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The team</h2>
        <p>It&apos;s me. My name is Arnoldas Arny. I&apos;m a Lithuanian indie founder and I run a handful of small web tools on the side — ImageSEO, AudioUtils, SitemapFixer, a few others. SitemapFixer is built openly, without a VC playbook, without a growth hacker in the loop, without a content farm. If something on the site sounds like it was written by a human with opinions, that&apos;s because it was. If you ever want to yell at me about a bug, my personal email is below.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How this is funded</h2>
        <p>The free tier is real. One analysis per month, no credit card, no &quot;start your 7-day trial&quot; wall in front of it. Paid tiers fund development, and that&apos;s the entire business model.</p>
        <p>No ads. No email list resale. No selling what your sitemap looks like to data brokers. No dark patterns on the checkout. If the business ever stops making sense, I&apos;ll say so on this page and shut it down cleanly — not sell it to someone who&apos;ll strip-mine it.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Contact</h2>
        <p>Support: <a href="mailto:support@sitemapfixer.com" style={{ color: '#2d5be3', textDecoration: 'none' }}>support@sitemapfixer.com</a></p>
        <p>Direct to me: <a href="mailto:arnoldas@zvinys.lt" style={{ color: '#2d5be3', textDecoration: 'none' }}>arnoldas@zvinys.lt</a>. I read every email. Replies sometimes take a day or two because indie founder, but they come.</p>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>See what&apos;s wrong with your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis. One URL. 60 seconds.</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
