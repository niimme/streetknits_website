'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getAssetPath } from '@/lib/assets';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Normalize path to account for GitHub Pages subpath if present
  const currentPath = pathname ? pathname.replace(/^\/streetknits_website/, '') || '/' : '/';

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    return path !== '/' && currentPath.startsWith(path);
  };

  return (
    <header className="site-header">
      <nav className="navbar-container" aria-label="Main navigation">
        <div className="navbar-logo-container">
          <Link href="/" className="navbar-brand-link">
            <Image
              src={getAssetPath('/StreetKnitsLogo4.svg')}
              alt="StreetKnits Logo"
              className="navbar-logo-image"
              width={52}
              height={52}
              priority
            />
            <span className="navbar-logo-text">StreetKnits</span>
          </Link>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span className={`menu-icon-bar ${menuOpen ? 'bar-top-open' : ''}`} />
          <span className={`menu-icon-bar ${menuOpen ? 'bar-mid-open' : ''}`} />
          <span className={`menu-icon-bar ${menuOpen ? 'bar-bot-open' : ''}`} />
        </button>

        <div className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          <Link
            href="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/donate"
            className={`nav-link ${isActive('/donate') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
