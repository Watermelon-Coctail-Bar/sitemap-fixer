import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create an XML Sitemap | SitemapFixer",
  description: "Learn how to create an XML sitemap for any website.",
  alternates: { canonical: "https://sitemapfixer.com/learn/how-to-create-a-sitemap" },
  openGraph: { title: "How to Create an XML Sitemap", description: "Step-by-step guide.", url: "https://sitemapfixer.com/learn/how-to-create-a-sitemap", type: "article" },
};

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: "#0a0a0f", marginBottom: 16 }}>How to Create an XML Sitemap</h1>
      <p style={{ fontSize: 17, color: "#3d3d4f", lineHeight: 1.7, marginBottom: 32 }}>An XML sitemap tells search engines which pages exist on your site. It is one of the most important technical SEO steps.</p>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0f", marginTop: 40, marginBottom: 12 }}>Option 1: WordPress</h2>
      <p style={{ color: "#3d3d4f", lineHeight: 1.7, marginBottom: 20 }}>Install Yoast SEO or Rank Math. Both auto-generate sitemaps at yoursite.com/sitemap.xml.</p>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0f", marginTop: 40, marginBottom: 12 }}>Option 2: Shopify</h2>
      <p style={{ color: "#3d3d4f", lineHeight: 1.7, marginBottom: 20 }}>Shopify generates sitemap.xml automatically. No setup needed.</p>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0f", marginTop: 40, marginBottom: 12 }}>Option 3: Next.js</h2>
      <p style={{ color: "#3d3d4f", lineHeight: 1.7, marginBottom: 20 }}>Create sitemap.ts in your app directory returning a URL list. Next.js serves it at /sitemap.xml.</p>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0f", marginTop: 40, marginBottom: 12 }}>Option 4: Manual XML</h2>
      <p style={{ color: "#3d3d4f", lineHeight: 1.7, marginBottom: 20 }}>Create sitemap.xml with standard urlset structure and submit in Google Search Console.</p>
      <div style={{ background: "#0a0a0f", borderRadius: 12, padding: "32px", textAlign: "center", marginTop: 48 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 8 }}>Validate your sitemap</div>
        <a href="/" style={{ background: "white", color: "#0a0a0f", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}>Analyze Free</a>
      </div>
    </div>
  );
}
