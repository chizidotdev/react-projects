import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useResultContext } from "../context/ResultContext";

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
  cursor: pointer;
  background-color: ${(p) => p.theme.elColor};
  box-shadow: ${(p) => p.theme.shadow};
  transition: transform 0.2s ease-in;

  &:hover {
    transform: translateY(-1%);
  }
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
  color: ${(p) => p.theme.textColor};
`;
const Name = styled.h2`
  font-size: 1.4em;
  margin-bottom: 1rem;
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 0.3rem;
`;
const DetailTitle = styled.h2`
  font-size: 1em;
`;
const DetailDesc = styled.p`
  font-size: 0.9em;
`;

const Card = ({ paginatedResults: results }) => {
  const { setLoading, setDetail } = useResultContext();
  const navigate = useNavigate();

  const handleDetail = (id) => {
    setLoading(true);
    console.log("Selected item at id", id);

    setDetail(results[id]);
    navigate("/details");
    setLoading(false);
  };

  return (
    <Container>
      {results?.map((result, index) => (
        <CardItem key={index} onClick={() => handleDetail(index)}>
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
