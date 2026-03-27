'use client';

import { ScoreRing } from './ScoreRing';

interface AnalysisResult {
  domain: string;
  sitemapUrl: string;
  isSitemapIndex: boolean;
  totalUrls: number;
  staleCount: number;
  orphanCount: number;
  noLastmodCount: number;
  clusters: Array<{ label: string; prefix: string; count: number }>;
  report: {
    seoScore: number;
    scoreReason: string;
    topActions: string[];
    quickWins: Array<{ action: string; example: string }>;
    missingPages: Array<{ intent: string; suggestedUrl: string; suggestedTitle: string }>;
    internalLinkingFixes: Array<{ from: string; to: string; reason: string }>;
    contentRefresh: Array<{ url: string; issue: string; fix: string }>;
    structureIssues: string[];
  };
}

interface ResultsProps {
  data: AnalysisResult;
  onReset: () => void;
}

function Icon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    bolt: '⚡',
    target: '🎯',
    page: '📄',
    link: '🔗',
    refresh: '🔄',
    warning: '⚠️',
    check: '✓',
    arrow: '→',
  };
  return <span style={{ fontSize: 14 }}>{icons[name] || '•'}</span>;
}

export function Results({ data, onReset }: ResultsProps) {
  const { report, totalUrls, staleCount, orphanCount, noLastmodCount, sitemapUrl, clusters } = data;

  const statItems = [
    { label: 'Total Pages', value: totalUrls.toLocaleString(), color: 'var(--ink)' },
    { label: 'Stale Pages', value: staleCount, color: staleCount > 0 ? 'var(--amber)' : 'var(--green)' },
    { label: 'Isolated Pages', value: orphanCount, color: orphanCount > 0 ? 'var(--amber)' : 'var(--green)' },
    { label: 'No Date Tag', value: noLastmodCount, color: noLastmodCount > totalUrls * 0.3 ? 'var(--red)' : 'var(--muted)' },
  ];

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}>
      {/* Header bar */}
      <div
        className="anim-fade-up"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 0',
          borderBottom: '1px solid var(--border)',
          marginBottom: 32,
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 4, fontFamily: "'DM Mono', monospace" }}>
            {data.domain}
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted-2)', fontFamily: "'DM Mono', monospace" }}>
            Sitemap: {sitemapUrl} · {totalUrls} URLs indexed
          </div>
        </div>
        <button
          onClick={onReset}
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '8px 16px',
            fontSize: 13,
            color: 'var(--muted)',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'border-color 0.15s, color 0.15s',
          }}
          onMouseEnter={e => {
            (e.target as HTMLButtonElement).style.borderColor = 'var(--ink)';
            (e.target as HTMLButtonElement).style.color = 'var(--ink)';
          }}
          onMouseLeave={e => {
            (e.target as HTMLButtonElement).style.borderColor = 'var(--border)';
            (e.target as HTMLButtonElement).style.color = 'var(--muted)';
          }}
        >
          ← Analyze another
        </button>
      </div>

      {/* Score + Stats row */}
      <div
        className="anim-fade-up anim-fade-up-1"
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 24,
          marginBottom: 28,
        }}
      >
        {/* Score card */}
        <div
          className="card"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, minWidth: 180, justifyContent: 'center' }}
        >
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            SEO Score
          </div>
          <ScoreRing score={report.seoScore} size={110} />
          <div
            style={{
              fontSize: 12,
              color: 'var(--muted)',
              textAlign: 'center',
              lineHeight: 1.5,
              maxWidth: 160,
            }}
          >
            {report.scoreReason}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {statItems.map(s => (
              <div key={s.label} className="card" style={{ padding: '16px 20px' }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Site structure clusters */}
          {clusters.length > 0 && (
            <div className="card" style={{ padding: '16px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>
                Site Sections
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {clusters.slice(0, 8).map(c => (
                  <div key={c.prefix} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span className="url-chip">/{c.prefix || '(root)'}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>{c.count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Top Actions */}
      <div className="card anim-fade-up anim-fade-up-2" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <span style={{ fontSize: 18 }}>⚡</span>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Top Actions</span>
          <span className="tag tag-red" style={{ marginLeft: 'auto' }}>DO THESE FIRST</span>
        </div>
        <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {report.topActions.map((action, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
                padding: '12px 16px',
                background: i === 0 ? 'var(--accent-light)' : 'var(--border-2)',
                borderRadius: 8,
                border: i === 0 ? '1px solid rgba(45,91,227,0.2)' : '1px solid transparent',
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--accent)' : 'var(--border)',
                  color: i === 0 ? 'white' : 'var(--muted)',
                  fontSize: 12,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.6 }}>{action}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Two column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Quick Wins */}
        <div className="card anim-fade-up anim-fade-up-3">
          <div className="card-header">
            <span style={{ fontSize: 16 }}>🎯</span>
            <span style={{ fontWeight: 700, fontSize: 14 }}>Quick Wins</span>
            <span className="tag tag-green" style={{ marginLeft: 'auto' }}>Fast</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {report.quickWins.map((qw, i) => (
              <div key={i} style={{ paddingBottom: 14, borderBottom: i < report.quickWins.length - 1 ? '1px solid var(--border-2)' : 'none' }}>
                <div style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500, marginBottom: 6, lineHeight: 1.5 }}>
                  {qw.action}
                </div>
                <span className="url-chip">{qw.example}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Structure Issues */}
        <div className="card anim-fade-up anim-fade-up-3">
          <div className="card-header">
            <span style={{ fontSize: 16 }}>⚠️</span>
            <span style={{ fontWeight: 700, fontSize: 14 }}>Structure Issues</span>
            <span className="tag tag-amber" style={{ marginLeft: 'auto' }}>Fix</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {report.structureIssues.map((issue, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 10,
                  fontSize: 13,
                  color: 'var(--ink)',
                  lineHeight: 1.5,
                  paddingBottom: 12,
                  borderBottom: i < report.structureIssues.length - 1 ? '1px solid var(--border-2)' : 'none',
                }}
              >
                <span style={{ color: 'var(--amber)', flexShrink: 0, marginTop: 2 }}>›</span>
                {issue}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Missing Pages */}
      <div className="card anim-fade-up anim-fade-up-4" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <span style={{ fontSize: 16 }}>📄</span>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Missing Pages — High Value</span>
          <span className="tag tag-blue" style={{ marginLeft: 'auto' }}>Create These</span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {['Search Intent', 'Suggested URL', 'Suggested Title'].map(h => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {report.missingPages.map((p, i) => (
                <tr
                  key={i}
                  style={{ background: i % 2 === 0 ? 'transparent' : 'var(--border-2)' }}
                >
                  <td style={{ padding: '10px 12px', color: 'var(--muted)', lineHeight: 1.4 }}>{p.intent}</td>
                  <td style={{ padding: '10px 12px' }}>
                    <span className="url-chip">{p.suggestedUrl}</span>
                  </td>
                  <td style={{ padding: '10px 12px', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4 }}>{p.suggestedTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Internal Linking */}
      <div className="card anim-fade-up anim-fade-up-5" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <span style={{ fontSize: 16 }}>🔗</span>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Internal Linking Fixes</span>
          <span className="tag tag-amber" style={{ marginLeft: 'auto' }}>{report.internalLinkingFixes.length} fixes</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {report.internalLinkingFixes.map((fix, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 12,
                alignItems: 'center',
                padding: '12px 16px',
                background: 'var(--border-2)',
                borderRadius: 8,
              }}
            >
              <span className="url-chip" title={fix.from}>{fix.from}</span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <span style={{ color: 'var(--accent)', fontSize: 18 }}>→</span>
                <span style={{ fontSize: 10, color: 'var(--muted)', maxWidth: 80, textAlign: 'center' }}>{fix.reason}</span>
              </div>
              <span className="url-chip" title={fix.to}>{fix.to}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Refresh */}
      {report.contentRefresh.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-6">
          <div className="card-header">
            <span style={{ fontSize: 16 }}>🔄</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Content Refresh</span>
            <span className="tag tag-amber" style={{ marginLeft: 'auto' }}>Stale</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {report.contentRefresh.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 16,
                  padding: '12px 0',
                  borderBottom: i < report.contentRefresh.length - 1 ? '1px solid var(--border-2)' : 'none',
                  alignItems: 'start',
                }}
              >
                <span className="url-chip" title={item.url}>{item.url}</span>
                <span style={{ fontSize: 12, color: 'var(--red)', lineHeight: 1.4 }}>{item.issue}</span>
                <span style={{ fontSize: 12, color: 'var(--green)', lineHeight: 1.4 }}>{item.fix}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
