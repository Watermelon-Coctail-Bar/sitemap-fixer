'use client';
import { useState } from 'react';
import { ScoreRing } from './ScoreRing';

interface Issue {
  severity: 'critical' | 'warning' | 'opportunity' | 'info';
  problem: string;
  fix: string;
  effort: 'low' | 'medium' | 'high';
  affectedUrls?: string[];
  fixedUrls?: string[];
}

interface AnalysisResult {
  domain: string;
  sitemapUrl: string;
  isSitemapIndex: boolean;
  totalUrls: number;
  staleCount: number;
  orphanCount: number;
  noLastmodCount: number;
  clusters: Array<{ label: string; prefix: string; count: number; urls?: string[] }>;
  urlHealth?: {
    checked: number;
    healthy: number;
    issues: {
      notFound: string[];
      redirects: { url: string; redirectsTo: string }[];
      serverErrors: string[];
      noindexConflict: string[];
      canonicalMismatch: { url: string; canonical: string }[];
      blockedByRobots: string[];
      slow: { url: string; ms: number }[];
    };
    results: Array<{ url: string; status: number; issue?: string; hasNoindex: boolean; canonicalMismatch: boolean; responseTimeMs: number; redirectUrl?: string; canonicalUrl?: string; blockedByRobots: boolean }>;
  } | null;
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

const SEV = {
  critical:    { label: 'Error',       color: '#dc2626', bg: '#fef2f2', dot: '#dc2626' },
  warning:     { label: 'Warning',     color: '#d97706', bg: '#fffbeb', dot: '#d97706' },
  opportunity: { label: 'Improvement', color: '#2563eb', bg: '#eff6ff', dot: '#2563eb' },
  info:        { label: 'Info',        color: '#6b7280', bg: '#f9fafb', dot: '#9ca3af' },
};

const EFFORT: Record<string, { label: string; color: string }> = {
  low: { label: '< 30 min', color: '#16a34a' },
  medium: { label: '1-4 hrs', color: '#d97706' },
  high: { label: 'Days', color: '#dc2626' },
};

/* ─── Copy Button ─── */
function Cp({ text, label }: { text: string; label?: string }) {
  const [ok, set] = useState(false);
  return (
    <button
      onClick={e => { e.stopPropagation(); navigator.clipboard.writeText(text); set(true); setTimeout(() => set(false), 1500); }}
      style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 5, padding: '2px 8px', fontSize: 11, color: ok ? '#16a34a' : 'var(--muted)', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}
    >
      {ok ? '✓' : (label || 'Copy')}
    </button>
  );
}

/* ─── Build URL → issue map ─── */
function buildUrlIssueMap(issues: Issue[]) {
  const map = new Map<string, { severity: string; fix: string; fixedUrl?: string; effort: string }>();
  for (const issue of issues) {
    if (!issue.affectedUrls) continue;
    issue.affectedUrls.forEach((url, i) => {
      // Keep highest severity per URL
      const existing = map.get(url);
      const sevOrder = { critical: 0, warning: 1, opportunity: 2, info: 3 };
      const newSev = sevOrder[issue.severity] ?? 3;
      const existSev = existing ? sevOrder[existing.severity as keyof typeof sevOrder] ?? 3 : 99;
      if (newSev < existSev) {
        map.set(url, {
          severity: issue.severity,
          fix: issue.fix,
          fixedUrl: issue.fixedUrls?.[i],
          effort: issue.effort,
        });
      } else if (!existing) {
        map.set(url, {
          severity: issue.severity,
          fix: issue.fix,
          fixedUrl: issue.fixedUrls?.[i],
          effort: issue.effort,
        });
      }
    });
  }
  return map;
}

