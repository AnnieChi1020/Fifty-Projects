import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";

const contentBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Day06: React.FC = () => (
  <Container>
    <Title>Scroll to see the animation</Title>
    <ContentBoxContainer>
      {contentBoxes.map((i) => (
        <ContentBox key={i} index={i} />
      ))}
    </ContentBoxContainer>
  </Container>
);

export default Day06;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background-color: #efedd6;
`;

const Title = styled.h1`
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const ContentBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
`;
