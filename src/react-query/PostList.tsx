import { useState } from 'react';
import usePosts from '../hooks/usePosts';

const PostList = () => {
  //const [userId, setUserId] = useState<number>();
  //const [userId, setUserId] = useState<string>();
  //const { data: posts, error, isLoading } = usePosts(userId);

  const pageSize = 10;
  const [page, setPage] = useState(1);
  //const { data: posts, error, isLoading } = usePosts(page);
  const { data: posts, error, isLoading } = usePosts({
    page,
    pageSize,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
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
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>

      <button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}>Previous</button>

      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}>Next</button>

    </>
  );
};

export default PostList;
