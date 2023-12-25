import React, { useState } from 'react';
import AnimatedLink from '../AnimatedLink';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { formatDateString } from '../../utils/utils';

function Items({ currentItems, config }) {
  return (
    <>
      {currentItems.map((post, index) => (
        <div key={post.slug} className="pb-1 pt-1">
          <div className="w-100 d-flex justify-content-between">
            <div
              style={{
                width: 'max-content',
                whiteSpace: 'nowrap',
              }}
            >
              {formatDateString(
                post.date,
                config.blog_preview_date_format,
                config.blog_preview_date_separators
              )}
            </div>
            <span className="px-2 opacity-50">{'>>'}</span>
            <div className="w-100">
              <AnimatedLink as={`/posts/${post.slug}`} href="/posts/[post]">
                <div className="fw-bold text-break">{post.title}</div>
              </AnimatedLink>
              {/* <div className="fw-bold text-break">{post.title}</div> */}
            </div>
          </div>

          {index !== currentItems.length - 1 ? (
            <>
              <hr className="m-0 mt-1 mb-1" />
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, posts, theme, config }) {
  const isDark = theme === 'dark' ? true : false;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(posts.length / itemsPerPage);
  const itemOffset = (page - 1) * itemsPerPage;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts.slice(itemOffset, endOffset);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Items currentItems={currentItems} config={config} />
      {posts.length > config.max_posts_per_page ?  <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={2}
      >
        <Pagination
          shape="rounded"
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack> : <></>}
     
    </>
  );
}

function BlogList({ allPosts, theme, config }) {
  return (
    <div className="w-100 text-left mt-5">
      <h4 className="underlined_text">
        <div className="text">Blog</div>
      </h4>
      <div className="pt-2 force-font">
        <PaginatedItems
          config={config}
          itemsPerPage={
            config.max_posts_per_page ? config.max_posts_per_page : 8
          }
          posts={allPosts}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default BlogList;
