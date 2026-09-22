import React from 'react';

interface FooterProps {
  backgroundColor?: string;
}

export default function Footer({ backgroundColor }: FooterProps) {
  return (
    <footer
      className="site-footer"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="footer-content">
        <p className="footer-credit">
          StreetKnits &bull; Norman, Oklahoma &bull; Warming bodies and hearts since 2013
        </p>
        <p className="footer-subcredit">
          Website redesign by Nicholas Immenschuh
        </p>
      </div>
    </footer>
  );
}
