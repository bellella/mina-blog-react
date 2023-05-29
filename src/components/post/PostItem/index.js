import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { formatDate } from "../../../utils/format"
import styled, { css } from "styled-components"
import Inner from '../../style/Inner'
const Post = styled.article`
${({ animation }) => animation && animationStyle}
  & > a {
    ${({ uiType, animation }) => css`
      ${uiType === "column" && columnLayoutStyle}
      ${uiType === "row" &&
      css`
        @media ${({ theme }) => theme.minTablet} {
          ${rowLayoutStyle}
        }

        @media ${({ theme }) => theme.mobile} {
          ${columnLayoutStyle}
        }
      `}
    `}}
  break-inside: avoid;
  text-align: left;
  margin-bottom: 20px;
  }
  .post_image {
    overflow: hidden;
    max-height: 90vw;
  }
  .post_desc {
    .desc_top {
      color: #777;
    }
    .desc_title {
      font-weight: 500;
      font-size: 16px;
    }
    .desc_text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;

      margin: 10px 0;
      color: #777;
    }
    .desc_bottom {
      color: #777;
    }
  }
`;
const animationStyle = css`
  transform: translateY(100px);
  opacity: 0;
  transition: 1s all;
  &.appear {
    transform: translateY(0);
    opacity: 1;
  }
`;

const columnLayoutStyle = css`
  margin-bottom: 0 50px;
`;

const rowLayoutStyle = css`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-gap: 20px;
  height: 250px;
  overflow: hidden;
`;

function PostItem({
  post: { id, thumbnail, title, content, createdAt } = {},
  uiType,
  animation,
  inner = true
}) {
  return (
    <Post {...{ uiType, animation }}>
      <Link to={`/posts/${id}`}>
        <div className="post_image">
          <img src={thumbnail} />
        </div>
        <div className="post_desc">
          <Inner {...{inner}}>
          <div className="desc_top">{formatDate(createdAt)}</div>
          <div className="desc_title">{title}</div>
          <div className="desc_text">{content}</div>
          {/* <div className="desc_bottom">READ MORE</div> */}
          </Inner>
        </div>
      </Link>
    </Post>
  );
}

PostItem.defaultProps = {
  post: {},
  uiType: "column",
  animation: false,
};

export default PostItem;
