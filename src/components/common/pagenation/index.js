import React, { useState } from 'react';
import { createSearchParams, Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from "styled-components";

const Pagenation_wrapper = styled.div`
text-align: center;
.page_list {
  display: inline-flex;
  .page_item {
    padding: 8px 13px;
    margin: 5px;
    background: #dadada;
    color: #fff;
    cursor: pointer;
    &.active {
      background: ${({theme}) => theme.color.primary};
    }
  }
}
`;
function Pagenation({ pages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigatePage = page => {
    searchParams.delete('page')
    searchParams.append('page', page)
    setSearchParams(searchParams.toString())
  }
  return (
    <Pagenation_wrapper>
      <ul className="page_list">
        {
          pages.map(p => (
            <li key={p} 
                onClick={() => navigatePage(p)}
                className={`page_item ${
                  (!searchParams.get('page') && p === 1) || 
                  searchParams.get('page') == p ? 'active' : ''}`}
                >
               {p}
            </li>
          ))
        }
      </ul>
    </Pagenation_wrapper>
  );
}

export default Pagenation;