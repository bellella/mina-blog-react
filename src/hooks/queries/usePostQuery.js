import { useInfiniteQuery, useMutation, useQueries, useQuery } from "react-query";
import postService from "../../services/post.service";

export const useGetPosts = (lastId) =>
  useQuery("posts", () => postService.getPosts(lastId));

export const useInfinityPosts = () => useInfiniteQuery('projects', ({pageParam}) => {
  return postService.getPosts(pageParam)
}, {
  onSuccess: r => {
  },
  onError: e => {
    console.log(e,'error')
  },
  getNextPageParam: (lastPage, pages) => {
    return lastPage ? lastPage.slice(-1)[0].id : '???????';
  },
})

export const useGetPost = (index) =>
  useQuery(["post", index], () => postService.getPost(index));

export const useGetCategories = () =>
  useQuery("categories", () => postService.getCategories(), { staleTime: Infinity });

export const useGetReplies = (index) =>
  useQuery("replies", () => postService.getReplies(index));

export const useInitialize = () => {
  useGetCategories();
  useQuery("settings", async () => {
    return new Promise((r) => {
      setTimeout(() => {
        r(true)
      }, 3000);
    });
  });
}

export const useSavePost = () => useMutation("categories", async () => {});

export const usePostUpdate = () => useMutation("categories", async () => {});
