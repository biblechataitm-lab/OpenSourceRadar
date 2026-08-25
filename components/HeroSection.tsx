'use client';

import React from 'react';
import Hero32 from '@/components/ui/hero-32';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero32
        logoText="OpenSourceRadar"
        title={
          <>
            The Star Velocity Radar for <br />
            <span className="italic text-purple-400">Open-Source</span> & Self-Hosted Stacks.
          </>
        }
        subtitle={
          <>
            Discover breakout GitHub repositories, self-hosted Docker alternatives, and permissive libraries <br className="hidden md:block" />
            tracked across 450,000+ stars.
          </>
        }
        primaryActionText="Explore 1,800+ Repos"
        loginText="Submit Repo"
      />
    </div>
  );
}
