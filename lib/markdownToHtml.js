import breaks from 'remark-breaks';
import html from 'remark-html';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import rehypePrism from '@mapbox/rehype-prism';
import { unified } from 'unified';

// Create reusable processor instance to avoid re-initializing pipeline
const processor = unified()
  .use(parse)
  .use(breaks)
  .use(gfm)
  .use(html, { sanitize: false, handlers: { image: handleImage } })
  .use(rehypePrism);

export default async function markdownToHtml(markdown) {
  const result = await processor.process(markdown);
  return result.toString();
}

// Custom image handler to support width and height attributes
function handleImage(h, node) {
  const props = {
    src: node.url,
    alt: node.alt || '',
    width: node.width,
    height: node.height,
  };
  return h(node, 'img', props);
}
