import Image from 'next/image';
// import styles from './page.module.css';
import { getAllPosts } from '../lib/api.js';
import Link from 'next/link.js';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.js';
import Layout from '../components/layout/layout.js';
import Blog_list from '../components/blog_list/Blog_list.js';
import Profile from '../components/profile/Profile.js';

export default function Home({ allPosts, theme }) {
  return (
    <div className="fade-in">
      <Profile />
      <Blog_list allPosts={allPosts} theme={theme} />
    </div>
  );
}
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
