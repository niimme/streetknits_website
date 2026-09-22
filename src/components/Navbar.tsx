'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getAssetPath } from '@/lib/assets';

export default function Navbar() {
  const pathname = usePathname();

  // Normalize path
  const currentPath = pathname ? pathname.replace(/^\/streetknits_website/, '') || '/' : '/';

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    return path !== '/' && currentPath.startsWith(path);
  };

  return (
    <header className="navbar-ribbon-header">
      <div className="navbar-ribbon-wrapper">
        {/* Notched ribbon banner tail background */}
        <div className="navbar-ribbon-tail-bg" aria-hidden="true" />

        {/* Sky-blue foreground pill */}
        <nav className="navbar-pill" aria-label="Main navigation">
          <div className="navbar-logo-container">
            <Link href="/" className="navbar-brand-link">
              <Image
                src={getAssetPath('/StreetKnitsLogo4.svg')}
                alt="StreetKnits Logo"
                className="navbar-logo-image"
                width={44}
                height={44}
                priority
              />
              <span className="navbar-logo-text">StreetKnits</span>
            </Link>
          </div>

          <div className="navbar-links">
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/donate"
              className={`nav-link ${isActive('/donate') ? 'active' : ''}`}
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
