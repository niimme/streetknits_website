import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAssetPath } from '@/lib/assets';

export default function HomePage() {
  const bgImage = getAssetPath('/homePageBackground39.svg');

  return (
    <div
      id="homePageContainer"
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      <Navbar />

      <main className="home-main-section">
        <article className="home-content-card">
          <section>
            <h1 className="home-title">About Us</h1>
            <p className="home-description">
              StreetKnits is a humanitarian knitting charity dedicated to warming
              bodies and hearts. Since 2013, StreetKnits is the passion and perpetual
              project of founder Silke Feltz, who aims not only to keep her neighbors
              warm, but also to help students, teachers, and members of the community
              to find their knitting zen. Currently, StreetKnits operates from Norman,
              Oklahoma.
            </p>

            <div className="home-cta-group">
              <Link href="/donate" className="btn-primary">
                Support & Donate
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer backgroundColor="var(--color-meadow-light)" />
    </div>
  );
}