# StreetKnits Website

A modern, responsive web application for **StreetKnits** — a humanitarian knitting charity dedicated to warming bodies and hearts. Founded in 2013 by Silke Feltz and based in Norman, Oklahoma, StreetKnits unites knitters to keep neighbors safe and warm during winter and help community members discover the mindful craft of knitting.

As part of an Honors English service-learning course during my spring semester of freshman year, I worked with Streetknits, a nonprofit addressing homelessness through hand-knitted goods. I modernized the website to be more welcoming and interactive.

---

## Features

- **Cozy & Responsive Design**: Custom fluid layout optimized for mobile phones, tablets, and desktop screens.
- **Home & Mission**: Highlights the story and mission of StreetKnits with quick links to donate and get in touch.
- **Donation Tracker & Support**: Detailed history of knitted items donated to shelters across Minneapolis, Green Bay, and Norman from 2014 through 2025, alongside Venmo contribution info.
- **Community Contact & Social**: Seamless email contact and responsive Facebook community timeline integration.
- **Optimized Typography**: Self-hosted `Typewriter-Serial-Regular` font loaded via `next/font/local` with zero layout shift.
- **Vercel Ready**: Standard Next.js configuration pre-tuned for seamless deployment on Vercel or any Node.js hosting platform.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS with modern custom properties, fluid `clamp()` typography, and responsive media queries
- **Deployment**: [Vercel](https://vercel.com/)

---

## Project Structure

```text
streetknits_website/
├── public/                     # Vector illustrations, logo, and font files
│   ├── StreetKnitsLogo4.svg    # StreetKnits brand mark
│   ├── cloud1.svg - cloud4.svg # Decorative cloud artwork
│   ├── Typewriter-Serial-*.ttf # Self-hosted typewriter typography
│   └── ...
├── src/
│   ├── app/
│   │   ├── contact/page.tsx    # Contact & Facebook community page
│   │   ├── donate/page.tsx     # Donations history and support page
│   │   ├── globals.css         # Design tokens, typography, and responsive styles
│   │   ├── layout.tsx          # Root layout, metadata, and font definitions
│   │   └── page.tsx            # Home & About Us page
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive navigation bar with mobile toggle
│   │   └── Footer.tsx          # Site footer and charity credits
│   └── lib/
│       └── assets.ts           # Dynamic asset path resolution utility
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and project scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vercel.json                 # Vercel deployment configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: `>= 20.0.0`
- **npm**: `>= 10.0.0`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/niimme/streetknits_website.git
   cd streetknits_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Production Build

Create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

### Linting

Verify code quality with ESLint:

```bash
npm run lint
```

---

## Deployment

The project includes [`vercel.json`](vercel.json) and is ready for one-click deployment on [Vercel](https://vercel.com/):

1. Import the repository into your Vercel dashboard.
2. The framework will automatically be detected as **Next.js**.
3. Deploy!

---

## Credits

- **Charity**: StreetKnits (Founded by Silke Feltz, Norman, OK)
- **Website Redesign**: Nicholas Immenschuh
