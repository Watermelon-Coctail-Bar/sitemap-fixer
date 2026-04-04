'use client';
import { useState } from 'react';

interface Issue {
  severity: 'critical' | 'warning' | 'opportunity' | 'info';
  problem: string;
  fix: string;
  effort: 'low' | 'medium' | 'high';
  affectedUrls?: string[];
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
  critical:    { label: 'Critical',    color: '#dc2626', bg: '#fef2f2', border: '#fecaca', dot: '#dc2626' },
  warning:     { label: 'Warning',     color: '#d97706', bg: '#fffbeb', border: '#fde68a', dot: '#d97706' },
  opportunity: { label: 'Improvement', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', dot: '#2563eb' },
  info:        { label: 'Info',        color: '#6b7280', bg: '#f9fafb', border: '#e5e7eb', dot: '#9ca3af' },
};

const EFFORT_LABEL: Record<string, string> = { low: '< 30 min', medium: '1-4 hrs', high: 'Days' };
const EFFORT_COLOR: Record<string, string> = { low: '#16a34a', medium: '#d97706', high: '#dc2626' };

type Tab = 'critical' | 'warning' | 'opportunity' | 'all';

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
      style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 5, padding: '2px 8px', fontSize: 11, color: copied ? '#16a34a' : 'var(--muted)', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s', flexShrink: 0 }}
    >
      {copied ? 'Copied' : (label || 'Copy')}
    </button>
  );
}

function SitemapBar({ sitemapUrl, totalUrls }: { sitemapUrl: string; totalUrls: number }) {
  const [editing, setEditing] = useState(false);
  const [url, setUrl] = useState(sitemapUrl);

  return (
    <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
      {editing ? (
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          onBlur={() => setEditing(false)}
          onKeyDown={e => e.key === 'Enter' && setEditing(false)}
          autoFocus
          style={{ flex: 1, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, padding: '4px 10px', fontSize: 13, color: 'white', fontFamily: "'DM Mono', monospace", outline: 'none' }}
        />
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ flex: 1, fontSize: 13, color: '#93c5fd', fontFamily: "'DM Mono', monospace", textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {url}
        </a>
      )}
      <button onClick={() => setEditing(!editing)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#9ca3af', cursor: 'pointer' }}>
        {editing ? 'Done' : 'Edit URL'}
      </button>
      <CopyButton text={url} />
      <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 600 }}>{totalUrls.toLocaleString()} URLs</span>
    </div>
  );
}

function PillBadge({ count, label, color, bg }: { count: number; label: string; color: string; bg: string }) {
  if (count === 0) return null;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: bg, borderRadius: 99, padding: '5px 14px' }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: color, display: 'inline-block' }} />
      <span style={{ fontSize: 13, fontWeight: 700, color }}>{count} {label}</span>
    </div>
  );
}

