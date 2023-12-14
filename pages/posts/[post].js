import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostByFileName, getAllPosts } from '../../lib/api.js';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return <div>Single post</div>;
}

export async function getStaticProps({ params }) {
  const post = getPostByFileName(params.post, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ]);
  //   const content = await markdownToHtml(post.content || '');
  return {
    props: {
      post: {
        ...post,
        // content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => ({
      params: {
        post: post.slug,
      },
    })),
    fallback: false,
  };
}
