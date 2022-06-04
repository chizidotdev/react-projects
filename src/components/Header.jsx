import React from "react";
import styled from "styled-components";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";

const Container = styled.header`
  position: sticky;
  top: 0;
  background-color: ${(p) => p.theme.elColor};
  box-shadow: ${(p) => p.theme.shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  padding: 25px 5vw;
  z-index: 2;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
  color: ${(p) => p.theme.textColor};
`;
const Theme = styled.p`
  font-size: 0.875em;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(p) => p.theme.textColor};
`;
const ThemeIcon = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const Header = ({ setTheme, theme }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
    setDarkTheme((p) => !p);
  };

  return (
    <Container>
      <Title>Where in the world?</Title>
      <Theme onClick={toggleTheme}>
        <ThemeIcon>
          {!darkTheme ? <IoMoonOutline /> : <IoSunnyOutline />}
        </ThemeIcon>
        {!darkTheme ? "Dark Mode" : "Light Mode"}
      </Theme>
    </Container>
  );
};

export default Header;
