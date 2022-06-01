import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import { BiArrowBack } from "react-icons/bi";
import { useResultContext } from "../context/ResultContext";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  gap: 10vw;
  flex-wrap: wrap;

  @media screen and (max-width: 68rem) {
    gap: 5vw;
  }
`;
const ButtonContainer = styled.div``;
const Button = styled.button``;
const ButtonSpan = styled.span``;
const Image = styled.div`
  top: 0;
  height: 300px;
  width: 450px;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 75rem) {
    height: 250px;
    width: 350px;
  }
`;
const Wrapper = styled.div`
  font-size: 16px;
`;
const Name = styled.h1`
  font-size: 1.5em;
  margin-bottom: 1rem;
`;
const Details = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 5vw;
`;
const DetailContainer = styled.div``;
const DetailWrapper = styled.div`
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

const Detail = () => {
  const { detail } = useResultContext();
  const navigate = useNavigate();

  console.log(detail);

  //   console.log(detail.name.nativeName.spa.official);

  return (
    <>
      <Header />
      <section className="container">
        <ButtonContainer>
          <Button onClick={() => navigate("/")}>
            <ButtonSpan>
              <BiArrowBack />
            </ButtonSpan>
            Back
          </Button>
        </ButtonContainer>
        <Container>
          <Image
            style={{
              backgroundImage: `url(${detail.flags.png})`,
            }}
          />
          <Wrapper>
            <Name>{detail.name.official}</Name>
            <Details>
              <DetailContainer>
                <DetailWrapper>
                  <DetailTitle>Native Name:</DetailTitle>
                  <DetailDesc>{detail.name.official}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Population:</DetailTitle>
                  <DetailDesc>{detail.population.toLocaleString()}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Region:</DetailTitle>
                  <DetailDesc>{detail.region}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Sub Region:</DetailTitle>
                  <DetailDesc>{detail.subregion}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Capital:</DetailTitle>
                  <DetailDesc>{detail.capital}</DetailDesc>
                </DetailWrapper>
              </DetailContainer>
              <DetailContainer>
                <DetailWrapper>
                  <DetailTitle>Top Level Domain:</DetailTitle>
                  <DetailDesc>{detail.tld}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Currencies:</DetailTitle>
                  <DetailDesc>{/*detail.currencies[0].name*/}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Languages:</DetailTitle>
                  <DetailDesc>{/*detail.languages[0]*/}</DetailDesc>
                  {/* {detail.languages.map((language) => (
                    <DetailDesc>{language},</DetailDesc>
                ))} */}
                </DetailWrapper>
              </DetailContainer>
            </Details>
          </Wrapper>
        </Container>
      </section>
    </>
  );
};

export default Detail;
