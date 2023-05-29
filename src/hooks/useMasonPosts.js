import { useState, useEffect } from "react";

export default function useMasonPosts(posts) {
  let [columns, setColumns] = useState([[], [], []]);

  useEffect(() => {
      makeColumns();
  }, [posts]);


  const handleResize = () => {
    if((window.innerWidth > 700 && columns.length === 2)
     || (window.innerWidth <= 700 && columns.length === 3)) {
      makeColumns();
    }
  }

  const makeColumns = () => {
    const columnCount = window.innerWidth > 700 ? 3 : 2;
    setColumns(getMason(columnCount, posts));
  }

  const getMason = (col, items) => {
    let newItems = [];
    let newColumns = [];
    for (let i = 0; i < col; i++) {
      newColumns[i] = [];
      newItems.push(...items.filter((it, itIndex) => itIndex % col === i));
      newColumns[i].push(...items.filter((it, itIndex) => itIndex % col === i));
    }
    return newColumns;
  };

  return {
    columns,
    makeColumns,
    handleResize,
    posts
  }

}