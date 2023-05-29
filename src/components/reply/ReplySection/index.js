import React from 'react';
import ReplyForm from '../ReplyForm';
import Replies from '../Replies';
function ReplySection({items}) {
  console.log(items)
  return (
    <div className="post_comments">
    <div className="comments_title">
      <h4>comments</h4>
    </div>
    <div className="comments">
    <ul className="comm_list">
      {items.map(item => 
        <Replies item={item} key={item.id}></Replies>
        )}
    </ul>
      <div className="comment_form">
        <div className="comm_form_title">
          <h3>post a comment</h3>
        </div>
        <ReplyForm></ReplyForm>
      </div>
    </div>
  </div>
  );
}

export default ReplySection;