import React from 'react';
import styled from "styled-components";
import Btn from '../../components/common/Btn'
import loginService from '../../services/login.service';
import { useSelector } from 'react-redux';
const SideButtonGroupStyle = styled.div`
@media ${({ theme }) => theme.mobile} {
  display: none;
}
position: fixed;
right: 0;
top: 30%;
display: flex;
flex-flow: column;
gap: 5px;
z-index: 3;
`;

function SideButtonGroup() {
  const authorized = useSelector(state => state.common.authorized);
  return (
    <SideButtonGroupStyle>
      {authorized && <Btn bgColor="#009688" to="/posts/write">write</Btn>}
      {authorized && <Btn bgColor="crimson" onclick={() => loginService.signOut()}>logout</Btn>}
      {authorized || <Btn bgColor="crimson" onclick={() => loginService.signInGoogle()}>login</Btn>}
    </SideButtonGroupStyle>
  );
}

export default SideButtonGroup;