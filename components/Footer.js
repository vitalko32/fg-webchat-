import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <Link href="/about">
        <a className="mx-2">About</a>
      </Link>
      <Link href="/privacy">
        <a className="mx-2">Privacy</a>
      </Link>
      <Link href="/contact">
        <a className="mx-2">Contact Us</a>
      </Link>
    </footer>
  );
};

export default Footer;