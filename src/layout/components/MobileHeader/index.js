import React, { useState } from "react";
import { useSelector } from 'react-redux';
import HamBtn from "../HamBtn";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Btn from "../../../components/common/Btn";
import Logo from '../../../components/common/Logo'
import loginService from "../../../services/login.service";
const MobileHeaderWrapper = styled.div`
  @media ${({ theme }) => theme.mobile} {
    display: block;
  }
  display: none;
  .mobile_header {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    position: relative;
    height: 50px;
    z-index: 3;
    & > *:nth-child(1),
    & > *:nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    padding-top: calc(50px + 25px);
    background: #fff;
    transform: ${({ active }) =>
      active ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.5s cubic-bezier(0.68, -0.04, 0.54, 1.04);
    z-index: 2;
    .nav_list {
      .nav_item {
        text-align: center;
        a {
          display: block;
          font-size: 17px;
          font-weight: 400;
          padding: 15px 0;
          text-transform: uppercase;
          &.active {
            font-weight: 700;
          }
        }
      }
    }
    .nav_bottom {
      display: flex;
      gap: 5px;
      justify-content: center;
      padding: 10px 0;
    }
  }
`;

function MobileHeader({ categories = [] }) {
  const [active, setActive] = useState(false);
  const authorized = useSelector(state => state.common.authorized);

  return (
    <MobileHeaderWrapper active={active}>
      <div className="mobile_header">
        <Logo/>
        <div></div>
        <div>
          <HamBtn
            btnClick={() => setActive((state) => !state)}
            active={active}
          ></HamBtn>
        </div>
      </div>
      <nav>
        <ul className="nav_list">
          <li className="nav_item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : null)}
              onClick={() => setActive(false)}
            >
              home
            </NavLink>
          </li>
          {categories.map((c) => (
            <li className="nav_item" key={c.id}>
              <NavLink
                end
                to={`/posts/category/${c.id}`}
                className={({ isActive }) => (isActive ? "active" : null)}
                onClick={() => setActive(false)}
              >
                {c.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav_bottom">
          {authorized && <Btn bgColor="#009688" to="/posts/write" onclick={() => setActive(false)}>write</Btn>}
          {authorized && <Btn bgColor="crimson" onclick={() => loginService.signOut()}>logout</Btn>}
          {authorized || <Btn bgColor="crimson" onclick={() => loginService.signInGoogle()}>login</Btn>}
        </div>
      </nav>
    </MobileHeaderWrapper>
  );
}

export default MobileHeader;
