import { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Header from "../components/Header";
import { useResultContext } from "../context/ResultContext";

const Container = styled.div`
  min-height: 100vh;
`;
const Form = styled.form`
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

const Home = () => {
  // const { darkTheme } = useThemeContext();
  const {
    country,
    setCountry,
    region,
    setRegion,
    getSearchResults,
    setFilteredResults,
    results,
    filteredResults,
  } = useResultContext();

  useEffect(() => {
    const getData = async () => {
      await getSearchResults();

      if (region !== "") {
        console.log("Region Selected", region);
        if (region === "Filter by Region") {
          setRegion("");
          return;
        }
        const filteredData = results.filter(
          (country) => country.region === region
        );

        setFilteredResults(filteredData);
        return;
      }
    };

    getData();
    console.log("region", region);
    console.log("line before region code");

    console.log("filteredResults", filteredResults);
  }, [country]);

  const handleFilter = (e) => {
    setRegion(e.target.value);

    getSearchResults();
  };

  return (
    <section>
      <Header />
      <Container className={`container light`}>
        <Form>
          <Input
            className="shadow"
            type="text"
            name="name"
            placeholder="Search for a country"
            autoComplete="off"
            onChange={(e) => setCountry(e.target.value)}
          />
          <Select
            onChange={handleFilter}
            defaultValue="Filter by Region"
            className="shadow"
          >
            <option>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antartic">Antartic</option>
          </Select>
        </Form>
        <Card />
      </Container>
    </section>
  );
};

export default Home;
