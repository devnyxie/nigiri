import Link from 'next/link';
import { memo } from 'react';

const Footer = memo(function Footer() {
  return (
    <div className="footer small mt-auto p-2">
      <div className="d-flex justify-content-center">
        <Link
          href="/api/feed.xml"
          target="_blank"
          className="p-2 rounded-2 me-2 animated-link"
        >
          <div className='text'>RSS</div>
        </Link>
      </div>
    </div>
  );
});

export default Footer;