import { Feed } from 'feed';
import { getAllPosts } from './api';
import config from '../configuration.yaml';

export function generateRssFeed() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'content']);
  const siteURL = process.env.SITE_URL || 'http://localhost:3000';
  const date = new Date();

  const author = {
    name: config?.name + " " + (config?.surname ?? config?.surname),
    email: config?.email_address,
    link: process.env.SITE_URL || 'http://localhost:3000',
  };

  const feed = new Feed({
    title: config.site_title,
    description: config.site_description,
    id: siteURL,
    link: siteURL,
    language: "en",
    image: `${siteURL}/favicon/apple-touch-icon.png`,
    favicon: `${siteURL}/favicon/apple-touch-icon.png`,
    copyright: `All rights reserved ${date.getFullYear()}`,
    updated: date,
    generator: "Feed | Nigiri",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  return {
    rss: feed.rss2(),
    atom: feed.atom1(),
    json: feed.json1()
  };
}