# SitemapAI — Sitemap Finder + AI SEO Fixer

A high-converting SaaS MVP that finds your sitemap, analyzes it with AI, and delivers specific, actionable SEO improvements — not generic advice.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your Anthropic API key
cp .env.local.example .env.local
# Edit .env.local and paste your key from https://console.anthropic.com

# 3. Run in development
npm run dev
# → Open http://localhost:3000
```

---

## 🏗️ Architecture

```
User enters domain
        │
        ▼
┌─────────────────────────────────────────────────┐
│  POST /api/analyze                              │
│                                                 │
│  1. DISCOVER  ─── robots.txt → sitemap URLs    │
│                └── common path fallbacks        │
│                                                 │
│  2. PARSE    ─── XML parser (fast-xml-parser)  │
│               └── child sitemaps (index)        │
│                                                 │
│  3. ANALYZE  ─── cluster URLs by path prefix  │
│               ├── detect stale pages (>1yr)    │
│               ├── find orphan-like pages        │
│               └── flag URL inconsistencies     │
│                                                 │
│  4. AI CALL  ─── structured prompt → Claude   │
│               └── enforced JSON output          │
└─────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────┐
│  Results UI                                     │
│  ├── SEO Score (0-100)                         │
│  ├── Top 5 Actions (prioritized)               │
│  ├── Quick Wins (fast fixes)                   │
│  ├── Missing Pages (content gaps)              │
│  ├── Internal Linking Fixes                    │
│  ├── Content Refresh (stale pages)             │
│  └── Structure Issues                          │
└─────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          ← Main API endpoint
│   ├── sitemap-finder/
│   │   └── page.tsx              ← SEO landing page
│   ├── sitemap-checker/
│   │   └── page.tsx              ← SEO landing page
│   ├── website-seo-checker/
│   │   └── page.tsx              ← SEO landing page
│   ├── layout.tsx
│   ├── page.tsx                  ← Homepage
│   └── globals.css
├── components/
│   ├── Hero.tsx                  ← Input + headline
│   ├── Loading.tsx               ← Animated progress state
│   ├── Results.tsx               ← Full results display
│   ├── ScoreRing.tsx             ← Animated SVG score
│   └── LandingPage.tsx           ← Reusable page wrapper
└── lib/
    ├── sitemapParser.ts          ← Discovery + XML parsing
    ├── urlAnalyzer.ts            ← Clustering + analysis
    └── promptBuilder.ts          ← AI prompt construction
```

---

## 🧠 How the AI Prompt Works

The prompt passes **structured, domain-specific data** to Claude:

```
DOMAIN: stripe.com
SITEMAP: https://stripe.com/sitemap.xml
TOTAL PAGES: 847
URL CLUSTERS:
  - /docs/ → 412 pages
  - /blog/ → 89 pages
  - /customers/ → 67 pages
STALE PAGES: /blog/2019-payments-trends, ...
ORPHAN PAGES: /legal/dpa-2018, ...
```

The output is **enforced JSON** — no markdown, no preamble:

```json
{
  "seoScore": 71,
  "scoreReason": "Strong docs structure but 34 blog posts untouched since 2020",
  "topActions": [
    "Refresh 34 blog posts last modified before 2021 — start with /blog/payments-api-guide which likely ranks but has outdated examples",
    ...
  ],
  "missingPages": [
    {
      "intent": "stripe vs competitors comparison",
      "suggestedUrl": "/vs/stripe-vs-braintree",
      "suggestedTitle": "Stripe vs Braintree: Full Comparison 2025"
    }
  ]
}
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary font | Geist (body) |
| Display font | Instrument Serif (headlines) |
| Code font | DM Mono (URLs, chips) |
| Accent | `#2d5be3` |
| Background | `#fafaf9` |
| Border | `#e4e4ed` |

---

## 🌐 SEO Pages

| Route | Target Keyword | Monthly Volume (est.) |
|-------|---------------|----------------------|
| `/` | sitemap ai, ai seo tool | — |
| `/sitemap-finder/` | sitemap finder | 8,100/mo |
| `/sitemap-checker/` | sitemap checker | 5,400/mo |
| `/website-seo-checker/` | website seo checker | 12,100/mo |

