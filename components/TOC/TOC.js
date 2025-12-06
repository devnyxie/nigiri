import { memo, useMemo } from 'react';
import { transformToHyphenatedString } from '../../utils/utils';

const TOC = memo(function TOC({ headings }) {
  if (!headings || headings.length <= 1) {
    return null;
  }

  return (
    <div className="toc">
      <hr/>
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
      <hr/>
    </div>
  );
});

export default TOC;
