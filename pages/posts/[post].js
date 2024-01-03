import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostByFileName, getAllPosts } from '../../lib/api.js';
import markdownToHtml from '../../lib/markdownToHtml.js';
import Head from 'next/head.js';
import { useEffect } from 'react';
import TOC from '../../components/TOC/TOC.js';
import { formatDateString } from '../../utils/utils.js';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.target.tagName === 'A' &&
        event.target.getAttribute('href').startsWith('#')
      ) {
        console.log('triggered');
        const headingElements = document.querySelectorAll(
          `h1, h2, h3, h4, h5, h6`
        );
        console.log(event.target.textContent);
        console.log(headingElements);
        const targetHeading = Array.from(headingElements).find(
          (heading) => heading.textContent === event.target.textContent
        );
        // Scroll to the heading if found
        console.log(targetHeading);
        if (targetHeading) {
          targetHeading.scrollIntoView({ behavior: 'smooth' });
          console.log('scrolled');
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

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
            <h4>{title}</h4>
            <div className="pt-1 pb-1 opacity-75">
              {formatDateString(post.date, 'full_date')}
            </div>
            <hr />
            <TOC articleContent={post.content} />
            <hr />
            <div
              className="markdown-body pb-5"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
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
