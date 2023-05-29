import React, { useEffect } from "react";
import PostItem from "../PostItem";
import useMasonPosts from "../../../hooks/useMasonPosts";
import { fromEvent, throttleTime } from "rxjs";
import Inner from "../../style/Inner";
import './style.scss';

function MasonPostList({ posts }) {
  const { columns, handleResize } = useMasonPosts(posts);
  useEffect(() => {
    const resizeEvent = fromEvent(window, "resize")
      .pipe(throttleTime(500))
      .subscribe((e) => {
        handleResize();
      });
    return () => resizeEvent.unsubscribe();
  }, [columns]);

  useEffect(() => {
    let observer;
    observer = new IntersectionObserver(
      (entries, observer) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        }),
      {
        threshold: [0.1],
      }
    );
    const els = document.querySelectorAll("article");
    els.forEach((e) => observer.observe(e));
    return () => observer && observer.disconnect();
  }, [columns]);

  return (
    <Inner>
      <div className="mason_wrapper post_list">
        {columns.map((column, ci) => (
          <div className="column" key={`column_${ci}`}>
            {column.map((post, i) => (
              <PostItem
                key={`column_${i}_${post.title}`}
                post={post}
                uiType="column"
                animation={true}
                inner={false}
              />
            ))}
          </div>
        ))}
      </div>
    </Inner>
  );
}

export default MasonPostList;
