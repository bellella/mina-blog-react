import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { styleActions } from '../../../store/style';
import Logo from '../Logo';

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  font-size: 50px;
  z-index: 10;
`
function Loading() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(styleActions.setFreeze(true));
    return () => dispatch(styleActions.setFreeze(false));
  }, []);
  return (
    <StyledLoading id="loading">
      <Logo/>
    </StyledLoading>
  );
}

export default Loading;