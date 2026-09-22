import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAssetPath } from '@/lib/assets';

interface DonationRecord {
  year: string;
  name: string;
  items: string;
}

const DONATION_RECORDS: DonationRecord[] = [
  { year: '2014', name: 'Simpson Housing Services (Minneapolis, MN)', items: '56' },
  { year: '2015', name: 'New Community Shelter (Green Bay, WI)', items: '185' },
  { year: '2016', name: 'New Community Shelter (Green Bay, WI)', items: '262' },
  { year: '2017', name: 'New Community Shelter (Green Bay, WI)', items: '262' },
  { year: '2018', name: 'Food and Shelter (Norman, OK)', items: '285' },
  { year: '2019', name: 'Food and Shelter (Norman, OK)', items: '338' },
  { year: '2020', name: 'Food and Shelter (Norman, OK)', items: '354' },
  { year: '2021', name: 'Food and Shelter (Norman, OK)', items: '408' },
  { year: '2022', name: 'Food and Shelter (Norman, OK)', items: '416' },
  { year: '2023', name: 'Food and Shelter (Norman, OK)', items: '742' },
  { year: '2024', name: 'Food and Shelter (Norman, OK)', items: '362' },
  { year: '2025', name: 'Food and Shelter (Norman, OK)', items: 'In Progress' },
];

export default function DonatePage() {
  const bgImage = getAssetPath('/donatePageBackground58.svg');

  return (
    <div
      id="donatePageContainer"
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      <Navbar />

      <main className="donate-main-section">
        <header className="donate-header-area">
          <h1 className="donate-main-heading">Support StreetKnits</h1>
        </header>

        {/* Introduction Clouds */}
        <div className="donate-intro-clouds">
          <section className="cloud-card" aria-label="Join our knitting community">
            <Image
              src={getAssetPath('/cloud1.svg')}
              alt="Cloud shape"
              width={540}
              height={340}
              className="cloud-svg-background"
              priority
            />
            <div className="cloud-card-inner">
              <span className="cloud-badge cloud-badge-coral">Community</span>
              <h2 className="cloud-card-heading cloud-heading-coral">
                Join Our Mission
              </h2>
              <p className="cloud-card-text">
                We are a community of knitters keeping neighbors safe and warm
                every winter. Donating handmade knitwear is a wonderful place to
                start!
              </p>
            </div>
          </section>

          <section className="cloud-card" aria-label="How to donate supplies or funds">
            <Image
              src={getAssetPath('/cloud2.svg')}
              alt="Cloud shape"
              width={540}
              height={340}
              className="cloud-svg-background"
              priority
            />
            <div className="cloud-card-inner">
              <span className="cloud-badge cloud-badge-teal">Support</span>
              <h2 className="cloud-card-heading cloud-heading-teal">
                Ways to Give
              </h2>
              <p className="cloud-card-text">
                Mail finished knitwear and yarn, or contribute directly to our
                needle and workshop supplies fund.
              </p>
              <div className="cloud-actions-group">
                <Link href="/contact" className="cloud-action-btn">
                  Mail Items &rarr;
                </Link>
                <a
                  href="https://account.venmo.com/u/streetknits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cloud-venmo-btn"
                  title="Donate via Venmo @streetknits"
                >
                  <span className="venmo-mini-v" aria-hidden="true">V</span>
                  <span>Venmo</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Hanging Sign Donations Record Card */}
        <div className="donate-sign-outer">
          <div className="sign-straps-row" aria-hidden="true">
            <div className="sign-strap sign-strap-left" />
            <div className="sign-strap sign-strap-right" />
          </div>

          <article className="sign-board-card">
            <h2 className="sign-board-title">Donation History</h2>

            <div className="table-responsive-wrapper">
              <table className="donations-table">
                <thead>
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Recipient Organization</th>
                    <th scope="col">Knitted Items</th>
                  </tr>
                </thead>
                <tbody>
                  {DONATION_RECORDS.map((record) => (
                    <tr key={record.year}>
                      <td className="year-cell">{record.year}</td>
                      <td>{record.name}</td>
                      <td className="items-cell">{record.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="venmo-callout-card">
              <div className="venmo-header-group">
                <div className="venmo-badge-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="currentColor"
                  >
                    <path d="M19.5 2c-.6 1.3-1.8 3.5-3.3 6.1-2 3.4-4.5 7.8-6.1 11.9h-4.8c1.3-3.2 3.4-7.5 5.5-11.4 1.5-2.8 2.6-4.9 3-6.6h5.7z" />
                  </svg>
                </div>
                <h3 className="venmo-callout-title">Donate via Venmo</h3>
              </div>
              <p className="venmo-callout-description">
                Support our seasonal yarn and workshop funds directly on Venmo:{' '}
                <strong>@streetknits</strong>. Every contribution helps us buy needles,
                yarn, and support shelter deliveries.
              </p>
              <div className="venmo-btn-container">
                <a
                  href="https://account.venmo.com/u/streetknits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-venmo-main"
                  id="venmoDonateButton"
                  aria-label="Donate to StreetKnits on Venmo"
                >
                  <span className="venmo-v-symbol" aria-hidden="true">V</span>
                  <span className="venmo-btn-label">Donate with Venmo @streetknits</span>
                  <span className="venmo-btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer backgroundColor="var(--color-meadow-light)" />
    </div>
  );
}