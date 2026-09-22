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
              <p className="cloud-text-welcome">
                Thank you for taking the time to visit our website, we really
                appreciate it. If you would like to contact StreetKnits, please
                email us and we will respond promptly.
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
              <h2 className="cloud-email-title">Email:</h2>
              <a
                href="mailto:streetknits2013@gmail.com"
                className="cloud-email-address"
                title="Send an email to StreetKnits"
              >
                streetknits2013@gmail.com
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
              <p className="cloud-text-facebook-intro">
                Check out the feed from our Facebook page down below. Feel free
                to like, comment, and share our latest knitting updates!
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