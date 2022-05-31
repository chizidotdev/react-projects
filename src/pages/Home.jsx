import { useContext, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Header from "../components/Header";
import { useResultContext } from "../context/ResultContext";
import { useThemeContext } from "../context/ThemeContext";

const Container = styled.div`
  min-height: 100vh;
`;
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 7vh;
`;
const Input = styled.input`
  padding: 1rem;
  width: 300px;
  border: none;
  outline: none;
  border-radius: 5px;
`;
const Select = styled.select`
  width: 200px;
  padding: 1rem;
  padding-right: 1rem;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 5px;
`;
const Option = styled.option`
  padding: 1rem;
`;

const Home = () => {
  const { darkTheme } = useThemeContext();
  const { getResults } = useResultContext();

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <Header />
      <Container className={`container light`}>
        <Form>
          <Input
            className="shadow"
            type="text"
            placeholder="Search for a country"
          />
          <Select className="shadow">
            <Option>Filter by Region</Option>
            <Option>Africa</Option>
            <Option>America</Option>
            <Option>Asia</Option>
            <Option>Europe</Option>
            <Option>Oceania</Option>
          </Select>
        </Form>
        <Card />
      </Container>
    </div>
  );
};

export default Home;