Each page uses the same tool with variant-specific copy, metadata, and FAQs.

---

## 💰 Monetization Roadmap

**Free tier:**
- Full analysis for any domain
- All 7 result sections

**Pro tier ($29/mo):**
- Save + compare reports over time
- Monitoring: alert when sitemap changes
- Bulk domain analysis (agencies)
- PDF export
- Priority queue

**Gating implementation:** Add a `paywallAfter` prop to Results — blur sections below the fold, show upgrade modal. Gate by session count or email capture.

---

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add env variable in Vercel dashboard:
# ANTHROPIC_API_KEY = sk-ant-...
```

Or one-click: connect your GitHub repo in vercel.com, add the env var, done.

---

## ⚙️ Configuration

### Increase sitemap child limit
In `src/lib/sitemapParser.ts`, line ~87:
```ts
const toFetch = parsed.childSitemaps.slice(0, 5); // increase to 10, 20, etc.
```

### Adjust staleness threshold
In `src/lib/urlAnalyzer.ts`:
```ts
return ageDays > 365; // change to 180 for 6 months
```

### Change AI model
In `src/app/api/analyze/route.ts`:
```ts
model: 'claude-opus-4-20250514', // upgrade for deeper analysis
```

---

## 🔒 Rate Limiting (Production)

Add to `route.ts` before the API call:

```ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 h'), // 10 req/hour per IP
});

const { success } = await ratelimit.limit(req.ip ?? 'anonymous');
if (!success) return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
```

---

## 📊 Example API Response

```json
{
  "domain": "example.com",
  "sitemapUrl": "https://example.com/sitemap_index.xml",
  "isSitemapIndex": true,
  "totalUrls": 234,
  "staleCount": 18,
  "orphanCount": 7,
  "noLastmodCount": 45,
  "clusters": [
    { "label": "Blog", "prefix": "blog", "count": 89 },
    { "label": "Products", "prefix": "products", "count": 67 }
  ],
  "report": {
    "seoScore": 58,
    "scoreReason": "Good content volume but 18 stale pages and 7 isolated URLs hurt crawl efficiency",
    "topActions": [
      "Consolidate the 7 orphan pages under /resources/ with proper internal links from /blog/",
      "Add lastmod dates to 45 pages missing timestamps — Google deprioritizes undated content",
      "Create a comparison page at /vs/competitor targeting high-intent buyers",
      "Refresh the 8 blog posts from 2021 in /blog/tutorials/ — add 2024 examples and stats",
      "Fix mixed trailing slash pattern: 112 URLs use /page/ but 89 use /page — pick one"
    ],
    "quickWins": [
      { "action": "Add lastmod to all product pages", "example": "/products/enterprise-plan" },
      { "action": "Add canonical tags to paginated blog archives", "example": "/blog/page/2" },
      { "action": "Create XML sitemap for images in /gallery/", "example": "/image-sitemap.xml" }
    ],
    "missingPages": [
      {
        "intent": "how-to guide for main use case",
        "suggestedUrl": "/how-to/getting-started",
        "suggestedTitle": "Getting Started with [Product]: Complete Guide 2025"
      },
      {
        "intent": "competitor comparison",
        "suggestedUrl": "/vs/top-competitor",
        "suggestedTitle": "[Product] vs [Competitor]: Which Is Right for You?"
      }
    ],
    "internalLinkingFixes": [
      {
        "from": "/blog/seo-tips-2024",
        "to": "/products/seo-suite",
        "reason": "High-traffic post with no CTA to product"
      }
    ],
    "contentRefresh": [
      {
        "url": "/blog/best-practices-2021",
        "issue": "Last modified 3 years ago, likely ranks for outdated terms",
        "fix": "Update examples, add 2024 stats, change date in title"
      }
    ],
    "structureIssues": [
      "Mixed trailing slash usage across 201 URLs — risks duplicate content",
      "/legacy/ section (12 pages) not linked from anywhere in sitemap clusters"
    ]
  }
}
```
