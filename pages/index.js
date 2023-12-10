import Image from 'next/image';
// import styles from './page.module.css';
import { getAllPosts } from '../lib/api.js';

export default function Home({ allPosts }) {
  console.log(allPosts);
  return <main>sup nerds</main>;
}
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
