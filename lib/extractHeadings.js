// Extract headings from HTML at build time
export function extractHeadings(htmlContent) {
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[2].replace(/<[^>]*>/g, ''); // Strip any HTML tags inside heading
    headings.push({ level, text });
  }

  return headings;
}
