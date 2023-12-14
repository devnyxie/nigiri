import React, { useState } from 'react';
import AnimatedLink from '../AnimatedLink';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import { lime } from '@mui/material/colors';
function Items({ currentItems }) {
  console.log(currentItems);
  return (
    <>
      {currentItems.map((post) => (
        <div key={post.slug}>
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
        </div>
      ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, posts, theme }) {
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
      <Items currentItems={currentItems} />
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={2}
      >
        {isDark ? (
          <>
            <Pagination
              shape="rounded"
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              color="primary"
              variant="outlined"
              className="no-child-borders"
            />
          </>
        ) : (
          <>
            <Pagination
              shape="rounded"
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              color="secondary"
            />
          </>
        )}
      </Stack>
    </>
  );
}

function BlogList({ allPosts, theme }) {
  return (
    <div className="w-100 text-left mt-5">
      <h4 className="underlined_text">
        <div className="text">Blog</div>
      </h4>
      <div className="pt-2 force-font">
        <PaginatedItems itemsPerPage={5} posts={allPosts} theme={theme} />
      </div>
    </div>
  );
}

export default BlogList;
