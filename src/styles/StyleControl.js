import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    ${({freeze}) =>  freeze === true && css`
      height: 100vh;
      overflow-x: hidden;
    `};
  }
`;

function StyleControl() {
  const { pathname, search } = useLocation();
  const { freeze } = useSelector((state) => ({
    freeze: state.style.freeze,
  }));

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }, 500);
  }, [pathname, search]);
  
  return (
    <GlobalStyle freeze={freeze} />
  );
}

export default StyleControl;