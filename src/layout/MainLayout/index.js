import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SideButtonGroup from "../SideButtonGroup";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loading from "../../components/common/Loading";
import Alert from "../../components/common/Alert";
import FrozenOutlet from "../FrozenOutlet";
import Header from "../Header";

function MainLayout() {
  const location = useLocation();
  //const initialized = useSelector(state => state.post.initialized);
  return (
    <>
      {/* {initialized || <Loading />} */}
      <Header />
      <SideButtonGroup />
      <main>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="content"
            timeout={400}
          >
            <FrozenOutlet />
          </CSSTransition>
        </TransitionGroup>
        <Alert isDark={true} bgColor="#009688"></Alert>
      </main>
    </>
  );
}

export default MainLayout;
