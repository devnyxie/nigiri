import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostByFileName, getAllPosts } from '../../lib/api.js';
import markdownToHtml from '../../lib/markdownToHtml.js';
import Head from 'next/head.js';
import { useEffect } from 'react';
import TOC from '../../components/TOC/TOC.js';
import { formatDateString } from '../../utils/utils.js';

import Prism from 'prismjs';

// Top Languages
require('prismjs/components/prism-markup');
require('prismjs/components/prism-css');
require('prismjs/components/prism-clike');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-c');
require('prismjs/components/prism-cpp');
require('prismjs/components/prism-java');
require('prismjs/components/prism-python');
require('prismjs/components/prism-php');
require('prismjs/components/prism-ruby');
require('prismjs/components/prism-swift');
require('prismjs/components/prism-go');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-shell-session');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-powershell');
require('prismjs/components/prism-sql');
require('prismjs/components/prism-scala');
require('prismjs/components/prism-perl');
require('prismjs/components/prism-haskell');
require('prismjs/components/prism-lua');
require('prismjs/components/prism-matlab');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-objectivec');
require('prismjs/components/prism-elixir');
require('prismjs/components/prism-erlang');
require('prismjs/components/prism-dart');
require('prismjs/components/prism-kotlin');
require('prismjs/components/prism-lisp');
require('prismjs/components/prism-scheme');
require('prismjs/components/prism-markup-templating');
require('prismjs/components/prism-yaml');

// Theme
require('prismjs/themes/prism-tomorrow.min.css');
//

export default function Post({ post, morePosts, preview }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
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
            <TOC articleContent={post.content} />
            <div
              className="markdown-body pb-5"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
            {/* <ReactMarkdown children={post.content} /> */}
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
