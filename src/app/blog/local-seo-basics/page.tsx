import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Local SEO Basics: How to Rank in Google Local Search | SitemapFixer',
  description: "Local SEO helps businesses appear when people search for nearby services. Here are the foundational steps to rank in Google Maps and local search results.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/local-seo-basics' },
};
const steps = [
  { t: "Claim and optimize your Google Business Profile", d: "Your Google Business Profile (formerly Google My Business) is the single most important local SEO asset. Claim it at business.google.com, verify your listing, and fill every field completely: business name exactly as it appears on your signage, correct primary and secondary categories, complete address and service area, accurate hours including holiday hours, phone number, website URL, and a detailed business description with your key services. Add photos — businesses with photos receive significantly more direction requests and website clicks." },
  { t: "Build consistent NAP citations", d: "NAP (Name, Address, Phone) consistency across the web is a core local ranking signal. Your business name, address, and phone number must be identical on your website, Google Business Profile, Yelp, Apple Maps, Bing Places, Facebook, and all industry directories. Inconsistencies confuse Google about your business's legitimacy. Use a tool like Moz Local or BrightLocal to audit your existing citations and fix inconsistencies across directories." },
  { t: "Get Google reviews and respond to them", d: "Review quantity and quality are direct local ranking signals. Ask satisfied customers to leave Google reviews — this is legal and encouraged by Google. Make it easy: create a short link directly to your Google review form using your Business Profile ID. Respond to every review, positive and negative. Google rewards businesses that actively engage with their reviews. Never buy fake reviews — Google detects and penalizes this." },
  { t: "Add local content to your website", d: "Your website needs to signal local relevance beyond just having an address. Include your city and neighborhood in page titles, H1 headings, and body text naturally. Embed a Google Map on your contact page. Create location-specific pages if you serve multiple areas. Write about local events, partnerships, or community involvement. Schema markup with LocalBusiness type and geo coordinates helps Google connect your website to your physical location." },
  { t: "Build local backlinks", d: "Links from local websites — local newspapers, chambers of commerce, local bloggers, neighborhood associations, and sponsorships of local events — carry strong local relevance signals. Join your local Chamber of Commerce for the directory listing. Sponsor local events for press mentions and links. Get listed in local business directories specific to your city or region. These local links help Google understand your geographic relevance." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Local SEO Basics</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Local SEO Basics: Rank in Google Maps and Local Search</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your local site technical SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {steps.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your local site technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
