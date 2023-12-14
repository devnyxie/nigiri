import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="footer mt-auto p-2">
      <div className="d-flex">
        <Link
          href="https://github.com/devnyxie"
          target="_blank"
          className="bg-white p-2 rounded-2 me-2"
        >
          <Image src="./github_rounded.svg" width={25} height={25} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/talmkg/"
          target="_blank"
          className="bg-white p-2 rounded-2"
        >
          <Image src="./linkedin.svg" width={25} height={25} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
