import React from 'react';
import styled, {css} from 'styled-components'

const HamBtnWrapper = styled.div`
display: flex;
align-items: center;
height: 32px;
width: 32px;
cursor: pointer;
  z-index: 10;
  .hamburger-lines {
    display: block;
    height: 26px;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform .3s ease-in-out;
    transform-origin: center;
  }
  .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #191919;
    //transition: transform 0.4s ease-in-out;
  }

  .line1 {
    transform-origin: 0% 0%;
  }

  .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .hamburger-lines .line3 {
    transform-origin: 0% 100%;
  }

  ${(({active}) => active && css`
  .hamburger-lines {
    transform: rotate(calc(-360deg)) translateX(7px);
  }

  .menu-items {
    transform: translateX(0);
  }

  .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
  `)}

  `;

function HamBtn({active, btnClick}) {
  return (
    <HamBtnWrapper active={active} onClick={btnClick}>
    <div className="hamburger-lines">
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </div>
  </HamBtnWrapper>
  );
}

export default HamBtn;