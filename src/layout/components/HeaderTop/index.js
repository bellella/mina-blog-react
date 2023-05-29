import React, { useEffect, useState } from "react";
import Logo from '../../../components/common/Logo'
import styled, {css} from 'styled-components'
import { fromEvent, debounceTime } from "rxjs";

const StyledHeaderTop = styled.div`
  transition: height .5s;
  overflow: hidden;
  height: 90px;
  ${({disappear}) => disappear && css`
    height: 0;
  `}
  .logo_wrapper {
    padding: 30px 0;
    text-align: center;
  }
`;

function HeaderTop() {
  const [disappear, setDisappear] = useState(false);
  // useEffect(() => {
  //   const scrollEvent = fromEvent(window, "scroll")
  //   .pipe(debounceTime(200))
  //     .subscribe((e) => {
  //       const scrollY = window.scrollY;
  //       if(scrollY > 30) {
  //         setDisappear(true)
  //       } else {
  //         setDisappear(false)
  //       }
  //     });
  //   return () => scrollEvent.unsubscribe();
  // }, [disappear]);
  return (
    <StyledHeaderTop disappear={disappear}>
      <div className="logo_wrapper">
      <Logo size={30}/>
      </div>
    </StyledHeaderTop>
  );
}

export default HeaderTop;
