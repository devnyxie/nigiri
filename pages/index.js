import { getAllPosts } from '../lib/api.js';
import Blog_list from '../components/blog_list/Blog_list.js';
import Profile from '../components/profile/Profile.js';

export default function Home({ allPosts, theme, config }) {
  return (
    <div className="fade-in">
      <Profile config={config} />
      <Blog_list allPosts={allPosts} theme={theme} config={config} />
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
