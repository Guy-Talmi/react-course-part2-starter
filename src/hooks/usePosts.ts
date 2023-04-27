import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  interface PostQuery {
    page: number;
    pageSize: number;
  }

  //const usePosts = (userId: number | undefined) => {
  //const usePosts = (userId: string | undefined) => {
    
  const usePosts = (query: PostQuery) => {
    const fetchPosts = () =>
    axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      params: { 
        //userId 

        _start: (query.page - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    })
    .then((res) => res.data)

    return useQuery<Post[], Error>({
        // /users/1/posts
        //queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
        //queryKey: ['users', userId, 'posts'],

        queryKey: ['posts', query],
        queryFn: fetchPosts,
        staleTime: 10 * 1000, // 10 seconds
        keepPreviousData: true,
      });
  }
  
  export default usePosts;