import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MuiTooltip from '../tooltip/muiTooltip';

function Profile() {
  return (
    <div
      className="p-2 w-100 d-flex flex-column flex-md-row align-items-center justify-content-md-between"
      style={{}}
    >
      <img
        src="pfp.jpg"
        alt="Profile Image"
        className="pfp d-flex d-md-none mb-4 mt-4"
        width={200}
      />
      <div className="">
        <div className="fw-bold" style={{ fontSize: '35px' }}>
          Tim Afanasiev
        </div>
        <div>Digital Craftsman (Developer / Designer)</div>
        <div id="socials" className="d-flex w-100 pt-2">
          <MuiTooltip text="My GitHub account">
            <Link
              href="https://github.com/devnyxie"
              target="_blank"
              className="social-badge p-2 rounded-2 me-2"
            >
              <Image
                src={`/platforms/github_rounded.svg`}
                width={25}
                height={25}
              />
            </Link>
          </MuiTooltip>
          <MuiTooltip text="My LinkedIn account">
            <Link
              href="https://www.linkedin.com/in/talmkg/"
              target="_blank"
              className="social-badge p-2 rounded-2 me-2"
            >
              <Image src={`/platforms/linkedin.svg`} width={25} height={25} />
            </Link>
          </MuiTooltip>
          <MuiTooltip text="Send me an email">
            <Link
              href="mailto:timbusinez@gmail.com"
              target="_blank"
              className="social-badge p-2 rounded-2"
            >
              <Image src={`/platforms/mailbox.svg`} width={25} height={25} />
            </Link>
          </MuiTooltip>
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
