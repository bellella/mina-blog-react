import React from 'react';
import { formatDate } from "../../../utils/format"
import Inner from "../../style/Inner"

function PostContent({post}) {
  return (
    <div className="post_content">
    <div className="post_image">
      <img src={post.thumbnail} alt="" />
    </div>
    <div className="post_main">
    <Inner>
      <div className="post_info">{formatDate(post.createdAt)}</div>
      <div className="post_title">
        <h2>{post.title}</h2>
      </div>
      <div className="post_text">
        <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </div>
      {/* <div className="post_tags">
        <ul className="tag_list">
          <li className="tag_item">
            <span>TAG</span>
          </li>
          <li className="tag_item">
            <span>TAG</span>
          </li>
          <li className="tag_item">
            <span>TAG</span>
          </li>
        </ul>
      </div> */}
      </Inner>
    </div>
  </div>
  );
}

export default PostContent;