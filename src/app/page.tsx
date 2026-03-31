'use client';
import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Loading } from '@/components/Loading';
import { Results } from '@/components/Results';
import { PaywallModal } from '@/components/PaywallModal';
import { PaywallModal } from '@/components/PaywallModal';
type AppState = 'idle' | 'loading' | 'results' | 'error';
function Logo() { return (<a href="/" style={{ display:'flex',alignItems:'center',gap:8,textDecoration:'none' }}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg><span style={{ fontFamily:"'Instrument Serif',serif",fontSize:20,color:'var(--ink)' }}>SitemapFixer</span></a>); }
function Navbar() { return (<nav style={{ borderBottom:'1px solid var(--border)',background:'rgba(250,250,249,0.85)',backdropFilter:'blur(12px)',position:'sticky',top:0,zIndex:100 }}><div style={{ maxWidth:960,margin:'0 auto',padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between' }}><Logo /><div style={{ display:'flex',gap:24 }}><a href="/sitemap-finder" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>Sitemap Finder</a><a href="/sitemap-checker" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>Sitemap Checker</a><a href="/website-seo-checker" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>SEO Checker</a><a href="/free-seo-audit" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>Free Audit</a><a href="/xml-sitemap-generator" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>XML Generator</a></div></div></nav>); }
function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)',background:'var(--paper)',padding:'56px 24px 40px' }}>
      <div style={{ maxWidth:960,margin:'0 auto' }}>
        <div style={{ display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40,marginBottom:48 }}>
          <div><Logo /><p style={{ fontSize:13,color:'var(--muted)',lineHeight:1.7,marginTop:14 }}>AI-powered sitemap analysis. Find your sitemap, fix your SEO.</p></div>
          <div><div style={{ fontSize:11,fontWeight:700,color:'var(--muted-2)',textTransform:'uppercase',marginBottom:14 }}>Tools</div>{[['Sitemap Finder','/sitemap-finder'],['Sitemap Checker','/sitemap-checker'],['SEO Checker','/website-seo-checker'],['Free SEO Audit','/free-seo-audit'],['XML Generator','/xml-sitemap-generator']].map(([l,h])=>(<a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10 }}>{l}</a>))}</div>
          <div><div style={{ fontSize:11,fontWeight:700,color:'var(--muted-2)',textTransform:'uppercase',marginBottom:14 }}>Learn</div>{[['What is an XML Sitemap','/learn/what-is-an-xml-sitemap'],['Sitemap Best Practices','/learn/sitemap-best-practices'],['Sitemap vs robots.txt','/learn/sitemap-vs-robots-txt'],['Why Pages Not Indexed','/learn/why-pages-not-indexed'],['How to Create a Sitemap','/learn/how-to-create-a-sitemap']].map(([l,h])=>(<a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10 }}>{l}</a>))}</div>
          <div><div style={{ fontSize:11,fontWeight:700,color:'var(--muted-2)',textTransform:'uppercase',marginBottom:14 }}>Sitemap Errors</div>{[['Duplicate URLs','/sitemap-errors/duplicate-urls'],['Invalid URLs','/sitemap-errors/invalid-urls'],['Too Many URLs','/sitemap-errors/too-many-urls'],['Incorrect Priority','/sitemap-errors/incorrect-priority'],['changefreq Misuse','/sitemap-errors/changefreq-misuse']].map(([l,h])=>(<a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10 }}>{l}</a>))}</div>
        </div>
        <div style={{ borderTop:'1px solid var(--border)',paddingTop:24,display:'flex',justifyContent:'space-between' }}>
          <p style={{ fontSize:12,color:'var(--muted-2)' }}>2025 SitemapFixer - Built for SEOs who want answers, not reports</p>
          <a href="/sitemap.xml" style={{ fontSize:12,color:'var(--muted-2)',textDecoration:'none' }}>Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
