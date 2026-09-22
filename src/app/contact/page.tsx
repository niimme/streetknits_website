import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAssetPath } from '@/lib/assets';

export default function ContactPage() {
  return (
    <div id="contactPageContainer">
      <Navbar />

      <main className="contact-main-section">
        <header className="contact-header-area">
          <h1 className="contact-main-heading">Contact StreetKnits</h1>
          <p className="contact-subheading">
            We would love to hear from you — whether you want to donate, volunteer, or say hello!
          </p>
        </header>

        <div className="contact-clouds-grid">
          {/* Cloud 1: Thank You & Welcome */}
          <section className="cloud-card" aria-label="Welcome message">
            <Image
              src={getAssetPath('/cloud2.svg')}
              alt="Cloud shape"
              width={540}
              height={340}
              className="cloud-svg-background"
              priority
            />
            <div className="cloud-card-inner">
              <span className="cloud-badge cloud-badge-coral">Welcome</span>
              <h2 className="cloud-card-heading cloud-heading-coral">
                Warm Welcome
              </h2>
              <p className="cloud-card-text">
                Thank you for visiting StreetKnits! If you have questions about
                volunteering, donating handmade knitwear, or our mission, we would
                love to hear from you.
              </p>
            </div>
          </section>

          {/* Cloud 2: Email (Fixed vertical stacking, mailto link) */}
          <section className="cloud-card" aria-label="Email contact information">
            <Image
              src={getAssetPath('/cloud3.svg')}
              alt="Cloud shape"
              width={540}
              height={340}
              className="cloud-svg-background"
              priority
            />
            <div className="cloud-card-inner">
              <span className="cloud-badge cloud-badge-lavender">Direct Email</span>
              <h2 className="cloud-card-heading cloud-heading-lavender">
                Send Us an Email
              </h2>
              <a
                href="mailto:streetknits2013@gmail.com"
                className="cloud-email-btn"
                title="Send an email to StreetKnits"
              >
                <span className="email-btn-icon" aria-hidden="true">✉</span>
                <span className="email-btn-text">streetknits2013@gmail.com</span>
              </a>
            </div>
          </section>

          {/* Cloud 3: Facebook Feed Intro */}
          <section className="cloud-card" aria-label="Facebook community intro">
            <Image
              src={getAssetPath('/cloud1.svg')}
              alt="Cloud shape"
              width={540}
              height={340}
              className="cloud-svg-background"
            />
            <div className="cloud-card-inner">
              <span className="cloud-badge cloud-badge-pink">Community</span>
              <h2 className="cloud-card-heading cloud-heading-pink">
                Facebook Updates
              </h2>
              <p className="cloud-card-text">
                Explore our live Facebook feed below! Like, comment, and share
                our latest knitting workshops and winter drives with friends.
              </p>
            </div>
          </section>

          {/* Cloud 4: Facebook Feed Widget Card */}
          <div className="facebook-feed-cloud-wrapper">
            <section
              className="facebook-feed-container"
              aria-label="Facebook live feed"
            >
              <h2 className="facebook-feed-title">StreetKnits Facebook Feed</h2>
              <iframe
                title="StreetKnits Facebook Feed"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.streetknits.org&tabs=timeline&width=385&height=750&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                className="facebook-iframe-responsive"
                loading="lazy"
                allow="encrypted-media"
              />
              <a
                href="https://www.facebook.com/www.streetknits.org"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-fallback-link"
              >
                Open StreetKnits on Facebook &rarr;
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer backgroundColor="var(--color-sky-blue)" />
    </div>
  );
}