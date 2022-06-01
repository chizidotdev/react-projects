import React from "react";
import styled from "styled-components";

import { IoMoonOutline } from "react-icons/io5";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  padding: 25px 5vw;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 1em;
`;
const Theme = styled.p`
  font-size: 0.875em;
  display: flex;
  align-items: center;
`;
const ThemeIcon = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Container className="header shadow">
      <Title>Where in the world?</Title>
      <Theme>
        <ThemeIcon>
          <IoMoonOutline />
        </ThemeIcon>
        Dark Mode
      </Theme>
    </Container>
  );
};

export default Header;
