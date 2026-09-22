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
              <p className="donate-cloud-p1">
                We are a community of knitters who want to help keep people safe
                and warm during the winter. Would you like to join us? Donating
                knitted goods is a great place to start!
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
              <p className="donate-cloud-p2">
                <Link href="/contact" style={{ textDecoration: 'underline' }}>
                  Send StreetKnits an email
                </Link>{' '}
                if you would like to mail knitwear or yarn. If you prefer to
                donate in another way, monetary contributions help us buy yarn,
                needles, and organize local community knitting workshops.
              </p>
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
              <h3 className="venmo-callout-title">Donate via Venmo</h3>
              <p className="venmo-callout-description">
                Support our seasonal yarn and workshop funds directly on Venmo:{' '}
                <strong>@streetknits</strong> or contact us for electronic giving options.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer backgroundColor="var(--color-meadow-light)" />
    </div>
  );
}