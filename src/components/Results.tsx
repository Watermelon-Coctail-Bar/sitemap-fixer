'use client';
import { useState } from 'react';
import { ScoreRing } from './ScoreRing';

interface Issue {
  severity: 'critical' | 'warning' | 'opportunity' | 'info';
  problem: string;
  fix: string;
  effort: 'low' | 'medium' | 'high';
}

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
    summary?: string;
    issues?: Issue[];
    topActions: string[];
    quickWins: Array<{ action: string; example: string }>;
    missingPages: Array<{ intent: string; suggestedUrl: string; suggestedTitle: string }>;
    internalLinkingFixes: Array<{ from: string; to: string; reason: string }>;
    contentRefresh: Array<{ url: string; issue: string; fix: string }>;
    structureIssues: string[];
  };
}

const SEV_CONFIG = {
  critical: { label: 'Critical', color: '#dc2626', bg: '#fef2f2', border: '#fecaca', dot: '#dc2626' },
  warning:  { label: 'Warning',  color: '#d97706', bg: '#fffbeb', border: '#fde68a', dot: '#d97706' },
  opportunity: { label: 'Opportunity', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', dot: '#2563eb' },
  info:     { label: 'Info',     color: '#6b7280', bg: '#f9fafb', border: '#e5e7eb', dot: '#9ca3af' },
};

const EFFORT_LABEL = { low: '< 30 min', medium: '1–4 hrs', high: 'Days' };

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
      style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 5, padding: '2px 8px', fontSize: 11, color: copied ? '#16a34a' : 'var(--muted)', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s', flexShrink: 0 }}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

export function Results({ data, onReset }: { data: AnalysisResult; onReset: () => void }) {
  const { report, totalUrls, staleCount, orphanCount, noLastmodCount, sitemapUrl, clusters } = data;
  const issues = report.issues || [];
  const criticalCount = issues.filter(i => i.severity === 'critical').length;
  const warningCount = issues.filter(i => i.severity === 'warning').length;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 80px' }}>

      {/* Header */}
      <div className="anim-fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid var(--border)', marginBottom: 28, gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{data.domain}</div>
          <div style={{ fontSize: 12, color: 'var(--muted-2)', fontFamily: "'DM Mono', monospace", marginTop: 2 }}>
            {sitemapUrl} · {totalUrls.toLocaleString()} URLs
          </div>
        </div>
        <button onClick={onReset} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 16px', fontSize: 13, color: 'var(--muted)', cursor: 'pointer', fontFamily: 'inherit' }}>
          ← New analysis
        </button>
      </div>

      {/* Score + Summary row */}
      <div className="anim-fade-up anim-fade-up-1" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 20, marginBottom: 24 }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, minWidth: 170, justifyContent: 'center', padding: '24px 20px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>SEO Score</div>
          <ScoreRing score={report.seoScore} size={100} />
          <div style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.5, maxWidth: 140 }}>{report.scoreReason}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Issue badges */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {criticalCount > 0 && <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#dc2626', display: 'inline-block' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#dc2626' }}>{criticalCount} Critical</span>
            </div>}
            {warningCount > 0 && <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 8, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#d97706', display: 'inline-block' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#d97706' }}>{warningCount} Warnings</span>
            </div>}
            <div style={{ background: 'var(--border-2)', borderRadius: 8, padding: '8px 16px' }}>
              <span style={{ fontSize: 13, color: 'var(--ink)' }}>{totalUrls} pages indexed</span>
            </div>
            {staleCount > 0 && <div style={{ background: 'var(--border-2)', borderRadius: 8, padding: '8px 16px' }}>
              <span style={{ fontSize: 13, color: 'var(--amber)' }}>{staleCount} stale</span>
            </div>}
          </div>
          {/* Summary */}
          {report.summary && (
            <div style={{ background: 'var(--border-2)', borderRadius: 10, padding: '14px 18px', fontSize: 14, color: 'var(--ink)', lineHeight: 1.7 }}>
              {report.summary}
            </div>
          )}
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {[
              { label: 'Total Pages', value: totalUrls.toLocaleString(), color: 'var(--ink)' },
              { label: 'Stale', value: staleCount, color: staleCount > 0 ? 'var(--amber)' : 'var(--green)' },
              { label: 'Isolated', value: orphanCount, color: orphanCount > 0 ? 'var(--amber)' : 'var(--green)' },
              { label: 'No lastmod', value: noLastmodCount, color: noLastmodCount > totalUrls * 0.3 ? 'var(--red)' : 'var(--muted)' },
            ].map(s => (
              <div key={s.label} className="card" style={{ padding: '12px 16px' }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ISSUES TABLE — the main feature */}
      {issues.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-2" style={{ marginBottom: 20 }}>
          <div className="card-header">
            <span style={{ fontSize: 18 }}>🔍</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Issues Found</span>
            <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--muted)' }}>{issues.length} issues · sorted by severity</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  {['Severity', 'Problem', 'Fix — copy & apply', 'Effort'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px 14px', fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {issues.map((issue, i) => {
                  const sev = SEV_CONFIG[issue.severity] || SEV_CONFIG.info;
                  return (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border-2)', background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.01)' }}>
                      <td style={{ padding: '12px 14px', verticalAlign: 'top' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: sev.bg, border: `1px solid ${sev.border}`, borderRadius: 6, padding: '3px 10px', whiteSpace: 'nowrap' }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: sev.dot, display: 'inline-block', flexShrink: 0 }} />
                          <span style={{ fontSize: 11, fontWeight: 700, color: sev.color }}>{sev.label}</span>
                        </div>
                      </td>
                      <td style={{ padding: '12px 14px', verticalAlign: 'top', lineHeight: 1.6, color: 'var(--ink)', maxWidth: 280 }}>{issue.problem}</td>
                      <td style={{ padding: '12px 14px', verticalAlign: 'top', maxWidth: 320 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <span style={{ fontSize: 13, color: '#16a34a', lineHeight: 1.6, flex: 1 }}>{issue.fix}</span>
                          <CopyButton text={issue.fix} />
                        </div>
                      </td>
                      <td style={{ padding: '12px 14px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: 11, color: 'var(--muted)', background: 'var(--border-2)', borderRadius: 5, padding: '3px 8px' }}>
                          {EFFORT_LABEL[issue.effort] || issue.effort}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Top Actions */}
      <div className="card anim-fade-up anim-fade-up-3" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <span style={{ fontSize: 18 }}>⚡</span>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Action Plan</span>
          <span className="tag tag-red" style={{ marginLeft: 'auto' }}>DO THESE FIRST</span>
        </div>
        <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {report.topActions.map((action, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: i === 0 ? 'var(--accent-light)' : 'var(--border-2)', borderRadius: 8, border: i === 0 ? '1px solid rgba(45,91,227,0.2)' : '1px solid transparent' }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: i === 0 ? 'var(--accent)' : 'var(--border)', color: i === 0 ? 'white' : 'var(--muted)', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
              <span style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6, flex: 1 }}>{action}</span>
              <CopyButton text={action} />
            </li>
          ))}
        </ol>
      </div>

      {/* Two column: Quick Wins + Missing Pages */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div className="card anim-fade-up anim-fade-up-4">
          <div className="card-header">
            <span style={{ fontSize: 16 }}>🎯</span>
            <span style={{ fontWeight: 700, fontSize: 14 }}>Quick Wins</span>
            <span className="tag tag-green" style={{ marginLeft: 'auto' }}>Fast impact</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {report.quickWins.map((qw, i) => (
              <div key={i} style={{ paddingBottom: 14, borderBottom: i < report.quickWins.length - 1 ? '1px solid var(--border-2)' : 'none' }}>
                <div style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500, marginBottom: 8, lineHeight: 1.5 }}>{qw.action}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="url-chip" style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{qw.example}</span>
                  <CopyButton text={qw.example} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card anim-fade-up anim-fade-up-4">
          <div className="card-header">
            <span style={{ fontSize: 16 }}>⚠️</span>
            <span style={{ fontWeight: 700, fontSize: 14 }}>Structure Issues</span>
            <span className="tag tag-amber" style={{ marginLeft: 'auto' }}>Fix</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {report.structureIssues.map((issue, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--ink)', lineHeight: 1.5, paddingBottom: 12, borderBottom: i < report.structureIssues.length - 1 ? '1px solid var(--border-2)' : 'none' }}>
                <span style={{ color: 'var(--amber)', flexShrink: 0, marginTop: 2 }}>›</span>
                <span style={{ flex: 1 }}>{issue}</span>
                <CopyButton text={issue} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Missing Pages — full width table */}
      <div className="card anim-fade-up anim-fade-up-5" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <span style={{ fontSize: 16 }}>📄</span>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Missing Pages — Create These</span>
          <span className="tag tag-blue" style={{ marginLeft: 'auto' }}>Traffic opportunity</span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {['Search Intent', 'Suggested URL', 'Suggested H1 Title'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {report.missingPages.map((p, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--border-2)', borderBottom: '1px solid var(--border-2)' }}>
                  <td style={{ padding: '10px 12px', color: 'var(--muted)', lineHeight: 1.4 }}>{p.intent}</td>
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="url-chip">{p.suggestedUrl}</span>
                      <CopyButton text={p.suggestedUrl} />
                    </div>
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4, flex: 1 }}>{p.suggestedTitle}</span>
                      <CopyButton text={p.suggestedTitle} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Internal Linking */}
      <div className="card anim-fade-up anim-fade-up-6" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <span style={{ fontSize: 16 }}>🔗</span>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Internal Links to Add</span>
          <span className="tag tag-amber" style={{ marginLeft: 'auto' }}>{report.internalLinkingFixes.length} suggestions</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {report.internalLinkingFixes.map((fix, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto', gap: 12, alignItems: 'center', padding: '10px 14px', background: 'var(--border-2)', borderRadius: 8 }}>
              <span className="url-chip" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} title={fix.from}>{fix.from}</span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '0 4px' }}>
                <span style={{ color: 'var(--accent)', fontSize: 16 }}>→</span>
                <span style={{ fontSize: 10, color: 'var(--muted)', maxWidth: 90, textAlign: 'center', lineHeight: 1.3 }}>{fix.reason}</span>
              </div>
              <span className="url-chip" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} title={fix.to}>{fix.to}</span>
              <CopyButton text={`Add a link from ${fix.from} to ${fix.to} — ${fix.reason}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Content Refresh */}
      {report.contentRefresh.length > 0 && (
        <div className="card anim-fade-up">
          <div className="card-header">
            <span style={{ fontSize: 16 }}>🔄</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Content to Refresh</span>
            <span className="tag tag-amber" style={{ marginLeft: 'auto' }}>Stale</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr>
                  {['Page', 'Problem', 'Fix'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {report.contentRefresh.map((item, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--border-2)', borderBottom: '1px solid var(--border-2)' }}>
                    <td style={{ padding: '10px 12px' }}><span className="url-chip">{item.url}</span></td>
                    <td style={{ padding: '10px 12px', color: 'var(--red)', lineHeight: 1.4 }}>{item.issue}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 12, color: 'var(--green)', lineHeight: 1.4, flex: 1 }}>{item.fix}</span>
                        <CopyButton text={item.fix} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Site Clusters */}
      {clusters.length > 0 && (
        <div className="card" style={{ marginTop: 20 }}>
          <div className="card-header" style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 14 }}>🗂</span>
            <span style={{ fontWeight: 600, fontSize: 13 }}>Site Sections</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {clusters.slice(0, 10).map(c => (
              <div key={c.prefix} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="url-chip">/{c.prefix || '(root)'}</span>
                <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>{c.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
