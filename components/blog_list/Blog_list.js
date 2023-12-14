import Link from 'next/link';
import React from 'react';
import AnimatedLink from '../AnimatedLink';

function Blog_list({ allPosts }) {
  return (
    <div className="w-100 text-left mt-5">
      <h4 className="underlined_text">
        <div className="text">Blog</div>
      </h4>
      <div className="pt-2">
        {allPosts.map((post) => {
          return (
            <>
              <AnimatedLink
                as={`/posts/${post.slug}`}
                href="/posts/[post]"
                className="pb-1"
              >
                <div className="fw-bold">
                  {post.slug} - {post.title}
                </div>
              </AnimatedLink>
              <div className="ps-3 opacity-50">{post.excerpt}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Blog_list;
