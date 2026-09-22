import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

const typewriter = localFont({
  src: [
    {
      path: '../../public/Typewriter-Serial-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Typewriter-Serial-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Typewriter-Serial-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-typewriter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'StreetKnits — Warming Bodies & Hearts',
  description:
    'StreetKnits is a humanitarian knitting charity dedicated to keeping neighbors safe and warm during winter through handmade knitwear and community crafting.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={typewriter.variable}>
      <body>{children}</body>
    </html>
  );
}