/* ─── Cluster Group ─── */
function ClusterGroup({ cluster, urlIssues }: {
  cluster: { label: string; prefix: string; count: number; urls?: string[] };
  urlIssues: Map<string, { severity: string; fix: string; fixedUrl?: string; effort: string }>;
}) {
  const [expanded, setExpanded] = useState(false);
  const urls = cluster.urls || [];
  const issueCount = urls.filter(u => urlIssues.has(u)).length;

  return (
    <div style={{ borderBottom: '1px solid var(--border-2)' }}>
      {/* Cluster header */}
      <div
        onClick={() => setExpanded(!expanded)}
        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', cursor: 'pointer', background: expanded ? 'var(--border-2)' : 'transparent' }}
      >
        <span style={{ fontSize: 11, color: 'var(--muted)', transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s' }}>▶</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', fontFamily: "'DM Mono', monospace", flex: 1 }}>{cluster.prefix}</span>
        <span style={{ fontSize: 12, color: 'var(--muted)' }}>{cluster.count} URLs</span>
        {issueCount > 0 && (
          <span style={{ fontSize: 11, fontWeight: 600, color: '#dc2626', background: '#fef2f2', borderRadius: 99, padding: '2px 8px' }}>
            {issueCount} issue{issueCount !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Expanded URL list */}
      {expanded && urls.length > 0 && (
        <div style={{ padding: '0 16px 8px' }}>
          {/* Column headers */}
          <div style={{ display: 'flex', padding: '6px 0', borderBottom: '1px solid var(--border)', marginBottom: 4 }}>
            <span style={{ width: '45%', fontSize: 10, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>URL</span>
            <span style={{ flex: 1, fontSize: 10, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Issue / Fix</span>
          </div>
          {urls.map((url, i) => {
            const issue = urlIssues.get(url);
            const sev = issue ? SEV[issue.severity as keyof typeof SEV] || SEV.info : null;
            const eff = issue ? EFFORT[issue.effort] : null;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '5px 0', borderBottom: i < urls.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', gap: 8 }}>
                {/* URL */}
                <span style={{ width: '45%', fontSize: 12, color: 'var(--ink)', fontFamily: "'DM Mono', monospace", wordBreak: 'break-all', flexShrink: 0, lineHeight: 1.4 }}>
                  {url.replace(/^https?:\/\/[^/]+/, '')}
                </span>
                {/* Issue / Fix */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, overflow: 'hidden', minWidth: 0 }}>
                  {issue ? (
                    <>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: sev!.dot, flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: sev!.color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={issue.fixedUrl || issue.fix}>
                        {issue.fixedUrl || issue.fix}
                      </span>
                      {eff && <span style={{ fontSize: 9, fontWeight: 600, color: eff.color, background: 'var(--border-2)', borderRadius: 4, padding: '1px 5px', flexShrink: 0 }}>{eff.label}</span>}
                    </>
                  ) : (
                    <span style={{ fontSize: 12, color: '#16a34a' }}>✓ OK</span>
                  )}
                </div>
                {/* Copy */}
                <Cp text={url} />
              </div>
            );
          })}
          {cluster.count > urls.length && (
            <div style={{ fontSize: 11, color: 'var(--muted)', padding: '8px 0', textAlign: 'center' }}>
              + {cluster.count - urls.length} more URLs in this section
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Main Results ─── */
export function Results({ data, onReset }: { data: AnalysisResult; onReset: () => void }) {
  const { report, totalUrls, sitemapUrl, clusters } = data;
  const issues = report.issues || [];
  const criticalCount = issues.filter(i => i.severity === 'critical').length;
  const warningCount = issues.filter(i => i.severity === 'warning').length;
  const improvementCount = issues.filter(i => i.severity === 'opportunity').length;
  const urlIssues = buildUrlIssueMap(issues);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 20px 80px' }}>

      {/* Header with Score */}
      <div className="anim-fade-up" style={{ display: 'flex', alignItems: 'center', padding: '24px 0', borderBottom: '1px solid var(--border)', marginBottom: 16, gap: 20, flexWrap: 'wrap' }}>
        <ScoreRing score={report.seoScore} size={80} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>{data.domain}</div>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{report.scoreReason}</div>
        </div>
        <button onClick={onReset} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 16px', fontSize: 13, color: 'var(--muted)', cursor: 'pointer', fontFamily: 'inherit' }}>
          New analysis
        </button>
      </div>

      {/* Sitemap bar */}
      <div className="anim-fade-up" style={{ background: '#0a0a0f', borderRadius: 10, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <a href={sitemapUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1, fontSize: 13, color: '#93c5fd', fontFamily: "'DM Mono', monospace", textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {sitemapUrl}
        </a>
        <Cp text={sitemapUrl} />
        <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 600 }}>{totalUrls.toLocaleString()} URLs</span>
      </div>

      {/* Issue pills */}
      <div className="anim-fade-up anim-fade-up-1" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
        {criticalCount > 0 && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fef2f2', borderRadius: 99, padding: '5px 14px' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#dc2626' }} /><span style={{ fontSize: 13, fontWeight: 700, color: '#dc2626' }}>{criticalCount} Error{criticalCount !== 1 ? 's' : ''}</span></span>}
        {warningCount > 0 && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fffbeb', borderRadius: 99, padding: '5px 14px' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#d97706' }} /><span style={{ fontSize: 13, fontWeight: 700, color: '#d97706' }}>{warningCount} Warning{warningCount !== 1 ? 's' : ''}</span></span>}
        {improvementCount > 0 && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#eff6ff', borderRadius: 99, padding: '5px 14px' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2563eb' }} /><span style={{ fontSize: 13, fontWeight: 700, color: '#2563eb' }}>{improvementCount} Improvement{improvementCount !== 1 ? 's' : ''}</span></span>}
      </div>

      {/* ─── Sitemap Viewer ─── */}
      {clusters.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-2" style={{ marginBottom: 24 }}>
          <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Sitemap</span>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Click a section to inspect URLs</span>
          </div>
          {clusters.map((cluster, i) => (
            <ClusterGroup key={i} cluster={cluster} urlIssues={urlIssues} />
          ))}
        </div>
      )}

      {/* ─── URL Health Check ─── */}
      {data.urlHealth && data.urlHealth.results.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-2" style={{ marginBottom: 24 }}>
          <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>URL Health Check</span>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>{data.urlHealth.healthy}/{data.urlHealth.checked} healthy</span>
          </div>
          {/* Summary pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '12px 16px', borderBottom: '1px solid var(--border-2)' }}>
            {data.urlHealth.issues.notFound.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#dc2626', background: '#fef2f2', borderRadius: 99, padding: '3px 10px' }}>404: {data.urlHealth.issues.notFound.length}</span>}
            {data.urlHealth.issues.redirects.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#d97706', background: '#fffbeb', borderRadius: 99, padding: '3px 10px' }}>Redirects: {data.urlHealth.issues.redirects.length}</span>}
            {data.urlHealth.issues.noindexConflict.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#dc2626', background: '#fef2f2', borderRadius: 99, padding: '3px 10px' }}>noindex: {data.urlHealth.issues.noindexConflict.length}</span>}
            {data.urlHealth.issues.canonicalMismatch.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#d97706', background: '#fffbeb', borderRadius: 99, padding: '3px 10px' }}>Canonical mismatch: {data.urlHealth.issues.canonicalMismatch.length}</span>}
            {data.urlHealth.issues.blockedByRobots.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#dc2626', background: '#fef2f2', borderRadius: 99, padding: '3px 10px' }}>Blocked by robots.txt: {data.urlHealth.issues.blockedByRobots.length}</span>}
            {data.urlHealth.issues.slow.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#d97706', background: '#fffbeb', borderRadius: 99, padding: '3px 10px' }}>Slow: {data.urlHealth.issues.slow.length}</span>}
            {data.urlHealth.results.length === 0 && <span style={{ fontSize: 12, color: '#16a34a' }}>All checked URLs are healthy</span>}
          </div>
          {/* Issue rows */}
          {data.urlHealth.results.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '8px 16px', borderBottom: i < data.urlHealth!.results.length - 1 ? '1px solid var(--border-2)' : 'none', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: r.status === 404 || r.hasNoindex || r.blockedByRobots ? '#dc2626' : r.status >= 300 || r.canonicalMismatch ? '#d97706' : '#6b7280', flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }} title={r.url}>
                {r.url.replace(/^https?:\/\/[^/]+/, '')}
              </span>
              <span style={{ fontSize: 12, color: r.status === 404 || r.hasNoindex ? '#dc2626' : '#d97706', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {r.issue}
              </span>
              <Cp text={r.url} />
            </div>
          ))}
        </div>
      )}

      {/* ─── Priority Action Plan ─── */}
      {report.topActions.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-3" style={{ marginBottom: 24 }}>
          <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Priority Action Plan</span>
            <span className="tag tag-red" style={{ marginLeft: 'auto' }}>Do these first</span>
            <Cp text={report.topActions.map((a, i) => `${i + 1}. ${a}`).join('\n')} label="Copy all" />
          </div>
          <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0 }}>
            {report.topActions.map((action, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: i === 0 ? 'var(--accent-light)' : 'var(--border-2)', borderRadius: 8, border: i === 0 ? '1px solid rgba(45,91,227,0.2)' : '1px solid transparent' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: i === 0 ? 'var(--accent)' : 'var(--border)', color: i === 0 ? 'white' : 'var(--muted)', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                <span style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6, flex: 1 }}>{action}</span>
                <Cp text={action} />
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* ─── Missing Pages ─── */}
      {report.missingPages.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-4" style={{ marginBottom: 24 }}>
          <div className="card-header">
            <span style={{ fontWeight: 700, fontSize: 15 }}>Missing Pages</span>
            <span className="tag tag-blue" style={{ marginLeft: 'auto' }}>Traffic opportunity</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '8px 14px', fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border)' }}>Suggested URL</th>
                  <th style={{ textAlign: 'left', padding: '8px 14px', fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border)' }}>Suggested Title</th>
                </tr>
              </thead>
              <tbody>
                {report.missingPages.map((p, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--border-2)', borderBottom: '1px solid var(--border-2)' }}>
                    <td style={{ padding: '10px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span className="url-chip" style={{ flex: 1, wordBreak: 'break-all' }}>{p.suggestedUrl}</span>
                        <Cp text={p.suggestedUrl} />
                      </div>
                    </td>
                    <td style={{ padding: '10px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4, flex: 1 }}>{p.suggestedTitle}</span>
                        <Cp text={p.suggestedTitle} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
