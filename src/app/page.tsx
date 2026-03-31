'use client';
import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Loading } from '@/components/Loading';
import { Results } from '@/components/Results';
type AppState = 'idle' | 'loading' | 'results' | 'error';
function Logo() { return (<a href="/" style={{ display:'flex',alignItems:'center',gap:8,textDecoration:'none' }}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg><span style={{ fontFamily:"'Instrument Serif',serif",fontSize:20,color:'var(--ink)' }}>SitemapAI</span></a>); }
function Navbar() { return (<nav style={{ borderBottom:'1px solid var(--border)',background:'rgba(250,250,249,0.85)',backdropFilter:'blur(12px)',position:'sticky',top:0,zIndex:100 }}><div style={{ maxWidth:960,margin:'0 auto',padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between' }}><Logo /><div style={{ display:'flex',gap:24 }}><a href="/sitemap-finder" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>Sitemap Finder</a><a href="/sitemap-checker" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>Sitemap Checker</a><a href="/website-seo-checker" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>SEO Checker</a><a href="/free-seo-audit" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>Free Audit</a><a href="/xml-sitemap-generator" style={{ fontSize:13,color:'var(--muted)',textDecoration:'none' }}>XML Generator</a></div></div></nav>); }
function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)',background:'var(--paper)',padding:'56px 24px 40px' }}>
      <div style={{ maxWidth:960,margin:'0 auto' }}>
        <div style={{ display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40,marginBottom:48 }}>
          <div><Logo /><p style={{ fontSize:13,color:'var(--muted)',lineHeight:1.7,marginTop:14 }}>AI-powered sitemap analysis. Fix your SEO.</p></div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'var(--muted-2)',textTransform:'uppercase',marginBottom:14 }}>Tools</div>
            {[['Sitemap Finder','/sitemap-finder'],['Sitemap Checker','/sitemap-checker'],['SEO Checker','/website-seo-checker'],['Free SEO Audit','/free-seo-audit'],['XML Generator','/xml-sitemap-generator']].map(([l,h])=>(<a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10 }}>{l}</a>))}
          </div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'var(--muted-2)',textTransform:'uppercase',marginBottom:14 }}>Learn</div>
            {[['What is an XML Sitemap','/learn/what-is-an-xml-sitemap'],['Sitemap Best Practices','/learn/sitemap-best-practices'],['Sitemap vs robots.txt','/learn/sitemap-vs-robots-txt'],['Why Pages Not Indexed','/learn/why-pages-not-indexed'],['How to Create a Sitemap','/learn/how-to-create-a-sitemap']].map(([l,h])=>(<a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10 }}>{l}</a>))}
          </div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'var(--muted-2)',textTransform:'uppercase',marginBottom:14 }}>Sitemap Errors</div>
            {[['Duplicate URLs','/sitemap-errors/duplicate-urls'],['Invalid URLs','/sitemap-errors/invalid-urls'],['Too Many URLs','/sitemap-errors/too-many-urls'],['Incorrect Priority','/sitemap-errors/incorrect-priority'],['changefreq Misuse','/sitemap-errors/changefreq-misuse']].map(([l,h])=>(<a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10 }}>{l}</a>))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid var(--border)',paddingTop:24,display:'flex',justifyContent:'space-between' }}>
          <p style={{ fontSize:12,color:'var(--muted-2)' }}>2025 SitemapAI</p>
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
        <h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:14 }}>Why SitemapAI?</h2>
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
    { title:'What is an XML Sitemap?', desc:'Complete beginner guide to XML sitemaps.', href:'/learn/what-is-an-xml-sitemap', tag:'Guide' },
    { title:'Sitemap Best Practices', desc:'Maximize crawl efficiency with a clean sitemap.', href:'/learn/sitemap-best-practices', tag:'Guide' },
    { title:'Why Pages Not Indexed', desc:'Every reason and how to fix each one.', href:'/learn/why-pages-not-indexed', tag:'Guide' },
    { title:'Sitemap vs robots.txt', desc:'The difference and how they interact.', href:'/learn/sitemap-vs-robots-txt', tag:'Guide' },
    { title:'Incorrect Priority Values', desc:'Priority 1.0 everywhere is a mistake.', href:'/sitemap-errors/incorrect-priority', tag:'Error Fix' },
    { title:'Too Many URLs', desc:'Bloated sitemaps dilute your crawl budget.', href:'/sitemap-errors/too-many-urls', tag:'Error Fix' },
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
  async function handleAnalyze(inputDomain: string) {
    setDomain(inputDomain); setState('loading'); setError(null); setResults(null);
    try {
      const res = await fetch('/api/analyze', { method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify({ domain:inputDomain }) });
      const data = await res.json();
      if (!res.ok) { setError(data.error === 'no_sitemap' ? data.message : (data.error || 'Something went wrong.')); setState('error'); return; }
      setResults(data); setState('results');
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
    </div>
  );
}
