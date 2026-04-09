'use client';
import { useState } from 'react';
import { ScoreRing } from './ScoreRing';

interface Issue {
  severity: 'critical' | 'warning' | 'opportunity' | 'info';
  problem: string;
  fix: string;
  effort: string;
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

const SEV: Record<string, { label: string; color: string; bg: string; dot: string }> = {
  critical:    { label: 'Error',       color: '#dc2626', bg: '#fef2f2', dot: '#dc2626' },
  warning:     { label: 'Warning',     color: '#d97706', bg: '#fffbeb', dot: '#d97706' },
  opportunity: { label: 'Improvement', color: '#2563eb', bg: '#eff6ff', dot: '#2563eb' },
  info:        { label: 'Info',        color: '#6b7280', bg: '#f9fafb', dot: '#9ca3af' },
};

const EFFORT: Record<string, { label: string; color: string }> = {
  '5min': { label: '~5 min', color: '#16a34a' },
  '15min': { label: '~15 min', color: '#16a34a' },
  '30min': { label: '~30 min', color: '#d97706' },
  '1hr': { label: '1+ hr', color: '#d97706' },
  // Legacy fallbacks
  low: { label: '~5 min', color: '#16a34a' },
  medium: { label: '~15 min', color: '#d97706' },
  high: { label: '~30 min', color: '#dc2626' },
};

// Human-readable fix labels
function humanFix(fix: string): string {
  const lower = fix.toLowerCase();
  if (lower === 'add lastmod tag' || lower === 'add lastmod') return 'Missing last-modified date';
  if (lower.includes('keep as primary') || lower === 'keep as primary') return '';
  if (lower.startsWith('add to ')) return fix;
  if (lower.startsWith('add noindex')) return 'Should have noindex tag';
  // Strip full URLs to relative paths
  if (fix.match(/^https?:\/\//)) {
    try { return '→ ' + new URL(fix).pathname; } catch { /* fallback */ }
  }
  // 301 redirect suggestions
  if (lower.includes('301 redirect to') || lower.includes('redirect to')) {
    const target = fix.replace(/.*redirect to\s*/i, '').trim();
    if (target.match(/^https?:\/\//)) {
      try { return '→ redirect to ' + new URL(target).pathname; } catch { /* fallback */ }
    }
    return '→ redirect to ' + target;
  }
  return fix;
}

/* ─── Copy Button ─── */
function Cp({ text, label }: { text: string; label?: string }) {
  const [ok, set] = useState(false);
  return (
    <button
      onClick={e => { e.stopPropagation(); navigator.clipboard.writeText(text); set(true); setTimeout(() => set(false), 1500); }}
      style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 5, padding: '2px 8px', fontSize: 11, color: ok ? '#16a34a' : 'var(--muted)', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}
    >
      {ok ? '✓ Copied' : (label || 'Copy')}
    </button>
  );
}

/* ─── Build URL → issue map ─── */
function buildUrlIssueMap(issues: Issue[]) {
  const map = new Map<string, { severity: string; fix: string; fixedUrl?: string; effort: string; problem: string }>();
  for (const issue of issues) {
    if (!issue.affectedUrls) continue;
    issue.affectedUrls.forEach((url, i) => {
      const existing = map.get(url);
      const sevOrder: Record<string, number> = { critical: 0, warning: 1, opportunity: 2, info: 3 };
      const newSev = sevOrder[issue.severity] ?? 3;
      const existSev = existing ? sevOrder[existing.severity] ?? 3 : 99;
      if (!existing || newSev < existSev) {
        map.set(url, {
          severity: issue.severity,
          fix: issue.fix,
          fixedUrl: issue.fixedUrls?.[i],
          effort: issue.effort,
          problem: issue.problem,
        });
      }
    });
  }
  return map;
}

/* ─── Cluster Group ─── */
function ClusterGroup({ cluster, urlIssues, filter, forceExpand }: {
  cluster: { label: string; prefix: string; count: number; urls?: string[] };
  urlIssues: Map<string, { severity: string; fix: string; fixedUrl?: string; effort: string; problem: string }>;
  filter: string | null;
  forceExpand: boolean;
}) {
  const [manualExpand, setManualExpand] = useState<boolean | null>(null);
  const urls = cluster.urls || [];
  const issueCount = urls.filter(u => urlIssues.has(u)).length;

  // When filter active, auto-expand clusters with matching issues
  const hasMatchingIssues = filter ? urls.some(u => {
    const issue = urlIssues.get(u);
    return issue && issue.severity === filter;
  }) : false;

  const expanded = manualExpand !== null ? manualExpand : (forceExpand && hasMatchingIssues);

  // Filter URLs based on severity filter
  const visibleUrls = filter
    ? urls.filter(u => { const issue = urlIssues.get(u); return issue && issue.severity === filter; })
    : urls;

  if (filter && visibleUrls.length === 0) return null;

  return (
    <div style={{ borderBottom: '1px solid var(--border-2)' }}>
      <div
        onClick={() => setManualExpand(expanded ? false : true)}
        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', cursor: 'pointer', background: expanded ? 'var(--border-2)' : 'transparent' }}
      >
        <span style={{ fontSize: 11, color: 'var(--muted)', transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s' }}>▶</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', fontFamily: "'DM Mono', monospace", flex: 1 }}>{cluster.prefix || cluster.label || '/'}</span>
        <span style={{ fontSize: 12, color: 'var(--muted)' }}>{cluster.count} URLs</span>
        {issueCount > 0 && (
          <span style={{ fontSize: 11, fontWeight: 600, color: '#dc2626', background: '#fef2f2', borderRadius: 99, padding: '2px 8px' }}>
            {issueCount} issue{issueCount !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {expanded && visibleUrls.length > 0 && (
        <div style={{ padding: '0 16px 8px' }}>
          <div style={{ display: 'flex', padding: '6px 0', borderBottom: '1px solid var(--border)', marginBottom: 4 }}>
            <span style={{ width: '45%', fontSize: 10, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>URL</span>
            <span style={{ flex: 1, fontSize: 10, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Issue / Fix</span>
          </div>
          {visibleUrls.map((url, i) => {
            const issue = urlIssues.get(url);
            const sev = issue ? SEV[issue.severity] || SEV.info : null;
            const eff = issue ? EFFORT[issue.effort] || EFFORT['15min'] : null;
            const fixLabel = issue ? humanFix(issue.fixedUrl || issue.fix) : '';
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', padding: '6px 0', gap: 8,
                borderBottom: i < visibleUrls.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                borderLeft: issue ? `3px solid ${sev!.dot}` : '3px solid transparent',
                paddingLeft: 8,
                background: issue ? `${sev!.bg}40` : 'transparent',
              }}>
                <span style={{ width: '45%', fontSize: 12, color: issue ? 'var(--ink)' : 'var(--muted)', fontFamily: "'DM Mono', monospace", wordBreak: 'break-all', flexShrink: 0, lineHeight: 1.4 }}>
                  {url.replace(/^https?:\/\/[^/]+/, '')}
                </span>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                  {issue && fixLabel ? (
                    <>
                      <span style={{ fontSize: 12, color: sev!.color, wordBreak: 'break-word' }}>{fixLabel}</span>
                      {eff && <span style={{ fontSize: 9, fontWeight: 600, color: eff.color, background: 'var(--border-2)', borderRadius: 4, padding: '1px 5px', flexShrink: 0 }}>{eff.label}</span>}
                    </>
                  ) : !issue ? (
                    <span style={{ fontSize: 12, color: '#bbb' }}>OK</span>
                  ) : null}
                </div>
                <Cp text={url} />
              </div>
            );
          })}
          {!filter && cluster.count > urls.length && (
            <div style={{ fontSize: 11, color: 'var(--muted)', padding: '8px 0', textAlign: 'center' }}>
              + {cluster.count - urls.length} more URLs
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Action Item (expandable checklist) ─── */
function ActionItem({ action, index, issue, checked, onToggle, note, onNote, domain }: {
  action: string; index: number; issue?: Issue; checked: boolean;
  onToggle: () => void; note: string; onNote: (v: string) => void; domain: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasUrls = issue && issue.affectedUrls && issue.affectedUrls.length > 0;
  const eff = issue ? EFFORT[issue.effort] || EFFORT['15min'] : null;

  return (
    <div style={{ borderRadius: 8, border: index === 0 && !checked ? '1px solid rgba(45,91,227,0.2)' : '1px solid transparent', background: checked ? '#f0fdf4' : index === 0 ? 'var(--accent-light)' : 'var(--border-2)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '12px 16px' }}>
        {/* Checkbox */}
        <button onClick={onToggle} style={{ width: 20, height: 20, borderRadius: 4, border: checked ? 'none' : '2px solid var(--border)', background: checked ? '#16a34a' : 'white', cursor: 'pointer', flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 12 }}>
          {checked && '✓'}
        </button>
        {/* Action text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 13, color: checked ? 'var(--muted)' : 'var(--ink)', lineHeight: 1.6, textDecoration: checked ? 'line-through' : 'none' }}>{action}</span>
          {/* Note */}
          {(note || checked) && (
            <input
              value={note}
              onChange={e => onNote(e.target.value)}
              placeholder="Add a note..."
              style={{ display: 'block', width: '100%', border: 'none', borderBottom: '1px solid var(--border-2)', background: 'transparent', fontSize: 12, color: 'var(--muted)', padding: '4px 0', marginTop: 4, outline: 'none' }}
            />
          )}
        </div>
        {/* Effort badge */}
        {eff && <span style={{ fontSize: 9, fontWeight: 600, color: eff.color, background: 'white', borderRadius: 4, padding: '2px 6px', flexShrink: 0, border: '1px solid var(--border-2)' }}>{eff.label}</span>}
        {/* Expand toggle */}
        {hasUrls && (
          <button onClick={() => setExpanded(!expanded)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: 'var(--accent)', padding: 0, flexShrink: 0 }}>
            {expanded ? 'Hide URLs' : `${issue!.affectedUrls!.length} URLs ▼`}
          </button>
        )}
      </div>
      {/* Expanded URLs */}
      {expanded && issue?.affectedUrls && (
        <div style={{ padding: '0 16px 12px 46px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
            <Cp text={issue.affectedUrls.join('\n')} label={`Copy ${issue.affectedUrls.length} URLs`} />
          </div>
          {issue.affectedUrls.map((url, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0' }}>
              <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: 'var(--ink)', wordBreak: 'break-all', flex: 1 }}>
                {url.replace(/^https?:\/\/[^/]+/, '')}
              </span>
              {issue.fixedUrls?.[i] && (
                <span style={{ fontSize: 11, color: '#16a34a' }}>→ {humanFix(issue.fixedUrls[i])}</span>
              )}
              <Cp text={url} />
            </div>
          ))}
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

  const [filter, setFilter] = useState<string | null>(null);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [notes, setNotes] = useState<Record<number, string>>({});

  const toggleCheck = (i: number) => {
    const next = new Set(checked);
    next.has(i) ? next.delete(i) : next.add(i);
    setChecked(next);
  };

  const copyAllActions = () => {
    const lines = [`Priority Action Plan for ${data.domain}\n`];
    report.topActions.forEach((a, i) => {
      const mark = checked.has(i) ? 'x' : ' ';
      lines.push(`[${mark}] ${i + 1}. ${a}`);
      if (notes[i]) lines.push(`    Note: ${notes[i]}`);
    });
    navigator.clipboard.writeText(lines.join('\n'));
  };

  // Match topActions to issues (by index, best effort)
  const actionIssueMap = report.topActions.map((_, i) => issues[i] || undefined);

  const toggleFilter = (sev: string) => setFilter(filter === sev ? null : sev);

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

      {/* Clickable filter pills */}
      <div className="anim-fade-up anim-fade-up-1" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
        {criticalCount > 0 && (
          <button onClick={() => toggleFilter('critical')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: filter === 'critical' ? '#dc2626' : '#fef2f2', borderRadius: 99, padding: '5px 14px', border: 'none', cursor: 'pointer' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: filter === 'critical' ? 'white' : '#dc2626' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: filter === 'critical' ? 'white' : '#dc2626' }}>{criticalCount} Error{criticalCount !== 1 ? 's' : ''}</span>
          </button>
        )}
        {warningCount > 0 && (
          <button onClick={() => toggleFilter('warning')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: filter === 'warning' ? '#d97706' : '#fffbeb', borderRadius: 99, padding: '5px 14px', border: 'none', cursor: 'pointer' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: filter === 'warning' ? 'white' : '#d97706' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: filter === 'warning' ? 'white' : '#d97706' }}>{warningCount} Warning{warningCount !== 1 ? 's' : ''}</span>
          </button>
        )}
        {improvementCount > 0 && (
          <button onClick={() => toggleFilter('opportunity')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: filter === 'opportunity' ? '#2563eb' : '#eff6ff', borderRadius: 99, padding: '5px 14px', border: 'none', cursor: 'pointer' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: filter === 'opportunity' ? 'white' : '#2563eb' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: filter === 'opportunity' ? 'white' : '#2563eb' }}>{improvementCount} Improvement{improvementCount !== 1 ? 's' : ''}</span>
          </button>
        )}
        {filter && (
          <button onClick={() => setFilter(null)} style={{ fontSize: 12, color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
            Clear filter
          </button>
        )}
      </div>

      {/* ─── Sitemap Viewer ─── */}
      {clusters.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-2" style={{ marginBottom: 24 }}>
          <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Sitemap</span>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>{filter ? `Showing ${filter} issues only` : 'Click a section to inspect URLs'}</span>
          </div>
          {clusters.map((cluster, i) => (
            <ClusterGroup key={i} cluster={cluster} urlIssues={urlIssues} filter={filter} forceExpand={!!filter} />
          ))}
        </div>
      )}

      {/* ─── URL Health Check ─── */}
      {data.urlHealth && data.urlHealth.results.length > 0 && !filter && (
        <div className="card anim-fade-up anim-fade-up-2" style={{ marginBottom: 24 }}>
          <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>URL Health Check</span>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>{data.urlHealth.healthy}/{data.urlHealth.checked} healthy</span>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '12px 16px', borderBottom: '1px solid var(--border-2)' }}>
            {data.urlHealth.issues.notFound.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#dc2626', background: '#fef2f2', borderRadius: 99, padding: '3px 10px' }}>404: {data.urlHealth.issues.notFound.length}</span>}
            {data.urlHealth.issues.redirects.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#d97706', background: '#fffbeb', borderRadius: 99, padding: '3px 10px' }}>Redirects: {data.urlHealth.issues.redirects.length}</span>}
            {data.urlHealth.issues.noindexConflict.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#dc2626', background: '#fef2f2', borderRadius: 99, padding: '3px 10px' }}>noindex conflict: {data.urlHealth.issues.noindexConflict.length}</span>}
            {data.urlHealth.issues.canonicalMismatch.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#d97706', background: '#fffbeb', borderRadius: 99, padding: '3px 10px' }}>Canonical mismatch: {data.urlHealth.issues.canonicalMismatch.length}</span>}
            {data.urlHealth.issues.blockedByRobots.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#dc2626', background: '#fef2f2', borderRadius: 99, padding: '3px 10px' }}>Blocked: {data.urlHealth.issues.blockedByRobots.length}</span>}
            {data.urlHealth.issues.slow.length > 0 && <span style={{ fontSize: 12, fontWeight: 600, color: '#d97706', background: '#fffbeb', borderRadius: 99, padding: '3px 10px' }}>Slow: {data.urlHealth.issues.slow.length}</span>}
          </div>
          {data.urlHealth.results.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '8px 16px', borderBottom: i < data.urlHealth!.results.length - 1 ? '1px solid var(--border-2)' : 'none', gap: 8, borderLeft: `3px solid ${r.status === 404 || r.hasNoindex || r.blockedByRobots ? '#dc2626' : '#d97706'}` }}>
              <span style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color: 'var(--ink)', wordBreak: 'break-all', flex: 1, lineHeight: 1.4 }}>
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

      {/* ─── Priority Action Plan (interactive checklist) ─── */}
      {report.topActions.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-3" style={{ marginBottom: 24 }}>
          <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Action Plan</span>
            <span style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 4 }}>{checked.size}/{report.topActions.length} done</span>
          </div>
          {/* Override the Copy all to use our custom format */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0' }}>
            {report.topActions.map((action, i) => (
              <ActionItem
                key={i}
                action={action}
                index={i}
                issue={actionIssueMap[i]}
                checked={checked.has(i)}
                onToggle={() => toggleCheck(i)}
                note={notes[i] || ''}
                onNote={v => setNotes({ ...notes, [i]: v })}
                domain={data.domain}
              />
            ))}
          </div>
          {/* Real Copy all button */}
          <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border-2)' }}>
            <button
              onClick={copyAllActions}
              style={{ width: '100%', padding: '10px', background: 'var(--border-2)', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13, color: 'var(--ink)', fontWeight: 600 }}
            >
              Copy full action plan with notes
            </button>
          </div>
        </div>
      )}

      {/* ─── Missing Pages ─── */}
      {report.missingPages.length > 0 && !filter && (
        <div className="card anim-fade-up anim-fade-up-4" style={{ marginBottom: 24 }}>
          <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Missing Pages</span>
            <span className="tag tag-blue" style={{ marginLeft: 'auto' }}>Traffic opportunity</span>
            <Cp text={report.missingPages.map(p => `${p.suggestedUrl}\t${p.suggestedTitle}`).join('\n')} label="Copy all" />
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
                      <span style={{ fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4 }}>{p.suggestedTitle}</span>
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
