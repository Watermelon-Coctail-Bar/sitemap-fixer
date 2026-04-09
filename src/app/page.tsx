'use client';
import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Loading } from '@/components/Loading';
import { Results } from '@/components/Results';
import { PaywallModal } from '@/components/PaywallModal';

type AppState = 'idle' | 'loading' | 'results' | 'error';

function Logo() { return (<a href="/" style={{ display:'flex',alignItems:'center',gap:8,textDecoration:'none' }} aria-label="SitemapFixer - Free AI Sitemap Checker"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" role="img" aria-label="SitemapFixer logo"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg><span style={{ fontFamily:"'Instrument Serif',serif",fontSize:20,color:'var(--ink)' }}>SitemapFixer</span></a>); }

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ borderBottom:'1px solid var(--border)',background:'rgba(250,250,249,0.85)',backdropFilter:'blur(12px)',position:'sticky',top:0,zIndex:100 }}>
      <div style={{ maxWidth:960,margin:'0 auto',padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
        <Logo />
        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display:'flex',gap:24,alignItems:'center' }}>
          <a href="/learn" style={{ fontSize:14,color:'var(--muted)',textDecoration:'none' }}>Learn</a>
          <a href="/blog" style={{ fontSize:14,color:'var(--muted)',textDecoration:'none' }}>Blog</a>
          <a href="/signup?mode=login" style={{ fontSize:14,color:'var(--muted)',textDecoration:'none' }}>Sign in</a>
          <a href="/pricing" style={{ fontSize:13,color:'white',background:'linear-gradient(135deg,#2d5be3,#1d4ed8)',padding:'8px 18px',borderRadius:8,textDecoration:'none',fontWeight:700,boxShadow:'0 2px 8px rgba(45,91,227,0.3)',transition:'transform 0.15s' }}>View Pricing →</a>
        </div>
        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display:'none',background:'none',border:'none',cursor:'pointer',padding:4 }} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></> : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}
          </svg>
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{ padding:'0 24px 16px',display:'flex',flexDirection:'column',gap:12,borderTop:'1px solid var(--border)' }}>
          <a href="/learn" style={{ fontSize:15,color:'var(--ink)',textDecoration:'none',padding:'8px 0' }}>Learn</a>
          <a href="/blog" style={{ fontSize:15,color:'var(--ink)',textDecoration:'none',padding:'8px 0' }}>Blog</a>
          <a href="/signup?mode=login" style={{ fontSize:15,color:'var(--ink)',textDecoration:'none',padding:'8px 0' }}>Sign in</a>
          <a href="/pricing" style={{ fontSize:15,color:'white',background:'linear-gradient(135deg,#2d5be3,#1d4ed8)',padding:'10px 20px',borderRadius:8,textDecoration:'none',fontWeight:700,textAlign:'center' }}>View Pricing →</a>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)',background:'linear-gradient(180deg,var(--paper) 0%,#f0f0f6 100%)',padding:'64px 24px 32px' }}>
      <div style={{ maxWidth:960,margin:'0 auto' }}>
        <div style={{ display:'grid',gridTemplateColumns:'2.5fr 1fr 1fr 1fr',gap:40,marginBottom:48 }}>
          <div>
            <Logo />
            <p style={{ fontSize:13,color:'var(--muted)',lineHeight:1.7,marginTop:14,maxWidth:260 }}>AI-powered sitemap analysis. Find your sitemap, fix your SEO.</p>
            <a href="mailto:support@sitemapfixer.com" style={{ display:'inline-flex',alignItems:'center',gap:6,fontSize:13,color:'var(--accent)',textDecoration:'none',marginTop:16,fontWeight:500 }}>support@sitemapfixer.com</a>
          </div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'var(--ink)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:16 }}>Tools</div>
            {[['Sitemap Finder','/sitemap-finder'],['XML Sitemap Checker','/sitemap-checker'],['SEO Checker','/website-seo-checker'],['Free SEO Audit','/free-seo-audit'],['Sitemap Validator','/learn/sitemap-validator']].map(([l,h])=>(
              <a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10,transition:'color 0.15s' }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'var(--ink)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:16 }}>Learn</div>
            {[['What is an XML Sitemap','/learn/what-is-an-xml-sitemap'],['Crawled Not Indexed Fix','/learn/crawled-currently-not-indexed'],['Why Pages Not Indexed','/learn/why-pages-not-indexed'],['How to Create a Sitemap','/learn/how-to-create-a-sitemap'],['Sitemap Best Practices','/learn/sitemap-best-practices']].map(([l,h])=>(
              <a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10,transition:'color 0.15s' }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize:11,fontWeight:700,color:'var(--ink)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:16 }}>Resources</div>
            {[['Blog','/blog'],['Pricing','/pricing'],['Terms','/terms'],['Privacy','/privacy']].map(([l,h])=>(
              <a key={h} href={h} style={{ display:'block',fontSize:13,color:'var(--muted)',textDecoration:'none',marginBottom:10,transition:'color 0.15s' }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid var(--border)',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center' }}>
          <p style={{ fontSize:12,color:'var(--muted-2)' }}>2026 SitemapFixer. All rights reserved.</p>
          <div style={{ display:'flex',gap:20 }}>
            <a href="/sitemap.xml" style={{ fontSize:12,color:'var(--muted-2)',textDecoration:'none' }}>Sitemap</a>
            <a href="mailto:support@sitemapfixer.com" style={{ fontSize:12,color:'var(--muted-2)',textDecoration:'none' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Features() { const items = [{ icon:'🔍',title:'Sitemap Finder',desc:'How to find the sitemap of a website? Enter any domain. We check /sitemap.xml, robots.txt, and 20+ common paths.' },{ icon:'🤖',title:'Crawled Not Indexed Fix',desc:'How to fix crawled but not indexed? We find exactly why Google crawled currently not indexed your pages and give you the fix.' },{ icon:'📊',title:'XML Sitemap Validator',desc:'How to check your sitemap? Our XML sitemap checker validates for errors, broken URLs, and inconsistencies.' },{ icon:'⚡',title:'Under 60 Seconds',desc:'Full AI report, free, no signup.' },{ icon:'🗺️',title:'All Sitemap Formats',desc:'WordPress, Shopify, Next.js - all work.' },{ icon:'🎯',title:'Find All Pages on a Website',desc:'See every URL on any website via its sitemap. Detect orphan pages and missing content gaps.' }]; return (<section style={{ maxWidth:960,margin:'0 auto',padding:'80px 24px' }}><div style={{ textAlign:'center',marginBottom:56 }}><h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:14 }}>Why SitemapFixer?</h2><p style={{ fontSize:16,color:'var(--muted)',maxWidth:480,margin:'0 auto' }}>Most SEO tools give scores. We give a specific action plan.</p></div><div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }}>{items.map(item=>(<div key={item.title} style={{ background:'white',border:'1px solid var(--border)',borderRadius:14,padding:'28px 24px' }}><div style={{ fontSize:28,marginBottom:14 }}>{item.icon}</div><div style={{ fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>{item.title}</div><div style={{ fontSize:13,color:'var(--muted)',lineHeight:1.65 }}>{item.desc}</div></div>))}</div></section>); }

function HowItWorks() { const steps = [{ num:'1',title:'Enter your domain',desc:'Type any domain. No sitemap URL needed.' },{ num:'2',title:'We find your sitemap',desc:'We locate it, fetch every URL, and cluster them.' },{ num:'3',title:'AI generates your plan',desc:'Claude produces specific, ranked recommendations.' },{ num:'4',title:'Fix and grow',desc:'Create missing pages, fix patterns, build links.' }]; return (<section style={{ background:'white',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)' }}><div style={{ maxWidth:960,margin:'0 auto',padding:'80px 24px' }}><h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:56,textAlign:'center' }}>How it works</h2><div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:32 }}>{steps.map(s=>(<div key={s.num} style={{ textAlign:'center' }}><div style={{ width:44,height:44,borderRadius:'50%',background:'var(--ink)',color:'white',fontSize:18,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px' }}>{s.num}</div><div style={{ fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>{s.title}</div><div style={{ fontSize:13,color:'var(--muted)',lineHeight:1.65 }}>{s.desc}</div></div>))}</div></div></section>); }

function Testimonials() {
  const reviews = [
      { name:'Marcus Chen', role:'Head of SEO', company:'Growthly', av:{ bg:'#e0e7ff',c:'#4338ca',l:'M' }, text:"I had 47 pages Google refused to index for 3 months. SitemapFixer found a misconfigured noindex tag from a staging migration in 30 seconds. Fixed it the same day -- all 47 pages indexed within a week." },
          { name:'Sarah Okafor', role:'Founder', company:'ContentStack.io', av:{ bg:'#fce7f3',c:'#9d174d',l:'S' }, text:"Our organic traffic was flat for 6 months despite publishing constantly. 200+ duplicate URLs eating crawl budget. SitemapFixer diagnosed it immediately. Traffic up 40% in 8 weeks." },
              { name:'James Whitfield', role:'Technical SEO Lead', company:'Shopwave', av:{ bg:'#dcfce7',c:'#166534',l:'J' }, text:"I've used Screaming Frog, Ahrefs, Semrush -- none gave me the sitemap analysis SitemapFixer did in under a minute. Recommendations were specific to our Next.js setup. Actually useful." },
                  { name:'Anika Patel', role:'SEO Consultant', company:'Independent', av:{ bg:'#fef3c7',c:'#92400e',l:'A' }, text:"I use this for every client onboarding now. Screenshot the report and instantly know the 3 highest-impact things to fix. Saves me 2 hours of manual audit per client." },
                      { name:'Ryan Torres', role:'CTO', company:'Launchpad SaaS', av:{ bg:'#e0f2fe',c:'#075985',l:'R' }, text:"We launched and had zero search traffic after 4 months. SitemapFixer found our sitemap was returning 404 -- our deployment pipeline had broken the route. Fixed in 20 minutes." },
                          { name:'Lena Hoffmann', role:'Growth Manager', company:'Fintools GmbH', av:{ bg:'#f3e8ff',c:'#7c3aed',l:'L' }, text:"It doesn't just say 'fix your sitemap' -- it tells me exactly which URL patterns are missing, why, and what to add. That's consultant-level advice for free." },
                            ];
                              return (
                                  <section style={{ background:'white',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',padding:'80px 24px' }}>
                                        <div style={{ maxWidth:960,margin:'0 auto' }}>
                                                <div style={{ textAlign:'center',marginBottom:56 }}>
                                                          <h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:14 }}>What SEOs actually say</h2>
                                                                    <p style={{ fontSize:16,color:'var(--muted)',maxWidth:480,margin:'0 auto' }}>Real results from real SEOs -- no PR quotes, no paid testimonials.</p>
                                                                            </div>
                                                                                    <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20 }}>
                                                                                              {reviews.map(r=>(
                                                                                                          <div key={r.name} style={{ background:'var(--paper)',border:'1px solid var(--border)',borderRadius:16,padding:'24px',display:'flex',flexDirection:'column',gap:16 }}>
                                                                                                                        <div style={{ display:'flex',gap:2 }}>{[1,2,3,4,5].map(s=><span key={s} style={{ color:'#f59e0b',fontSize:14 }}>&#9733;</span>)}</div>
                                                                                                                                      <p style={{ fontSize:14,color:'var(--ink)',lineHeight:1.7,flex:1,margin:0 }}>&ldquo;{r.text}&rdquo;</p>
                                                                                                                                                    <div style={{ display:'flex',alignItems:'center',gap:10 }}>
                                                                                                                                                                    <div style={{ width:36,height:36,borderRadius:'50%',background:r.av.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:700,color:r.av.c,flexShrink:0 }}>{r.av.l}</div>
                                                                                                                                                                                    <div><div style={{ fontSize:13,fontWeight:700,color:'var(--ink)' }}>{r.name}</div><div style={{ fontSize:12,color:'var(--muted)' }}>{r.role} &middot; {r.company}</div></div>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                            }

const FAQ_ITEMS = [
  { q: 'Is SitemapFixer really free?', a: 'Yes. You get 3 full AI-powered sitemap analyses for free, no credit card required. Upgrade only when you need unlimited analyses.' },
  { q: 'How do I find the sitemap of a website?', a: 'Enter any domain in SitemapFixer. We check 20+ common sitemap locations including /sitemap.xml, /sitemap_index.xml, and references in robots.txt to find all pages on a website. Works with WordPress, Shopify, Next.js, and any platform.' },
  { q: 'What does the AI analysis include?', a: 'A prioritized list of SEO issues with specific fixes, missing page suggestions, a priority action plan, and affected URLs you can copy-paste directly.' },
  { q: 'Why are my pages not indexed by Google?', a: 'Common reasons include broken sitemaps, noindex tags, crawl budget issues, duplicate content, and orphan pages. Our tool identifies the exact cause for your site.' },
  { q: 'How do I fix "Crawled - Currently Not Indexed"?', a: 'This Google Search Console status means Google crawled your page but chose not to index it. Common fixes include improving content quality, fixing thin content, removing duplicate pages, and strengthening internal links. SitemapFixer identifies the specific cause for each affected URL.' },
  { q: 'How is this different from Screaming Frog or Ahrefs?', a: 'Those tools require setup and expertise to interpret. SitemapFixer gives you a specific, ranked action plan in 60 seconds -- no crawling, no configuration.' },
];

function FAQ() {
  return (
    <section style={{ maxWidth:960,margin:'0 auto',padding:'80px 24px' }}>
      <div style={{ textAlign:'center',marginBottom:48 }}>
        <h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:14 }}>Frequently asked questions</h2>
        <p style={{ fontSize:16,color:'var(--muted)',maxWidth:480,margin:'0 auto' }}>Everything you need to know about SitemapFixer.</p>
      </div>
      <div style={{ maxWidth:720,margin:'0 auto',display:'flex',flexDirection:'column',gap:0 }}>
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} style={{ borderBottom:'1px solid var(--border)',padding:'20px 0' }}>
            <div style={{ fontSize:16,fontWeight:600,color:'var(--ink)',marginBottom:10 }}>{item.q}</div>
            <div style={{ fontSize:14,color:'var(--muted)',lineHeight:1.7 }}>{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section style={{ background:'linear-gradient(135deg,#0a0a0f 0%,#1a1a2e 50%,#0f1b3d 100%)',padding:'80px 24px',position:'relative',overflow:'hidden' }}>
      <div style={{ position:'absolute',top:'-50%',right:'-20%',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(45,91,227,0.08) 0%,transparent 70%)',pointerEvents:'none' }} />
      <div style={{ maxWidth:640,margin:'0 auto',textAlign:'center',position:'relative' }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:6,background:'rgba(45,91,227,0.15)',border:'1px solid rgba(45,91,227,0.3)',borderRadius:99,padding:'5px 14px',fontSize:12,fontWeight:600,color:'#93c5fd',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:24 }}>
          <span style={{ fontSize:10 }}>●</span> Get in touch
        </div>
        <h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'white',marginBottom:16,lineHeight:1.15 }}>Questions? We're here to help</h2>
        <p style={{ fontSize:16,color:'#9ca3af',lineHeight:1.65,maxWidth:480,margin:'0 auto 36px' }}>Need help with your sitemap audit or have feedback? Drop us a line and we'll get back to you quickly.</p>
        <a href="mailto:support@sitemapfixer.com" style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#2d5be3',color:'white',padding:'14px 32px',borderRadius:10,fontSize:15,fontWeight:600,textDecoration:'none',transition:'transform 0.15s,box-shadow 0.15s' }}>
          Email us at support@sitemapfixer.com
        </a>
      </div>
    </section>
  );
}

                                                                                                                                                                                                                                                                                                                                                          function BlogSection() { const posts = [{ title:'Sitemap Not Working? 9 Common Fixes',desc:'The most common reasons sitemaps fail.',href:'/learn/sitemap-not-working',tag:'Guide' },{ title:'Pages Not Indexed by Google',desc:'Every reason and step-by-step fixes.',href:'/learn/pages-not-indexed-google',tag:'Guide' },{ title:'Submitted URL Not Indexed',desc:'What this Search Console status means.',href:'/learn/submitted-url-not-indexed',tag:'Guide' },{ title:'Crawled Currently Not Indexed',desc:'Google crawled but chose not to index.',href:'/learn/crawled-currently-not-indexed',tag:'Guide' },{ title:'Sitemap Errors in Search Console',desc:'Every error type and how to fix each one.',href:'/learn/sitemap-errors-google-search-console',tag:'Guide' },{ title:'Google Not Crawling My Site',desc:'All reasons Googlebot stops crawling.',href:'/learn/google-not-crawling-my-site',tag:'Guide' }]; return (<section style={{ maxWidth:960,margin:'0 auto',padding:'80px 24px' }}><div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:40 }}><div><h2 style={{ fontFamily:"'Instrument Serif',serif",fontSize:36,color:'var(--ink)',marginBottom:8 }}>Learn SEO</h2><p style={{ fontSize:15,color:'var(--muted)' }}>Free guides on sitemaps, crawl budget, and technical SEO.</p></div><a href="/learn" style={{ fontSize:13,color:'var(--accent)',textDecoration:'none',fontWeight:600 }}>View all</a></div><div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20 }}>{posts.map(p=>(<a key={p.href} href={p.href} style={{ display:'block',textDecoration:'none',background:'white',border:'1px solid var(--border)',borderRadius:14,padding:'24px' }}><span style={{ display:'inline-block',fontSize:11,fontWeight:700,color:'var(--accent)',background:'var(--accent-light)',borderRadius:4,padding:'2px 8px',marginBottom:12 }}>{p.tag}</span><div style={{ fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>{p.title}</div><div style={{ fontSize:13,color:'var(--muted)',lineHeight:1.6 }}>{p.desc}</div></a>))}</div></section>); }

                                                                                                                                                                                                                                                                                                                                                          export default function Home() {
                                                                                                                                                                                                                                                                                                                                                              const [state, setState] = useState<AppState>('idle');
                                                                                                                                                                                                                                                                                                                                                                const [domain, setDomain] = useState('');
                                                                                                                                                                                                                                                                                                                                                                  const [results, setResults] = useState<null | object>(null);
                                                                                                                                                                                                                                                                                                                                                                    const [error, setError] = useState<string | null>(null);
                                                                                                                                                                                                                                                                                                                                                                      const [showPaywall, setShowPaywall] = useState(false);
                                                                                                                                                                                                                                                                                                                                                                        const [paywallDomain, setPaywallDomain] = useState('');

                                                                                                                                                                                                                                                                                                                                                                          async function handleAnalyze(inputDomain: string) {
                                                                                                                                                                                                                                                                                                                                                                                        setDomain(inputDomain); setState('loading'); setError(null); setResults(null);
                                                                                                                                                                                                                                                                                                                                                                                            try {
                                                                                                                                                                                                                                                                                                                                                                                                    const res = await fetch('/api/analyze', { method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify({ domain:inputDomain }) });
                                                                                                                                                                                                                                                                                                                                                                                                          const data = await res.json();
                                                                                                                                                                                                                                                                                                                                                                                                                if (!res.ok) {
                                                                                                                                                                                                                                                                                                                                                                                                                  if (data.error === 'limit_reached') { setPaywallDomain(inputDomain); setShowPaywall(true); setState('idle'); return; }
                                                                                                                                                                                                                                                                                                                                                                                                                  setError(data.error === 'no_sitemap' ? data.message : (data.error || 'Something went wrong.')); setState('error'); return;
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                      setResults(data); setState('results');
                                                                                                                                                                                                                                                                                                                                                                                            } catch { setError('Network error.'); setState('error'); }
                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                function reset() { setState('idle'); setResults(null); setError(null); }

                                                                                                                                                                                                                                                                                                                                                                                                  return (
                                                                                                                                                                                                                                                                                                                                                                                                        <div style={{ minHeight:'100vh',background:'var(--paper)' }}>
                                                                                                                                                                                                                                                                                                                                                                                                                <Navbar />
                                                                                                                                                                                                                                                                                                                                                                                                                      <main>
                                                                                                                                                                                                                                                                                                                                                                                                                                {state === 'idle' && (<><Hero onSubmit={handleAnalyze} loading={false} variant="default" /><Features /><HowItWorks /><Testimonials /><FAQ /><ContactCTA /><BlogSection /></>)}
                                                                                                                                                                                                                                                                                                                                                                                                                                        {state === 'loading' && <Loading domain={domain} />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                {state === 'error' && (<div style={{ maxWidth:540,margin:'80px auto',padding:'0 24px',textAlign:'center' }}><div style={{ fontSize:40,marginBottom:20 }}>🔍</div><h2 style={{ fontSize:24,fontWeight:700,color:'var(--ink)',marginBottom:12 }}>Sitemap not found</h2><p style={{ fontSize:15,color:'var(--muted)',lineHeight:1.6,marginBottom:32 }}>{error}</p><button onClick={reset} className="cta-btn">Try another domain</button></div>)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                        {state === 'results' && results && (<Results data={results as any} onReset={reset} />)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                              </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {state === 'idle' && <Footer />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {showPaywall && <PaywallModal domain={paywallDomain} onClose={() => setShowPaywall(false)} />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                                  }