'use client';

import React from 'react';
import Link from 'next/link';
import { Star, GitFork, GitPullRequest, Terminal, ArrowRight, CheckCircle2, Radio, Code2, ShieldCheck, Heart } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Radio size={12} className="text-purple-400" />
            <span>GitHub Open Source Radar</span>
          </div>
          <h2 className="landing-section-heading">Engineered for Open-Source Maintainers & Hackers</h2>
          <p className="landing-section-sub">
            Track hyper-growth GitHub repositories, self-hosted alternatives, MIT/Apache permissive libraries, and decentralized AI weights.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Star Velocity */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box purple">
                <Star size={20} />
              </div>
              <span className="bento-badge">Real-Time Star Velocity</span>
            </div>
            <h3 className="bento-card-title">GitHub Trending Pulse & Breakout Radar</h3>
            <p className="bento-card-desc">
              Discover breakout repos before they hit the global trending charts. Real-time fork ratios, commit cadence, and maintainer activity.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">450k+</span>
                <span className="pill-lbl">Stars Tracked</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">1,800+</span>
                <span className="pill-lbl">Verified Repos</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">100% Free</span>
                <span className="pill-lbl">Open Source</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Self-Hosted Docker */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box cyan">
                <Terminal size={20} />
              </div>
              <span className="bento-badge">Docker Compose</span>
            </div>
            <h3 className="bento-card-title">Self-Hosted Stacks & Alternatives</h3>
            <p className="bento-card-desc">
              Replace expensive proprietary SaaS with self-hosted, 1-click Docker alternatives.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> 1-Click Docker Compose</span>
              <span className="check-item"><CheckCircle2 size={13} /> Zero Telemetry</span>
            </div>
          </div>

          {/* Bento Card 3: Permissive Licensing */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <ShieldCheck size={20} />
              </div>
              <span className="bento-badge">MIT / Apache 2.0</span>
            </div>
            <h3 className="bento-card-title">Permissive Commercial Licenses</h3>
            <p className="bento-card-desc">
              Verified MIT, Apache 2.0, and BSD licenses safe for enterprise commercial products.
            </p>
          </div>

          {/* Bento Card 4: Open AI Models & Weights */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box blue">
                <Code2 size={20} />
              </div>
              <span className="bento-badge">HuggingFace & GitHub</span>
            </div>
            <h3 className="bento-card-title">Open Weights AI & Local Inference Frameworks</h3>
            <p className="bento-card-desc">
              Permissive LLMs, vision backbones, and local inference runtimes you can run on your own hardware without cloud dependencies.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">vLLM Inference</span>
              <span className="tag-chip">Llama.cpp</span>
              <span className="tag-chip">Ollama Native</span>
              <span className="tag-chip">Transformers.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Heart size={12} className="text-purple-400" />
            <span>Open Source Radar Standard</span>
          </div>
          <h2 className="landing-section-heading">How OpenSourceRadar Curates Repos</h2>
          <p className="landing-section-sub">
            We evaluate repository health, active maintenance cadence, and documentation quality.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Star Velocity & Commit Audit</h4>
            <p className="step-desc">
              We verify organic growth patterns, PR turnaround speeds, and issue responsiveness.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">License & Security Scan</h4>
            <p className="step-desc">
              We check SPDX license compliance, vulnerability advisories, and dependency freshness.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Maintainer Spotlight</h4>
            <p className="step-desc">
              Verified repositories get 1-click clone snippets and spotlighting to 95,000+ developers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ FEATURE YOUR OSS REPO</span>
          <h3 className="launch-cta-heading">Feature Your Open-Source Project to 95,000+ GitHub Developers</h3>
          <p className="launch-cta-desc">
            Gain immediate GitHub stars, new community contributors, and real-world production adoption.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Submit Open Source Project <ArrowRight size={15} />
            </Link>
            <Link href="/category/open-source" className="launch-cta-secondary">
              Browse Radar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
