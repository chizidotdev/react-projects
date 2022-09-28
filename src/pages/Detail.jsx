import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import { BiArrowBack } from "react-icons/bi";
import { useResultContext } from "../context/ResultContext";
import { useNavigate } from "react-router-dom";
import { LoadingDetail } from "../components/Loader";

const Body = styled.section`
  background-color: ${(p) => p.theme.bgColor};
  padding: 5vh 5vw;
  color: ${(p) => p.theme.textColor};
  min-height: 100vh;
`;
const Container = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
`;
const ButtonContainer = styled.div`
  margin: 2vw 0 6vw;
  width: 120px;
  box-shadow: ${(p) => p.theme.shadow};
  background-color: ${(p) => p.theme.elColor};
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  padding: 10px 30px;
  cursor: pointer;
  color: ${(p) => p.theme.textColor};
`;
const ButtonSpan = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
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
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 61.25rem) {
    margin-top: 10vw;
  }
`;
const Name = styled.h1`
  font-size: 1.5em;
  margin-bottom: 1rem;
`;
const Details = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;

  @media screen and (max-width: 61.25rem) {
    margin-top: 5vw;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  margin-bottom: 0.3rem;
`;
const DetailTitle = styled.h3`
  font-size: 1em;
`;
const DetailDesc = styled.p`
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
`;

const Detail = ({ theme, setTheme }) => {
  const { details: detail, loading, error, setError } = useResultContext();
  const navigate = useNavigate();

  console.log(detail);

  let languages = [];
  let currencies = [];
  if (!detail) {
    setError(true);
  } else {
    if (detail.languages !== undefined) {
      for (const language in detail.languages) {
        languages.push(detail.languages[language] + ",");
      }

      let lastLanguage = languages[languages.length - 1];
      lastLanguage = lastLanguage.substring(0, lastLanguage.length - 1);
      languages.splice(-1, 1, lastLanguage);
    }

    if (detail.currencies !== undefined) {
      for (const cat in detail.currencies) {
        const currencyCat = detail.currencies[cat];

        for (const currency in currencyCat) {
          currencies.push(currencyCat[currency] + ",");
        }
      }

      let lastCurrency = currencies[currencies.length - 1];
      lastCurrency = lastCurrency.substring(0, lastCurrency.length - 1);
      currencies.splice(-1, 1, lastCurrency);
    }
  }

  return (
    <Body>
      <ButtonContainer>
        <Button onClick={() => navigate("/")}>
          <ButtonSpan>
            <BiArrowBack />
          </ButtonSpan>
          Back
        </Button>
      </ButtonContainer>
      {loading ? (
        <LoadingDetail />
      ) : (
        <Container>
          <Image
            style={{
              backgroundImage: `url(${detail?.flags.png})`,
            }}
          />
          <Wrapper>
            <Name>{detail?.name.official}</Name>
            <Details>
              <DetailContainer>
                <DetailWrapper>
                  <DetailTitle>Native Name:</DetailTitle>
                  <DetailDesc>{detail?.name.official}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Population:</DetailTitle>
                  <DetailDesc>{detail?.population.toLocaleString()}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Region:</DetailTitle>
                  <DetailDesc>{detail?.region}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Sub Region:</DetailTitle>
                  <DetailDesc>{detail?.subregion}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Capital:</DetailTitle>
                  <DetailDesc>{detail?.capital}</DetailDesc>
                </DetailWrapper>
              </DetailContainer>
              <DetailContainer>
                <DetailWrapper>
                  <DetailTitle>Top Level Domain:</DetailTitle>
                  <DetailDesc>{detail?.tld}</DetailDesc>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Currencies:</DetailTitle>
                  {currencies.map((currency, index) => (
                    <DetailDesc key={index}>{currency}</DetailDesc>
                  ))}
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Languages:</DetailTitle>
                  {languages.map((language, index) => (
                    <DetailDesc key={index}>{language}</DetailDesc>
                  ))}
                </DetailWrapper>
              </DetailContainer>
            </Details>
            {/* <DetailWrapper>
      <DetailTitle>Border Countries:</DetailTitle>
      {detail?.borders.map((border, index) => (
        <DetailDesc key={index}>
          <Button>{border}</Button>
        </DetailDesc>
      ))}
    </DetailWrapper> */}
          </Wrapper>
        </Container>
      )}
    </Body>
  );
};

export default Detail;
