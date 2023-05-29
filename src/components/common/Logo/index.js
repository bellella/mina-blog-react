import React from 'react';
import styled from 'styled-components';
const StyledLogo = styled.div`
display: inline-block;
width: 50px;
height: 50px;
font-size: ${({size = 30}) => size}px;
line-height: ${({size = 30}) => size}px;
cursor: pointer;
`

function Logo({size}) {
  const handleClick = () => {
    window.location.href ='/';
  };
  return (
    <StyledLogo size={size} onClick={() => handleClick()}>
      <img src="/logo.png" alt="" />
    </StyledLogo>
  );
}

export default Logo;