import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useResultContext } from "../context/ResultContext";
import "../index.scss";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;
const CardItem = styled.div`
  overflow: hidden;
  width: 250px;
  height: 350px;
  background-color: white;
  border-radius: 5px;
`;
const Image = styled.div`
  top: 0;
  height: 160px;
  background-size: cover;
  background-position: center;
`;
const Body = styled.div`
  padding: 30px;
  font-size: 14px;
`;
const Name = styled.h1`
  font-size: 1.4em;
  margin-bottom: 1rem;
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 0.3rem;
`;
const DetailTitle = styled.h3`
  font-size: 1em;
`;
const DetailDesc = styled.p`
  font-size: 0.9em;
`;

const Card = () => {
  const [countries, setCountries] = useState();
  const { results, setDetail, filteredResults, region } = useResultContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (region) {
      setCountries(filteredResults);
    } else {
      setCountries(results);
    }
    console.log(results);
  }, [region, results]);

  const handleDetail = (id) => {
    console.log("Selected item at id", id);

    if (region) {
      setDetail(filteredResults[id]);
    } else {
      setDetail(results[id]);
    }

    navigate("/details");
  };

  return (
    <Container>
      {countries?.map((result, index) => (
        <CardItem
          className="shadow"
          key={index}
          onClick={() => handleDetail(index)}
        >
          <Image
            style={{
              backgroundImage: `url(${result.flags.png})`,
            }}
          ></Image>
          <Body>
            <Name>{result.name.common}</Name>
            <Detail>
              <DetailTitle>Population:</DetailTitle>
              <DetailDesc>{result.population.toLocaleString()}</DetailDesc>
            </Detail>
            <Detail>
              <DetailTitle>Region:</DetailTitle>
              <DetailDesc>{result.region}</DetailDesc>
            </Detail>
            <Detail>
              <DetailTitle>Capital:</DetailTitle>
              <DetailDesc>{result.capital}</DetailDesc>
            </Detail>
          </Body>
        </CardItem>
      ))}
    </Container>
  );
};

export default Card;