function IssueRow({ issue }: { issue: Issue }) {
  const [expanded, setExpanded] = useState(false);
  const sev = SEV_CONFIG[issue.severity] || SEV_CONFIG.info;
  const urls = issue.affectedUrls || [];

  return (
    <div style={{ borderBottom: '1px solid var(--border-2)' }}>
      <div
        onClick={() => urls.length > 0 && setExpanded(!expanded)}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, cursor: urls.length > 0 ? 'pointer' : 'default' }}
      >
        {/* Left: Problem */}
        <div style={{ padding: '14px 16px', borderRight: '1px solid var(--border-2)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: sev.bg, border: `1px solid ${sev.border}`, borderRadius: 6, padding: '2px 8px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: sev.dot, display: 'inline-block' }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: sev.color }}>{sev.label}</span>
            </div>
            <span style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6 }}>{issue.problem}</span>
          </div>
          {urls.length > 0 && (
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, marginLeft: 0 }}>
              {expanded ? '- Hide' : `${urls.length} URL${urls.length !== 1 ? 's' : ''} affected - click to show`}
            </div>
          )}
        </div>
        {/* Right: Fix */}
        <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <span style={{ fontSize: 13, color: '#16a34a', lineHeight: 1.6, flex: 1 }}>{issue.fix}</span>
          <CopyButton text={issue.fix} />
          <span style={{ fontSize: 10, fontWeight: 600, color: EFFORT_COLOR[issue.effort] || 'var(--muted)', background: 'var(--border-2)', borderRadius: 5, padding: '3px 8px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {EFFORT_LABEL[issue.effort] || issue.effort}
          </span>
        </div>
      </div>
      {/* Expanded URLs */}
      {expanded && urls.length > 0 && (
        <div style={{ background: 'var(--border-2)', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
            <CopyButton text={urls.join('\n')} label={`Copy all ${urls.length} URLs`} />
          </div>
          {urls.map((u, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: "'DM Mono', monospace", flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u}</span>
              <CopyButton text={u} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Results({ data, onReset }: { data: AnalysisResult; onReset: () => void }) {
  const { report, totalUrls, sitemapUrl } = data;
  const issues = report.issues || [];
  const criticalCount = issues.filter(i => i.severity === 'critical').length;
  const warningCount = issues.filter(i => i.severity === 'warning').length;
  const improvementCount = issues.filter(i => i.severity === 'opportunity').length;
  const [activeTab, setActiveTab] = useState<Tab>('all');

  const filtered = activeTab === 'all' ? issues : issues.filter(i => i.severity === activeTab);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: issues.length },
    { key: 'critical', label: 'Errors', count: criticalCount },
    { key: 'warning', label: 'Warnings', count: warningCount },
    { key: 'opportunity', label: 'Improvements', count: improvementCount },
  ];

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 20px 80px' }}>

      {/* Header: domain + New analysis button */}
      <div className="anim-fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid var(--border)', marginBottom: 16, gap: 16, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>{data.domain}</div>
        <button onClick={onReset} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 16px', fontSize: 13, color: 'var(--muted)', cursor: 'pointer', fontFamily: 'inherit' }}>
          New analysis
        </button>
      </div>

      {/* Dark bar: sitemap URL, edit, copy, URL count */}
      <SitemapBar sitemapUrl={sitemapUrl} totalUrls={totalUrls} />

      {/* Pills row */}
      <div className="anim-fade-up anim-fade-up-1" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
        <PillBadge count={criticalCount} label="Errors" color="#dc2626" bg="#fef2f2" />
        <PillBadge count={warningCount} label="Warnings" color="#d97706" bg="#fffbeb" />
        <PillBadge count={improvementCount} label="Improvements" color="#2563eb" bg="#eff6ff" />
        {report.summary && (
          <span style={{ fontSize: 13, color: 'var(--muted)', marginLeft: 4 }}>{report.summary}</span>
        )}
      </div>

      {/* Tabbed two-column table */}
      {issues.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-2" style={{ marginBottom: 24 }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid var(--border)' }}>
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                style={{
                  background: 'none', border: 'none', borderBottom: activeTab === t.key ? '2px solid var(--accent)' : '2px solid transparent',
                  padding: '10px 18px', fontSize: 13, fontWeight: activeTab === t.key ? 700 : 400,
                  color: activeTab === t.key ? 'var(--ink)' : 'var(--muted)', cursor: 'pointer', marginBottom: -2,
                }}
              >
                {t.label} ({t.count})
              </button>
            ))}
          </div>
          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
            <div style={{ padding: '8px 16px', fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderRight: '1px solid var(--border-2)' }}>Problem</div>
            <div style={{ padding: '8px 16px', fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Fix</div>
          </div>
          {/* Rows */}
          {filtered.map((issue, i) => (
            <IssueRow key={i} issue={issue} />
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: '24px 16px', textAlign: 'center', fontSize: 13, color: 'var(--muted)' }}>No issues in this category.</div>
          )}
        </div>
      )}

      {/* Missing Pages table */}
      {report.missingPages.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-3" style={{ marginBottom: 24 }}>
          <div className="card-header">
            <span style={{ fontWeight: 700, fontSize: 15 }}>Missing Pages</span>
            <span className="tag tag-blue" style={{ marginLeft: 'auto' }}>Traffic opportunity</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr>
                  {['Suggested URL', 'Suggested Title'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px 14px', fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {report.missingPages.map((p, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--border-2)', borderBottom: '1px solid var(--border-2)' }}>
                    <td style={{ padding: '10px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span className="url-chip" style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.suggestedUrl}</span>
                        <CopyButton text={p.suggestedUrl} />
                      </div>
                    </td>
                    <td style={{ padding: '10px 14px' }}>
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
      )}

      {/* Priority Action Plan */}
      {report.topActions.length > 0 && (
        <div className="card anim-fade-up anim-fade-up-4" style={{ marginBottom: 20 }}>
          <div className="card-header">
            <span style={{ fontWeight: 700, fontSize: 15 }}>Priority Action Plan</span>
            <span className="tag tag-red" style={{ marginLeft: 'auto' }}>Do these first</span>
          </div>
          <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0 }}>
            {report.topActions.map((action, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: i === 0 ? 'var(--accent-light)' : 'var(--border-2)', borderRadius: 8, border: i === 0 ? '1px solid rgba(45,91,227,0.2)' : '1px solid transparent' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: i === 0 ? 'var(--accent)' : 'var(--border)', color: i === 0 ? 'white' : 'var(--muted)', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                <span style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6, flex: 1 }}>{action}</span>
                <CopyButton text={action} />
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
