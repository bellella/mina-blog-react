import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PostList from '../../components/post/PostList'
import postService from '../../services/post.service';
import Container from '../../components/style/Container';
import Inner from '../../components/style/Inner';
import Search from '../../components/common/Search';
import NoContent from '../../components/common/NoContent';

function Posts() {
  const [searchParams] = useSearchParams();
  let { categoryId } = useParams();
  const keyword = searchParams.get('keyword')
  const page = searchParams.get('page') || 1;
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    (async () => {
      const { posts, pages } = keyword ? await postService.getKeywordPosts(page, keyword)
      : await postService.getCategoryPosts(page, categoryId);
      setPosts(posts);
      setPages(pages);
    })();
  }, [keyword, categoryId, page]);
  return (
    <div id="posts">
      <Container>
      <Inner mobile={false}>
      {keyword && <Search keyword={keyword}/>}
      {posts.length ? (
        <PostList posts={posts} pages={pages}/>
      ) : (<NoContent/>)}
        
      </Inner>
      </Container>
    </div>
  );
}

export default Posts;