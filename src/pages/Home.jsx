import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { LoadingCard } from "../components/Loader";
import Pagination from "../components/Pagination";
import { useResultContext } from "../context/ResultContext";

const Container = styled.section`
  padding: 5vh 5vw;
  min-height: 90vh;
  background-color: ${(p) => p.theme.bgColor};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 7vh;
`;
const InputContainer = styled.div`
  width: 300px;
  /* max-height: 400px; */
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${(p) => p.theme.elColor};
  box-shadow: ${(p) => p.theme.shadow};
  color: ${(p) => p.theme.textColor};
`;
const Select = styled.select`
  width: 200px;
  padding: 1rem;
  padding-right: 1rem;
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.elColor};
  color: ${(p) => p.theme.textColor};
  box-shadow: ${(p) => p.theme.shadow};
  border-radius: 5px;
  cursor: pointer;
`;
const ErrorMessage = styled.p`
  height: 30vh;
  display: grid;
  place-items: center;
  text-align: center;
  color: ${(p) => p.theme.textColor}; ;
`;
// const List = styled.ul`
//   max-height: 300px;
//   overflow-y: scroll;
// `;
// const ListOption = styled.li`
//   list-style: none;
//   color: ${(p) => p.theme.textColor};
//   border: 1px solid ${(p) => p.theme.bgColor};
//   background-color: ${(p) => p.theme.elColor};
// `;

const Home = () => {
  const { results, error, loading, getSearchResults, getFilteredResults } =
    useResultContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [paginatedResults, setPaginatedResults] = useState(results);

  useEffect(() => {
    const idxOfLastPost = currentPage * postsPerPage;
    const idxOfFirstPost = idxOfLastPost - postsPerPage;
    setPaginatedResults(results?.slice(idxOfFirstPost, idxOfLastPost));
  }, [results, currentPage, postsPerPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.country.value;

    getSearchResults(name);
    setCurrentPage(1);
  };

  const handleFilter = (e) => {
    const region = e.target.value;

    getFilteredResults(region);
    setCurrentPage(1);
  };

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = "Go back to home page"; // Legacy method for cross browser support
    }

    return ""; // Legacy method for cross browser support
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <InputContainer>
          <Input
            type="text"
            name="country"
            placeholder="Search for a country..."
            autoComplete="off"
          />
        </InputContainer>
        <Select
          onChange={handleFilter}
          name="options"
          defaultValue="Filter by Region"
        >
          <option>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>
        </Select>
      </Form>
      {error ? (
        <ErrorMessage>
          Error Fetching Countries <br /> Please refresh or try again...
        </ErrorMessage>
      ) : loading ? (
        <LoadingCard />
      ) : (
        <Card paginatedResults={paginatedResults} />
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={results?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Home;
