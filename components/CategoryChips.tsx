'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "Libraries & Frameworks",
    "path": "/category/libraries"
  },
  {
    "label": "Self-Hosted Apps",
    "path": "/category/self-hosted"
  },
  {
    "label": "AI & Data Science",
    "path": "/category/ai-oss"
  },
  {
    "label": "Developer Utilities",
    "path": "/category/utilities"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  const pathname = usePathname();

  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-list">
        {CATEGORIES.map((cat) => {
          const isActive =
            activeCategory
              ? cat.path.toLowerCase() === `/category/${activeCategory.toLowerCase()}`
              : pathname === cat.path;

          return (
            <Link
              key={cat.path}
              href={cat.path}
              className={`category-chip ${isActive ? 'active' : ''}`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
