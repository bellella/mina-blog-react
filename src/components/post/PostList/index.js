import PostItem from "../PostItem";
import Pagenation from '../../common/pagenation'
function PostList({ posts, pages }) {
  return (
    <>
      {posts.map((post, i) => (
        <PostItem key={`post_${i}_${post.title}`} post={post} uiType="row"/>
      ))}
      <Pagenation pages={pages} url="/posts"/>
    </>
  );
}

export default PostList;
