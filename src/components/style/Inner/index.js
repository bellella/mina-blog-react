import React from 'react';
import styled, { css } from 'styled-components';

const StyledInner = styled.div`
  padding: 0 10px;
  ${({mobile = true}) => !mobile && css`
  @media ${({ theme }) => theme.tablet} {
    padding: 0;
  }`
  }
  ${({tablet = true}) => !tablet && css`
  @media ${({ theme }) => theme.minTblet} {
    padding: 0;
  }`
  }
`


export default StyledInner;