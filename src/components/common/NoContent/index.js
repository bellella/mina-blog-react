import React from 'react';
import styled from 'styled-components';

const StyledNoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

function NoContent() {
  return (
    <StyledNoContent>
      <p>Nothing!</p>
    </StyledNoContent>
  );
}

export default NoContent;