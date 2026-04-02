import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Podcast SEO: How to Get Your Podcast Found in Search | SitemapFixer',
  description: "Podcast SEO means ranking your episodes in Google Search, Apple Podcasts, and Spotify. Here is how show notes, transcripts, and structured data maximize your discoverability.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/podcast-seo' },
};
const sections = [
  { h: "How Google Indexes Podcasts", d: "Google indexes podcast audio and can transcribe episode content, but the text on your episode pages is what drives most web search rankings. Since 2019, Google has started showing podcast episodes directly in search results with a play button — but this requires your podcast to be in Google Podcasts infrastructure or indexed via your RSS feed. For most podcast SEO, the focus should be on your website's episode pages, not the podcast platforms themselves." },
  { h: "Episode Show Notes: The SEO Foundation", d: "Every podcast episode needs a dedicated page on your website with comprehensive show notes. These are not a summary — they are a full, standalone resource covering the episode topic. Include: an episode summary of 300-500 words covering key points, timestamps with descriptions of major segments, links to all resources mentioned, guest bio and links, and key quotes or insights. The more valuable your show notes as a standalone web page, the better they rank. Think of each episode as a blog post that happens to have an audio version." },
  { h: "Transcripts for SEO", d: "Full episode transcripts make your audio content fully indexable by Google. A 45-minute episode contains thousands of words of potentially rankable content. Publish transcripts on each episode page or as an expandable section below the show notes. Use a service like Otter.ai, Descript, or Rev for transcription. Clean up the transcript for readability before publishing — raw transcripts with filler words and [inaudible] markers degrade page quality. Format with speaker labels and paragraph breaks." },
  { h: "PodcastEpisode Schema Markup", d: "Add PodcastEpisode structured data to every episode page to help Google understand the content and generate rich results. Key properties: name (episode title), description, datePublished, duration (ISO 8601: PT45M for 45 minutes), associatedMedia with contentUrl pointing to the audio file, and partOfSeries linking to your podcast series page. Test with Google Rich Results Test. Google uses this data to include episodes in its podcast search experience." },
  { h: "Keyword Research for Podcasts", d: "Research what your audience searches for around your topics, then plan episodes to target those queries. Use Google Autocomplete, Answer the Public, and SEMrush to find questions in your niche. Target informational queries that your podcast format answers well — how-to, what is, and interview-based content. Episode titles are your title tags: make them descriptive and keyword-rich rather than clever but vague. Episode 47: My Conversation with John Smith does not rank. How to Build a Remote Sales Team with John Smith, VP at Salesforce does." },
  { h: "Your Podcast Website Structure", d: "Create a dedicated page for your podcast series with PodcastSeries schema. Individual episode pages should be under /podcast/episode-slug or /episodes/episode-slug — a consistent URL structure that Google understands as a content series. Include your podcast RSS feed URL in your site header. Build internal links between related episodes, connecting episodes on the same topic or with the same guest. Submit your podcast RSS feed to Google Podcasts Manager (podcastsmanager.google.com) and to all major podcast directories." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Podcast SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Podcast SEO: Get Your Episodes Found in Search</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your podcast site SEO free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your podcast website</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
