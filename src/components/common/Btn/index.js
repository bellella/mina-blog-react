import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

const SideButtonStyle = styled.button`
  padding: ${({size}) => size === 'sm' ? '14px' : '15px 30px'};
  font-size: ${({size}) => size === 'sm' ? '14px' : '16px'};
  font-weight: 500;
  background: ${({bgColor}) => bgColor ? bgColor : '#000' };
  color: ${({textColor}) => textColor ? textColor : '#fff' };
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

function Btn({bgColor, textColor, size = 'sm', children, to, onclick, isSubmit = false}) {
  const navigate= useNavigate();
  const handleClick = () => {
    if (onclick) {
      onclick();
    }
    if(to) {
      navigate(to);
    }
  }
  return (
    <SideButtonStyle {...{bgColor, textColor, size, type: isSubmit ? 'submit' : 'button'}} onClick={() => handleClick()}>
      {children}
    </SideButtonStyle>
  );
}

export default Btn;