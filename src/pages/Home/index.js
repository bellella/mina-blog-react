import React, { useEffect, useRef, useState } from "react";
import postService from "../../services/post.service";
import Container from "../../components/style/Container";
import { useSelector } from "react-redux";
import MasonPostList from "../../components/post/MasonPostList";
import { useGetPosts, useInfinityPosts } from "../../hooks/queries/usePostQuery";

function Home() {
  //const initialized = useSelector((state) => state.post.initialized);
  const { data, fetchNextPage } = useInfinityPosts();
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const target = useRef(null);

  useEffect(() => {
    //getPosts();
    console.log(posts,' posts')
  }, [posts]);

  // const usePosts = async () => {
  //   const lastId = posts.length ? posts.slice(-1)[0].id : null;
  //   const { data: r } = useGetPosts(lastId);
  //   if (r.length) {
  //     setPosts((state) => [...state, ...r]);
  //   } else {
  //     setHasMore(false);
  //   }
  // };

  useEffect(() => {
    if (!hasMore) {
      return;
    }
    const observer = new IntersectionObserver(
      async ([entry], observer) => {
        if (entry.isIntersecting && data.pages.length) {
          await fetchNextPage();
          console.log(data,'dataaa')
        }
      },
      {
        threshold: [0.5],
      }
    );
    observer.observe(target.current);
    return () => observer && observer.disconnect();
  }, [target, data, hasMore]);

  return (
    <div id="Home">
      <Container>
        <MasonPostList posts={data.pages.flat()} />
        <div id="target" ref={target} style={{ height: "5px" }}></div>
      </Container>
    </div>
  );
}

export default Home;
