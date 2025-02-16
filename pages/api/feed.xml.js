import { generateRssFeed } from '../../lib/feed';

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { rss } = generateRssFeed();
      res.setHeader('Content-Type', 'text/xml');
      res.write(rss);
      res.end();
    } catch (error) {
      res.status(500).json({ error: 'Error generating feed' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}