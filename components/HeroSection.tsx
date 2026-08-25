'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GitPullRequest, GitFork, Star, Terminal, Copy, Check, Search, ShieldCheck, ArrowRight, ArrowUpRight, Radio, Code2, Users } from 'lucide-react';

const TRENDING_REPOS = [
  {
    id: 'vllm',
    repo: 'vllm-project/vllm',
    stars: '42.8k',
    forks: '5.9k',
    license: 'Apache 2.0',
    tagline: 'High-throughput and memory-efficient LLM inference engine with PagedAttention.',
    latestCommit: 'feat: add speculative decoding support for Qwen 2.5 (2m ago)',
    cloneCmd: 'git clone https://github.com/vllm-project/vllm.git',
  },
  {
    id: 'shadcn',
    repo: 'shadcn/ui',
    stars: '84.1k',
    forks: '7.8k',
    license: 'MIT',
    tagline: 'Beautifully designed components that you can copy and paste into your apps.',
    latestCommit: 'fix(registry): support dark-mode variant tokens in Tailwind v4 (14m ago)',
    cloneCmd: 'npx shadcn@latest init',
  },
  {
    id: 'calcom',
    repo: 'calcom/cal.com',
    stars: '34.6k',
    forks: '8.2k',
    license: 'AGPLv3',
    tagline: 'Scheduling infrastructure for everyone. The open source Calendly alternative.',
    latestCommit: 'feat(workflows): AI meeting summary webhook triggers (45m ago)',
    cloneCmd: 'git clone https://github.com/calcom/cal.com.git',
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
      <div className="osradar-ambient-glow" />

      <div className="osradar-hero-grid">
        {/* Left: Open Source Radar Value Prop */}
        <div className="osradar-hero-content">
          <div className="osradar-badge">
            <Radio size={14} className="text-purple-400 animate-pulse" />
            <span>GitHub Trending & Open Source Radar • 2026</span>
            <span className="osradar-badge-pill">LIVE</span>
          </div>

          <h1 className="osradar-title">
            The GitHub Radar for <span className="osradar-gradient-text">Trending Repos</span>, Self-Hosted Stacks & Open AI.
          </h1>

          <p className="osradar-lead">
            Tracking hyper-growth GitHub repositories, self-hosted software, permissive open-source libraries, and developer-first frameworks.
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
              placeholder="Search 1,800+ open-source repos, MIT tools, self-hosted..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="osradar-search-input"
            />
            <button type="submit" className="osradar-search-btn">
              Explore Radar
            </button>
          </form>

          {/* Dual Action CTAs */}
          <div className="osradar-cta-row">
            <Link href="/category/open-source" className="osradar-primary-btn">
              Explore 1,800+ Repos <ArrowRight size={15} />
            </Link>
            <Link href="/submit" className="osradar-secondary-btn">
              Submit Open Source Project
            </Link>
          </div>

          {/* Social Proof */}
          <div className="osradar-social-proof">
            <div className="osradar-avatar-stack">
              <span className="os-avatar av-1">⭐️</span>
              <span className="os-avatar av-2">🐙</span>
              <span className="os-avatar av-3">💻</span>
              <span className="os-avatar av-4">✨</span>
            </div>
            <div className="osradar-proof-text">
              <div className="osradar-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="osradar-rating">4.9/5.0</span>
              </div>
              <span className="osradar-subtext">Starred by 95,000+ open source maintainers and hackers</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="osradar-tags-row">
            <span className="osradar-tags-label">Licenses:</span>
            <div className="osradar-tags-list">
              <Link href="/category/open-source" className="osradar-tag-pill">
                <Code2 size={12} /> MIT Permissive
              </Link>
              <Link href="/category/developer-tools" className="osradar-tag-pill">
                <GitPullRequest size={12} /> Apache 2.0
              </Link>
              <Link href="/category/productivity" className="osradar-tag-pill">
                <Terminal size={12} /> Self-Hosted
              </Link>
              <Link href="/category/ai" className="osradar-tag-pill">
                <Star size={12} /> Open LLMs
              </Link>
            </div>
          </div>

          {/* OSS Metrics */}
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
              <span className="osradar-metric-val">100% Free</span>
              <span className="osradar-metric-desc">Open Source</span>
            </div>
          </div>
        </div>

        {/* Right: Trending GitHub Repo Showcase Card */}
        <div className="osradar-spotlight-card">
          <div className="spotlight-card-header">
            <div className="spotlight-title-group">
              <Star size={15} className="fill-amber-400 text-amber-400" />
              <span className="spotlight-header-title">GitHub Trending Radar</span>
            </div>
            <span className="spotlight-license-pill">{currentRepo.license}</span>
          </div>

          {/* Repo Switcher Tabs */}
          <div className="spotlight-tabs-row">
            {TRENDING_REPOS.map((repo, idx) => (
              <button
                key={repo.id}
                onClick={() => setActiveRepoIndex(idx)}
                className={`spotlight-tab-btn ${activeRepoIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {repo.repo.split('/')[1]}
              </button>
            ))}
          </div>

          {/* Repo Details Box */}
          <div className="spotlight-repo-box">
            <div className="repo-top-row">
              <span className="repo-full-name">{currentRepo.repo}</span>
              <div className="repo-stats-pills">
                <span className="stat-chip">
                  <Star size={11} className="fill-amber-400 text-amber-400" />
                  {currentRepo.stars}
                </span>
                <span className="stat-chip">
                  <GitFork size={11} />
                  {currentRepo.forks}
                </span>
              </div>
            </div>
            <p className="repo-tagline-text">{currentRepo.tagline}</p>
          </div>

          {/* Live Commit Stream preview */}
          <div className="spotlight-commit-box">
            <div className="commit-box-top">
              <span className="commit-dot-pulse" />
              <span className="commit-label">LIVE GIT ACTIVITY</span>
            </div>
            <code className="commit-text">{currentRepo.latestCommit}</code>
          </div>

          {/* Quick Clone Bar */}
          <div className="spotlight-clone-bar">
            <span className="clone-prompt">$</span>
            <code className="clone-cmd-text">{currentRepo.cloneCmd}</code>
            <button 
              onClick={handleCopy} 
              className="clone-copy-btn"
              title="Copy Clone Command"
              type="button"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Card Footer */}
          <div className="spotlight-card-footer">
            <span className="spotlight-verified-text">✓ Verified Permissive OSS</span>
            <Link href="/submit" className="spotlight-submit-link">
              Submit Repo <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
