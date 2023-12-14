import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Profile() {
  return (
    <div
      className="p-2 w-100 d-flex flex-column flex-md-row align-items-center justify-content-md-between"
      style={{}}
    >
      <img
        src="pfp.jpg"
        alt="Profile Image"
        className="pfp d-flex d-md-none"
        width={200}
      />
      <div className="">
        <div className="fw-bold" style={{ fontSize: '35px' }}>
          Tim Afanasiev
        </div>
        <div>Digital Craftsman (Developer / Designer)</div>
        <div id="socials" className="d-flex w-100 pt-2">
          <Link
            href="https://github.com/devnyxie"
            target="_blank"
            className="social-badge p-2 rounded-2 me-2 "
          >
            <Image src={`github_rounded.svg`} width={25} height={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/talmkg/"
            target="_blank"
            className="social-badge p-2 rounded-2"
          >
            <Image src={`linkedin.svg`} width={25} height={25} />
          </Link>
        </div>
      </div>
      <img
        src="pfp.jpg"
        alt="Profile Image"
        className="pfp d-none d-md-flex"
        width={150}
      />
    </div>
  );
}

export default Profile;
