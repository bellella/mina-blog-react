import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  input[type="text"] {
    width: 100%;
    border-bottom: 1px solid #b7b7b7;
    width: 100%;
    transition: width 1s;
    font-size: 120%;
  }
`;

const SearchInfo = styled.div`
  background: #f6f6f6;
  padding: 50px 0;
  text-align: center;
`;

function Search({keyword}) {
  const navigate = useNavigate();
  const input = useRef();

  useEffect(() => {
    input.current.value = keyword;
  }, [keyword]);

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      doSearch();
    }
  }
  const doSearch = () => {
    const keyword = input.current.value;
    navigate(`/posts?keyword=${keyword}`);
  }
  return (
    <>
    <SearchInfo><h2>Search results for : {keyword}</h2></SearchInfo>
    <SearchWrapper>
      <input type="text" ref={input} onKeyPress={e => handleEnter(e)}/>
      <button onClick={doSearch}>
        <i className="las la-search"></i>
      </button>
    </SearchWrapper>
    </>
  );
}

export default Search;
