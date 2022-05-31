import React from "react";
import styled from "styled-components";
import { useResultContext } from "../context/ResultContext";
import "../index.scss";

const Wrapper = styled.div`
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

const Card = () => {
  const { results } = useResultContext();

  return (
    <Wrapper>
      {results?.map((result, index) => (
        <CardItem className="shadow" key={index}>
          <Image
            style={{
              backgroundImage: `url(${result.flags.png})`,
            }}
          ></Image>
          <h1>{result.name.common}</h1>
          <div>
            <h3>Population</h3>
            <p>{result.population}</p>
          </div>
          <div>
            <h3>Region</h3>
            <p>{result.region}</p>
          </div>
          <div>
            <h3>Capital</h3>
            <p>{result.capital[0]}</p>
          </div>
        </CardItem>
      ))}
    </Wrapper>
  );
};

export default Card;
