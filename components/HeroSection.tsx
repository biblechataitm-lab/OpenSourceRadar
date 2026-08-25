'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GitBranch, Star, GitFork, Shield, Copy, Check, Search, Terminal, ArrowUpRight, Sparkles, Code2 } from 'lucide-react';

const TRENDING_REPOS = [
  {
    id: 'vllm',
    repo: 'vllm-project/vllm',
    desc: 'High-throughput and memory-efficient LLM inference and serving engine.',
    stars: '42.8k',
    forks: '5.6k',
    license: 'Apache 2.0',
    cloneCmd: 'git clone https://github.com/vllm-project/vllm.git',
    latestCommit: 'feat(kernel): add flashinfer FP8 tensor core acceleration',
    language: 'Python • C++',
  },
  {
    id: 'shadcn',
    repo: 'shadcn/ui',
    desc: 'Beautifully designed components that you can copy and paste into your apps.',
    stars: '78.9k',
    forks: '7.2k',
    license: 'MIT License',
    cloneCmd: 'npx shadcn@latest init',
    latestCommit: 'fix(dialog): improve portal accessibility & focus trap',
    language: 'TypeScript • Tailwind',
  },
  {
    id: 'calcom',
    repo: 'calcom/cal.com',
    desc: 'Scheduling infrastructure for absolutely everyone. Self-hostable Calendly alternative.',
    stars: '34.2k',
    forks: '8.1k',
    license: 'AGPL-3.0',
    cloneCmd: 'git clone https://github.com/calcom/cal.com.git',
    latestCommit: 'feat(ai): integrate automated booking reschedule agent',
    language: 'TypeScript • Next.js',
  },
];

export function HeroSection() {
  const [activeRepoIndex, setActiveRepoIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const currentRepo = TRENDING_REPOS[activeRepoIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentRepo.cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="osradar-hero">
      <div className="osradar-hero-grid">
        {/* Left: Open Source Value Prop */}
        <div className="osradar-hero-content">
          <div className="osradar-badge">
            <span className="osradar-pulse-dot" />
            <span>Real-Time GitHub Trending Radar • 2026</span>
          </div>

          <h1 className="osradar-title">
            The Live Radar for <span className="osradar-gradient-text">Permissive Open Source</span> & GitHub Repos.
          </h1>

          <p className="osradar-lead">
            Track fastest-growing GitHub repositories, self-hostable SaaS alternatives, open-weights AI architectures, and developer-first libraries.
          </p>

          {/* Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="osradar-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="osradar-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search 1,800+ open source repos, self-hosted tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="osradar-search-input"
            />
            <button type="submit" className="osradar-search-btn">
              Scan Repos
            </button>
          </form>

          {/* OSS Category Tags */}
          <div className="osradar-tags-row">
            <span className="osradar-tags-label">Licenses:</span>
            <div className="osradar-tags-list">
              <Link href="/category/developer-tools" className="osradar-tag-pill">
                <Shield size={12} /> MIT Permissive
              </Link>
              <Link href="/category/ai" className="osradar-tag-pill">
                <Code2 size={12} /> Open LLMs
              </Link>
              <Link href="/category/productivity" className="osradar-tag-pill">
                <GitBranch size={12} /> Self-Hosted
              </Link>
              <Link href="/category/automation" className="osradar-tag-pill">
                <Sparkles size={12} /> Fast Growing
              </Link>
            </div>
          </div>

          {/* GitHub Radar Metrics */}
          <div className="osradar-metrics-strip">
            <div className="osradar-metric-box">
              <span className="osradar-metric-val">450k+</span>
              <span className="osradar-metric-desc">Stars Indexed</span>
            </div>
            <div className="osradar-metric-divider" />
            <div className="osradar-metric-box">
              <span className="osradar-metric-val">1,800+</span>
              <span className="osradar-metric-desc">Verified Repos</span>
            </div>
            <div className="osradar-metric-divider" />
            <div className="osradar-metric-box">
              <span className="osradar-metric-val">100%</span>
              <span className="osradar-metric-desc">Open Source</span>
            </div>
          </div>
        </div>

        {/* Right: Live GitHub Repository Showcase Card */}
        <div className="osradar-repo-card">
          <div className="repo-card-header">
            <div className="repo-title-group">
              <GitBranch size={16} className="text-purple-400" />
              <span className="repo-header-title">Trending GitHub Spotlight</span>
            </div>
            <span className="repo-license-badge">{currentRepo.license}</span>
          </div>

          {/* Repo Switcher Tabs */}
          <div className="repo-switch-tabs">
            {TRENDING_REPOS.map((r, idx) => (
              <button
                key={r.id}
                onClick={() => setActiveRepoIndex(idx)}
                className={`repo-tab-btn ${activeRepoIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {r.repo.split('/')[1]}
              </button>
            ))}
          </div>

          {/* Repo Details Window */}
          <div className="repo-details-box">
            <div className="repo-name-row">
              <h3 className="repo-full-name">{currentRepo.repo}</h3>
              <div className="repo-stats-pills">
                <span className="repo-stat-item stars">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  {currentRepo.stars}
                </span>
                <span className="repo-stat-item forks">
                  <GitFork size={12} />
                  {currentRepo.forks}
                </span>
              </div>
            </div>

            <p className="repo-desc-text">{currentRepo.desc}</p>

            <div className="repo-commit-feed">
              <span className="commit-pulse-dot" />
              <span className="commit-text">{currentRepo.latestCommit}</span>
            </div>
          </div>

          {/* Copyable Git Clone Bar */}
          <div className="repo-clone-bar">
            <div className="clone-bar-left">
              <Terminal size={13} className="text-purple-400" />
              <code className="clone-code-snippet">{currentRepo.cloneCmd}</code>
            </div>
            <button 
              onClick={handleCopy} 
              className="clone-copy-btn"
              title="Copy Clone Command"
              type="button"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Clone'}</span>
            </button>
          </div>

          {/* Footer */}
          <div className="repo-card-footer">
            <span className="repo-lang-tag">Stack: {currentRepo.language}</span>
            <Link href="/submit" className="repo-submit-link">
              Submit Repository <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
