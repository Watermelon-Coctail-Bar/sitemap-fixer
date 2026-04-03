import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Local SEO: How to Rank in Google Maps and Local Search | SitemapFixer',
  description: "Local SEO gets your business in the Google Maps pack and local search results. Here is how Google Business Profile, local citations, reviews, and your website work together.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/local-seo' },
};
const sections = [
  { h: "Google Business Profile: The Foundation", d: "Your Google Business Profile (formerly Google My Business) is the most important local SEO asset. Claim and verify your listing at business.google.com. Fill in every field: business name, address, phone, website, hours, category, and services. Add photos - listings with photos get significantly more clicks. Keep your hours updated, especially holiday hours. Respond to every review (both positive and negative) within 24-48 hours. Post weekly updates using the Posts feature. An active, complete GBP listing ranks higher in the Maps pack than a sparse one." },
  { h: "NAP Consistency", d: "NAP stands for Name, Address, Phone. Your business NAP must be identical across every online listing - your website, GBP, Yelp, Facebook, directories, and citations. Even small variations (St vs Street, suite vs ste) confuse Google about which listing is authoritative. Use exactly the same format everywhere. Check your existing citations using a tool like BrightLocal or Moz Local to find inconsistencies. Fix discrepancies by claiming and correcting each listing manually." },
  { h: "Local Citations", d: "Citations are mentions of your business NAP on other websites. The major citation sources include Yelp, Facebook Business, Apple Maps, Bing Places, Yellow Pages, and industry-specific directories. Google uses citations to verify your business is real and correctly located. Build citations on high-authority directories first. For local SEO, the quantity and quality of citations from relevant local and industry directories directly correlates with Maps pack rankings." },
  { h: "Reviews: The Biggest Local Ranking Factor", d: "Google Reviews are a major local ranking signal - the quantity, recency, and sentiment of reviews directly affects your position in the Maps pack. Get more reviews by making it easy: send customers a direct link to your review page (find it in your GBP under Get more reviews). Ask at the right moment - right after a successful transaction or positive interaction. Never incentivize or fake reviews. Respond to all reviews to show Google your listing is actively managed." },
  { h: "Your Website for Local SEO", d: "Include your NAP in your website footer, visible on every page. Create a dedicated Contact or Location page with your address embedded in LocalBusiness schema markup. If you serve multiple locations, create a separate page for each location with unique, useful content about that area. Use location-specific keywords naturally in your title tags and headings - 'Plumber in Austin TX' not just 'Plumber'. Embed a Google Map on your Contact page." },
  { h: "Local Content and Links", d: "Local links - links from other businesses in your city, local news sites, chamber of commerce, and community organizations - signal to Google that you are a real, established local business. Sponsor local events, participate in community organizations, and get mentioned in local media. Create locally relevant content: guides to your area, neighborhood-specific advice, local event coverage. This builds local topical authority." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Local SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Local SEO: How to Rank in Google Maps and Local Search</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site SEO foundation</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your local business site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