function Features() {
  const items = [
    { icon:'🔍', title:'Instant Sitemap Discovery', desc:'Find your sitemap across 20+ common paths in seconds.' },
    { icon:'🤖', title:'AI-Powered Analysis', desc:'Claude AI generates specific recommendations for your site.' },
    { icon:'📊', title:'Prioritized Fix List', desc:'Ranked list of what to fix, create, and link.' },
    { icon:'⚡', title:'Under 60 Seconds', desc:'Full AI report, free, no signup required.' },
    { icon:'🗺️', title:'All Sitemap Formats', desc:'WordPress, Shopify, Next.js — all work.' },
    { icon:'🎯', title:'Site-Specific Insights', desc:'Based on your actual URL patterns and content gaps.' },
  ];
  return (
    <section style={{ maxWidth:960,margin:'0 auto',padding:'80px 24px' }}>
      <div style={{ textAlign:'center',marginBottom:56 }}>
        <h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:14 }}>Why SitemapFixer?</h2>
        <p style={{ fontSize:16,color:'var(--muted)',maxWidth:480,margin:'0 auto' }}>Most SEO tools give you scores. We give you a specific action plan.</p>
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }}>
        {items.map(item=>(<div key={item.title} style={{ background:'white',border:'1px solid var(--border)',borderRadius:14,padding:'28px 24px' }}><div style={{ fontSize:28,marginBottom:14 }}>{item.icon}</div><div style={{ fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>{item.title}</div><div style={{ fontSize:13,color:'var(--muted)',lineHeight:1.65 }}>{item.desc}</div></div>))}
      </div>
    </section>
  );
}
function HowItWorks() {
  const steps = [
    { num:'1', title:'Enter your domain', desc:'Type any domain. No sitemap URL needed.' },
    { num:'2', title:'We find your sitemap', desc:'We locate it, fetch every URL, and cluster them.' },
    { num:'3', title:'AI generates your plan', desc:'Claude produces specific, ranked recommendations.' },
    { num:'4', title:'Fix and grow', desc:'Create missing pages, fix patterns, build links.' },
  ];
  return (
    <section style={{ background:'white',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)' }}>
      <div style={{ maxWidth:960,margin:'0 auto',padding:'80px 24px' }}>
        <h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:56,textAlign:'center' }}>How it works</h2>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:32 }}>
          {steps.map(s=>(<div key={s.num} style={{ textAlign:'center' }}><div style={{ width:44,height:44,borderRadius:'50%',background:'var(--ink)',color:'white',fontSize:18,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px' }}>{s.num}</div><div style={{ fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>{s.title}</div><div style={{ fontSize:13,color:'var(--muted)',lineHeight:1.65 }}>{s.desc}</div></div>))}
        </div>
      </div>
    </section>
  );
}
function BlogSection() {
  const posts = [
    { title:'Sitemap Not Working? 9 Common Fixes', desc:'The 9 most common reasons sitemaps fail and exactly how to fix each one.', href:'/learn/sitemap-not-working', tag:'Guide' },
    { title:'Pages Not Indexed by Google', desc:'Every reason Google refuses to index your pages and step-by-step fixes.', href:'/learn/pages-not-indexed-google', tag:'Guide' },
    { title:'Submitted URL Not Indexed', desc:'What this Search Console status means and the exact steps to fix it.', href:'/learn/submitted-url-not-indexed', tag:'Guide' },
    { title:'Crawled Currently Not Indexed', desc:'Google crawled your page but chose not to index it. Here is why and how to fix it.', href:'/learn/crawled-currently-not-indexed', tag:'Guide' },
    { title:'Pages in Sitemap But Not Indexed', desc:'Your sitemap is fine but Google still will not index those pages. Here is why.', href:'/learn/pages-in-sitemap-not-indexed', tag:'Guide' },
    { title:'Sitemap Errors in Search Console', desc:'Every sitemap error type in Google Search Console and how to fix each one.', href:'/learn/sitemap-errors-google-search-console', tag:'Guide' },
    { title:'Google Not Crawling My Site', desc:'All the reasons Googlebot stops crawling your site and how to fix each one.', href:'/learn/google-not-crawling-my-site', tag:'Guide' },
    { title:'Sitemap Checker', desc:'How to check your XML sitemap for errors and validate it before submitting.', href:'/learn/sitemap-checker', tag:'Tool' },
    { title:'Sitemap Validator', desc:'How to validate your XML sitemap meets Google standards. Common errors and fixes.', href:'/learn/sitemap-validator', tag:'Tool' },
    { title:'What is an XML Sitemap?', desc:'The complete beginner guide to XML sitemaps and why they matter for SEO.', href:'/learn/what-is-an-xml-sitemap', tag:'Guide' },
    { title:'Sitemap Best Practices', desc:'Create a clean, optimized sitemap that maximizes crawl efficiency.', href:'/learn/sitemap-best-practices', tag:'Guide' },
    { title:'Incorrect Priority Values', desc:'Priority 1.0 everywhere is a mistake. Here is what to do instead.', href:'/sitemap-errors/incorrect-priority', tag:'Error Fix' },
  ];
  return (
    <section style={{ maxWidth:960,margin:'0 auto',padding:'80px 24px' }}>
      <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:40 }}>
        <div><h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:8 }}>Learn SEO</h2><p style={{ fontSize:15,color:'var(--muted)' }}>Free guides on sitemaps, crawl budget, and technical SEO.</p></div>
        <a href="/learn" style={{ fontSize:13,color:'var(--accent)',textDecoration:'none',fontWeight:600 }}>View all</a>
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20 }}>
        {posts.map(p=>(<a key={p.href} href={p.href} style={{ display:'block',textDecoration:'none',background:'white',border:'1px solid var(--border)',borderRadius:14,padding:'24px' }}><span style={{ display:'inline-block',fontSize:11,fontWeight:700,color:'var(--accent)',background:'var(--accent-light)',borderRadius:4,padding:'2px 8px',marginBottom:12 }}>{p.tag}</span><div style={{ fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>{p.title}</div><div style={{ fontSize:13,color:'var(--muted)',lineHeight:1.6 }}>{p.desc}</div></a>))}
      </div>
    </section>
  );
}
export default function Home() {
  const [state, setState] = useState<AppState>('idle');
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState<null | object>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paywallDomain, setPaywallDomain] = useState('');
  const [showPaywall, setShowPaywall] = useState(false);
  const [paywallDomain, setPaywallDomain] = useState('');
  async function handleAnalyze(inputDomain: string) {
    // Check if user has used their free analysis
    const analysisCount = parseInt(typeof window !== 'undefined' ? localStorage.getItem('sf_analysis_count') || '0' : '0');
    if (analysisCount >= 1) {
      setPaywallDomain(inputDomain);
      setShowPaywall(true);
      return;
    }
    const count = parseInt(typeof window !== 'undefined' ? (localStorage.getItem('sf_count') || '0') : '0');
    if (count >= 1) { setPaywallDomain(inputDomain); setShowPaywall(true); return; }
    setDomain(inputDomain); setState('loading'); setError(null); setResults(null);
    try {
      const res = await fetch('/api/analyze', { method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify({ domain:inputDomain }) });
      const data = await res.json();
      if (!res.ok) { setError(data.error === 'no_sitemap' ? data.message : (data.error || 'Something went wrong.')); setState('error'); return; }
      setResults(data); setState('results');
      if (typeof window !== 'undefined') localStorage.setItem('sf_count', String(parseInt(localStorage.getItem('sf_count') || '0') + 1));
      if (typeof window !== 'undefined') { const c = parseInt(localStorage.getItem('sf_analysis_count') || '0'); localStorage.setItem('sf_analysis_count', String(c + 1)); }
    } catch { setError('Network error.'); setState('error'); }
  }
  function reset() { setState('idle'); setResults(null); setError(null); }
  return (
    <div style={{ minHeight:'100vh',background:'var(--paper)' }}>
      <Navbar />
      <main>
        {state === 'idle' && (<><Hero onSubmit={handleAnalyze} loading={false} variant="default" /><Features /><HowItWorks /><BlogSection /></>)}
        {state === 'loading' && <Loading domain={domain} />}
        {state === 'error' && (<div style={{ maxWidth:540,margin:'80px auto',padding:'0 24px',textAlign:'center' }}><div style={{ fontSize:40,marginBottom:20 }}>🔍</div><h2 style={{ fontSize:24,fontWeight:700,color:'var(--ink)',marginBottom:12 }}>Sitemap not found</h2><p style={{ fontSize:15,color:'var(--muted)',lineHeight:1.6,marginBottom:32 }}>{error}</p><button onClick={reset} className="cta-btn">Try another domain</button></div>)}
        {state === 'results' && results && (<Results data={results as any} onReset={reset} />)}
      </main>
      {state === 'idle' && <Footer />}
      {showPaywall && <PaywallModal domain={paywallDomain} onClose={() => setShowPaywall(false)} />}
      {showPaywall && <PaywallModal domain={paywallDomain} onClose={() => setShowPaywall(false)} />}
    </div>
  );
}
