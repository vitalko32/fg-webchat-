import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
      <footer className="text-center py-4">
        <Link className="mx-2" href="/about">
          About
        </Link>
        <Link className="mx-2" href="/privacy">
          Privacy
        </Link>
        <Link className="mx-2" href="/contact">
          Contact Us
        </Link>
      </footer>
  );
};

export default Footer;
