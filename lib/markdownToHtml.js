import breaks from 'remark-breaks';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';

// Create reusable processor instance to avoid re-initializing pipeline
const processor = unified()
  .use(parse)
  .use(breaks)
  .use(gfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeShiki, {
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    }
  })
  .use(rehypeStringify, { allowDangerousHtml: true });

export default async function markdownToHtml(markdown) {
  const result = await processor.process(markdown);
  return result.toString();
}
