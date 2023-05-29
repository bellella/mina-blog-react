import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const HeaderSearchWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 150px;
  padding-top: 4px;
  input[type="text"] {
    width: 100%;
    border-bottom: 1px solid #b7b7b7;
    width: ${({active}) => active ? '100%' : '0'};
    transition: width 1s;
  }
  button {
  }
`;

function HeaderSearch() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const input = useRef();
  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      doSearch();
    }
  }
  const doSearch = () => {
    setActive(active => !active);
    if(active) {
      const keyword = input.current.value;
      input.current.value = '';
      navigate(`/posts?keyword=${keyword}`);
    }
  }
  return (
    <HeaderSearchWrapper active={active}>
      <input type="text" ref={input} onKeyPress={e => handleEnter(e)}/>
      <button onClick={doSearch}>
        <i className="las la-search"></i>
      </button>
    </HeaderSearchWrapper>
  );
}

export default HeaderSearch;
