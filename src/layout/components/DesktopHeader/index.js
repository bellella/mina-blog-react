import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import HeaderSearch from "../../../components/common/HeaderSearch";
import HeaderTop from '../HeaderTop';
const StyledDesktopHeader = styled.div`
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
  .menu_list {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    font-size: 14px;
    font-weight: 400;
    color: #777;
    text-transform: uppercase;
    .menu_item {
      a {
        padding: 10px;
        &.active {
          font-weight: 600;
        }
      }
    }
  }
`;

function DesktopHeader({ categories = [] }) {
  return (
    <StyledDesktopHeader>
      <HeaderTop/>
      <ul className="menu_list">
        <li className="menu_item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            home
          </NavLink>
        </li>
        {categories.map((c) => (
          <li className="menu_item" key={c.name}>
            <NavLink
              end
              to={`/posts/category/${c.id}`}
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              {c.name}
            </NavLink>
          </li>
        ))}
        <li className="menu_item">
          <HeaderSearch />
        </li>
      </ul>
    </StyledDesktopHeader>
  );
}

export default DesktopHeader;
