import React, { useEffect, useState } from 'react';
import { transformToHyphenatedString } from '../../utils/utils';

const TOC = ({ articleContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const article = document.createElement('div');
    article.innerHTML = articleContent;

    const headingsArray = Array.from(
      article.querySelectorAll('h1, h2, h3, h4, h5, h6')
    );
    const tocHeadings = headingsArray.map((heading) => ({
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1), 10),
    }));

    setHeadings(tocHeadings);
  }, [articleContent]);
  return (
    <div className="toc">
      {headings.length > 1 ? (
        <>
          <ul style={{ listStyleType: 'square' }}>
            {headings.map((heading) => (
              <li
                className="animated-link force-font"
                key={heading.text}
                style={{
                  marginLeft: `${(heading.level - 1) * 30}px`,
                  listStyleType: 'square',
                  display: 'list-item',
                }}
              >
                <a
                  href={`#${transformToHyphenatedString(heading.text)}`}
                  className="text"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TOC;
