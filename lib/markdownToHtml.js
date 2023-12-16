import { remark } from 'remark';
import breaks from 'remark-breaks';
import html from 'remark-html';
import gfm from 'remark-gfm';
import parse from 'remark-parse';

export default function markdownToHtml(markdown) {
  const result = remark()
    .use(parse)
    .use(breaks)
    .use(gfm)
    .use(html)
    .processSync(markdown);
  return result.toString();
}
