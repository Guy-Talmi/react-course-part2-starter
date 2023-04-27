import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Use query by page
// interface PostQuery {
//   page: number;
//   pageSize: number;
// }

interface PostQuery {
  pageSize: number;
}

// Query by userId 
//const usePosts = (userId: number | undefined) => {
//const usePosts = (userId: string | undefined) => {

const usePosts = (query: PostQuery) => {

  // Query by page
  // const fetchPosts = () =>
  //   axios
  //     .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
  //       params: {
  //         //userId 

  //         _start: (query.page - 1) * query.pageSize,
  //         _limit: query.pageSize,
  //       },
  //     })
  //     .then((res) => res.data)

  return useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    //queryFn: fetchPosts,

    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),

    staleTime: 10 * 1000, // 10 seconds
    keepPreviousData: true,
    getNextPageParam: (lastPage, pages) => {
      // 1 -> 2
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    }
  });

  // Query by page
  // return useQuery<Post[], Error>({
  //   // Query by userId   
  //   // /users/1/posts
  //   //queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
  //   //queryKey: ['users', userId, 'posts'],

  //   queryKey: ['posts', query],
  //   queryFn: fetchPosts,
  //   staleTime: 10 * 1000, // 10 seconds
  //   keepPreviousData: true,
  // });
}

export default usePosts;