import { useState } from 'react';
import usePosts from '../hooks/usePosts';
import React from 'react';

const PostList = () => {

  // Querying by user id
  //const [userId, setUserId] = useState<number>();
  //const [userId, setUserId] = useState<string>();
  //const { data: posts, error, isLoading } = usePosts(userId);
  //const { data: posts, error, isLoading } = usePosts(page);

  // // Pagination
  // const pageSize = 10;
  // const [page, setPage] = useState(1);
  // const { data: posts, error, isLoading } = usePosts({
  //   page,
  //   pageSize,
  // });

  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({
      pageSize,
    });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* Querying by user id */}
      {/* onChange={(event) => setUserId(parseInt(event.target.value))} */}
      {/* <select className="form-select mb-3"
        onChange={(event) => setUserId(event.target.value)}
        value={userId}>
        <option value=""></option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
      </select> */}

      <ul className="list-group">
        {data.pages.map((page, index) =>
          <React.Fragment key={index}>
            {page.map(post => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        )}
      </ul>

      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}>
        {isFetchingNextPage ? 'Loading...' : 'Load More'}
      </button>


      {/* 
      // Use this for pagination
      <button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}>Previous</button>

      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}>Next</button> */}

    </>
  );
};

export default PostList;
