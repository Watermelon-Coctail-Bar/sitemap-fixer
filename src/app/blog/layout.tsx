import React from 'react';

const breadcrumbSchema = { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[{ '@type':'ListItem', position:1, name:'Home', item:'https://sitemapfixer.com' },{ '@type':'ListItem', position:2, name:'Blog', item:'https://sitemapfixer.com/blog' }] };

function BlogLogo() {
  return (
    <a href="/" style={{ display:'flex',alignItems:'center',gap:8,textDecoration:'none' }} aria-label="SitemapFixer - Free AI Sitemap Checker">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" role="img" aria-label="SitemapFixer logo"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
      <span style={{ fontFamily:"'Instrument Serif',serif",fontSize:20,color:'#0a0a0f' }}>SitemapFixer</span>
    </a>
  );
}

function BlogNav() {
  return (
    <nav style={{ borderBottom:'1px solid #e4e4ed',background:'rgba(250,250,249,0.95)',backdropFilter:'blur(12px)',position:'sticky',top:0,zIndex:100 }}>
      <div style={{ maxWidth:960,margin:'0 auto',padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
        <BlogLogo />
        <div style={{ display:'flex',gap:24,alignItems:'center' }}>
          <a href="/learn" style={{ fontSize:14,color:'#3d3d4f',textDecoration:'none' }}>Learn</a>
          <a href="/blog" style={{ fontSize:14,color:'#2d5be3',fontWeight:600,textDecoration:'none' }}>Blog</a>
          <a href="/signup?mode=login" style={{ fontSize:14,color:'#3d3d4f',textDecoration:'none' }}>Sign in</a>
          <a href="/pricing" style={{ fontSize:13,color:'white',background:'#2d5be3',padding:'6px 14px',borderRadius:8,textDecoration:'none',fontWeight:600 }}>Pricing</a>
        </div>
      </div>
    </nav>
  );
}

function BlogCTABar() {
  return (
    <div style={{ position:'sticky',bottom:0,zIndex:99,background:'#0a0a0f',borderTop:'1px solid rgba(255,255,255,0.1)',padding:'14px 24px' }}>
      <div style={{ maxWidth:960,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,flexWrap:'wrap' }}>
        <div style={{ display:'flex',alignItems:'center',gap:12 }}>
          <div style={{ width:8,height:8,borderRadius:'50%',background:'#22c55e',flexShrink:0 }} />
          <span style={{ fontSize:14,color:'#e5e7eb',fontWeight:500 }}>Is your sitemap hurting your Google rankings?</span>
        </div>
        <a href="/" style={{ background:'#2d5be3',color:'white',padding:'9px 20px',borderRadius:8,fontSize:14,fontWeight:600,textDecoration:'none',whiteSpace:'nowrap',flexShrink:0 }}>
          Check for free &rarr;
        </a>
      </div>
    </div>
  );
}

function BlogFooter() {
  return (
    <footer style={{ borderTop:'1px solid #e4e4ed',background:'linear-gradient(180deg,#fafaf9 0%,#f0f0f6 100%)',padding:'64px 24px 32px' }}>
      <div style={{ maxWidth:960,margin:'0 auto' }}>
        <div style={{ display:'grid',gridTemplateColumns:'2.5fr 1fr 1fr 1fr',gap:40,marginBottom:48 }}>
          <div>
            <BlogLogo />
            <p style={{ fontSize:13,color:'#6b6b7d',lineHeight:1.7,marginTop:14,maxWidth:260 }}>AI-powered sitemap analysis. Find your sitemap, fix your SEO.</p>
            <a href="mailto:support@sitemapfixer.com" style={{ display:'inline-flex',alignItems:'center',gap:6,fontSize:13,color:'#2d5be3',textDecoration:'none',marginTop:16,fontWeight:500 }}>support@sitemapfixer.com</a>
          </div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'#0a0a0f',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:16 }}>Tools</div>
            {[['Sitemap Finder','/sitemap-finder'],['Sitemap Checker','/sitemap-checker'],['SEO Checker','/website-seo-checker'],['Free SEO Audit','/free-seo-audit'],['XML Generator','/xml-sitemap-generator']].map(([l,h])=>(
              <a key={h} href={h} style={{ display:'block',fontSize:13,color:'#6b6b7d',textDecoration:'none',marginBottom:10 }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'#0a0a0f',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:16 }}>Learn</div>
            {[['What is an XML Sitemap','/learn/what-is-an-xml-sitemap'],['Sitemap Best Practices','/learn/sitemap-best-practices'],['Why Pages Not Indexed','/learn/why-pages-not-indexed'],['How to Create a Sitemap','/learn/how-to-create-a-sitemap']].map(([l,h])=>(
              <a key={h} href={h} style={{ display:'block',fontSize:13,color:'#6b6b7d',textDecoration:'none',marginBottom:10 }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'#0a0a0f',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:16 }}>Resources</div>
            {[['Blog','/blog'],['Pricing','/pricing'],['Terms','/terms'],['Privacy','/privacy']].map(([l,h])=>(
              <a key={h} href={h} style={{ display:'block',fontSize:13,color:'#6b6b7d',textDecoration:'none',marginBottom:10 }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid #e4e4ed',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center' }}>
          <p style={{ fontSize:12,color:'#9999aa' }}>2026 SitemapFixer. All rights reserved.</p>
          <div style={{ display:'flex',gap:20 }}>
            <a href="/sitemap.xml" style={{ fontSize:12,color:'#9999aa',textDecoration:'none' }}>Sitemap</a>
            <a href="mailto:support@sitemapfixer.com" style={{ fontSize:12,color:'#9999aa',textDecoration:'none' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogNav />
      <main>{children}</main>
      <BlogFooter />
      <BlogCTABar />
    </>
  );
}
