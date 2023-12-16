import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostByFileName, getAllPosts } from '../../lib/api.js';
import markdownToHtml from '../../lib/markdownToHtml.js';
import Head from 'next/head.js';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="fade-in">
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </article>
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostByFileName(params.post, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ]);
  const content = markdownToHtml(post.content || '');
  return {
    props: {
      post: {
        ...post,
        content,
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
