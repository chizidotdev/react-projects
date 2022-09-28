import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const CardContainer = styled.div`
  height: 340px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: -1;
  gap: 50px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Body = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Image = styled.div``;

export const LoadingCard = () => {
  return (
    <CardContainer>
      <Body>
        <Skeleton height={160} width={240} />
        <Skeleton width={240} height={30} />
        <Wrapper>
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
        </Wrapper>
      </Body>
      <Body>
        <Skeleton height={160} width={240} />
        <Skeleton width={240} height={30} />
        <Wrapper>
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
        </Wrapper>
      </Body>
      <Body>
        <Skeleton height={160} width={240} />
        <Skeleton width={240} height={30} />
        <Wrapper>
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
        </Wrapper>
      </Body>
      <Body>
        <Skeleton height={160} width={240} />
        <Skeleton width={240} height={30} />
        <Wrapper>
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
        </Wrapper>
      </Body>
      <Body>
        <Skeleton height={160} width={240} />
        <Skeleton width={240} height={30} />
        <Wrapper>
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
        </Wrapper>
      </Body>
      <Body>
        <Skeleton height={160} width={240} />
        <Skeleton width={240} height={30} />
        <Wrapper>
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
          <Skeleton width={120} className="mb" />
        </Wrapper>
      </Body>
    </CardContainer>
  );
};

export const LoadingDetail = () => {
  return (
    <DetailContainer>
      <Image>
        <Skeleton height={280} width={400} />
      </Image>
      <Skeleton width={300} height={30} />
      <Wrapper>
        <Skeleton width={200} className="mb" />
        <Skeleton width={200} className="mb" />
        <Skeleton width={200} className="mb" />
        <Skeleton width={200} className="mb" />
        <Skeleton width={200} className="mb" />
        <Skeleton width={200} className="mb" />
        <Skeleton width={200} className="mb" />
        <Skeleton width={200} className="mb" />
      </Wrapper>
    </DetailContainer>
  );
};
