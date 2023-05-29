import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import postService from "../../services/post.service";
import Container from "../../components/style/Container";
import alertService from '../../services/alert.service'
import PostForm from '../../components/post/PostForm'
import { useSelector } from "react-redux";
import "./style.scss";

function PostWrite() {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => ({
    categories: state.post.categories,
  }));

  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      if (id) {
        const { title, content, thumbnail, categoryId } = await postService.getPost(id);
        setPost({title, content, thumbnail, categoryId})
      }
    })();
  }, []);

  const savePost = async (data) => {
    try {
      if (id) {
        const res = await postService.updatePost({...data, id});
        alertService.success('Post update has been done!');
        navigate(`/posts/${id}`);
      } else {
        const res = await postService.savePost(data);
        console.log(res,'res!!')
        alertService.success('Post creation has been done!');
        navigate(`/posts/${res.id}`);
      }
    } catch(e) {
      console.log(e)
      alertService.error();
    }
  }

  return (
    <div id="postWrite">
      <Container>
        <PostForm categories={categories} post={post} savePost={savePost}/>
      </Container>
    </div>
  );
}

export default PostWrite;
