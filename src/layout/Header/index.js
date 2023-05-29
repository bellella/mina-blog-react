import React from "react";
import Container from "../../components/style/Container";
import { useSelector } from "react-redux";
import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";
import styled from "styled-components";
import { useGetCategories } from "../../hooks/queries/usePostQuery";

const StyledHeader = styled.header`
// position: sticky;
// top: 0;
// background: #fff;
// z-index: 1;
`;

function Header() {
  const { data: categories } = useGetCategories();

  return (
    <StyledHeader>
      <Container>
        <DesktopHeader categories={categories} />
      </Container>
      <MobileHeader categories={categories} />
    </StyledHeader>
  );
}

export default React.memo(Header);
