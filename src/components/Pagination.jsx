import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import styled from "styled-components";

const PaginateNav = styled.nav`
  padding: 50px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  padding: 12px 0 5px;
  border-radius: 10px;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: ${(p) => p.theme.btnColor}; */
`;
const ListItem = styled.li`
  display: flex;
  width: 25px;
  margin: 0 12px 10px;
  list-style: none;
  color: ${(p) => p.theme.textColor};
`;
const Link = styled.a`
  border-radius: 2px;
  width: 100%;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  color: ${(p) => p.theme.textColor};
  background-color: ${(p) => (p.active ? p.theme.elColor : "")};
  box-shadow: ${(p) => (p.active ? p.theme.btnShadow : "")};

  &:hover {
    background-color: ${(p) => p.theme.elColor};
    box-shadow: ${(p) => p.theme.btnShadow};
  }
`;
const Button = styled.a`
  text-decoration: none;
  padding: 10px 15px;
  background-color: ${(p) => p.theme.elColor};
  font-size: 14px;
  border-radius: 5px;
  color: ${(p) => p.theme.textColor};
  cursor: pointer;
  box-shadow: ${(p) => p.theme.btnShadow};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4%);
  }
`;
const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 25px;
`;

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginateNav>
      <Wrapper>
        {currentPage > 1 && (
          <Button onClick={() => setCurrentPage((p) => p - 1)} href="#">
            <BiLeftArrow style={{ fontSize: "12px", marginRight: "7px" }} />
            Back
          </Button>
        )}
        {currentPage !== pageNumbers.length && (
          <Button onClick={() => setCurrentPage((p) => p + 1)} href="#">
            Next
            <BiRightArrow style={{ fontSize: "12px", marginLeft: "7px" }} />
          </Button>
        )}
      </Wrapper>
      <List>
        {pageNumbers.map((num) => (
          <ListItem key={num}>
            <Link
              active={currentPage === num ? true : false}
              onClick={() => setCurrentPage(num)}
              href="#"
            >
              {num}
            </Link>
          </ListItem>
        ))}
      </List>
    </PaginateNav>
  );
};

export default Pagination;
