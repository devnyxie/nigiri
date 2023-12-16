import Link from 'next/link';
import React from 'react';

const AnimatedLink = ({ href, className, children, as }) => {
  return (
    <div className={`animated-link ${className ? className : ''}`}>
      <Link as={as} href={href} className="text d-flex">
        {children}
      </Link>
    </div>
  );
};

export default AnimatedLink;
