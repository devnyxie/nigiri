import fs from 'fs';
import yaml from 'js-yaml';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostFileNames() {
  return fs.readdirSync(postsDirectory);
}

export function getPostByFileName(slug, fields) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields) {
  const slugs = getPostFileNames();
  const posts = slugs
    .map((slug) => getPostByFileName(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function parseYAML() {
  console.log('parseYAML');
  const yamlFilePath = path.resolve(path.resolve('.'), 'configuration.yaml');
  console.log(yamlFilePath);
  const yamlContent = fs.readFileSync(yamlFilePath, 'utf8');
  const parsedObject = yaml.load(yamlContent);
  // const parsedObject = yaml.load(
  //   fs.readFileSync(path.resolve('configuration.yaml'), 'utf8')
  // );
  return parsedObject;
}
