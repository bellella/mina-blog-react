import React, { useEffect, useState } from "react";
import postService from "../../services/post.service";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from "../../components/style/Container";
import Inner from "../../components/style/Inner";
import PostContent from "../../components/post/PostContent";
import ReplyForm from "../../components/reply/ReplyForm";
import ReplyItem from "../../components/reply/ReplyItem";
import alertService from "../../services/alert.service";
import { useSelector } from "react-redux";
import NoContent from "../../components/common/NoContent";
import Btn from "../../components/common/Btn";
import "./style.scss";

function PostView() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState({});
  const [replies, setReplies] = useState([]);
  const authorized = useSelector((state) => state.common.authorized);

  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const postData = await postService.getPost(id);
    const repliesData = await postService.getReplies(id);
    setPost(postData);
    setReplies(repliesData);
    setIsLoaded(true);
  };

  const handleReplySubmit = ({ content, name, email }) => {
    postService.saveReply({ content, userName: name, email, postId: id });
    getData();
    alertService.success("Thank you!");
  };
  return (
    <div id="postView">
      <Container>
        {isLoaded && (
          <>
            <PostContent post={post} />
            <Inner>
              <div className="post_middle px_10">
                {authorized && (
                  <>
                    <Btn to={`/posts/write/${post.id}`}>Modify</Btn>
                    {/* <button className="bttn sm_bttn delete_bttn">Delete</button> */}
                  </>
                )}
              </div>
              <div className="post_bottom">
                <div className="post_comments">
                  <div className="comments_title">
                    <h4>comments</h4>
                  </div>
                  <div className="comments">
                    {replies.length ? (
                      <ul className="comm_list">
                        {replies.map((reply) => (
                          <ReplyItem item={reply} key={reply.id}></ReplyItem>
                        ))}
                      </ul>
                    ) : (
                      <NoContent />
                    )}
                    <div className="comment_form">
                      <div className="comm_form_title">
                        <h3>post a comment</h3>
                      </div>
                      <ReplyForm
                        handleReplySubmit={handleReplySubmit}
                      ></ReplyForm>
                    </div>
                  </div>
                </div>
              </div>
            </Inner>
          </>
        )}
      </Container>
    </div>
  );
}

export default PostView;
