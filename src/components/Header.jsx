import React from "react";
import styled from "styled-components";

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
`;
const ThemeIcon = styled.span``;

const Header = () => {
  return (
    <Container className="header">
      <Title>Where in the world?</Title>
      <Theme>Dark Mode</Theme>
    </Container>
  );
};

export default Header;
