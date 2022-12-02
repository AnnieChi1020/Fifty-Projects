import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import ps5 from "../../images/Day07/ps5.jpg";
import xbox from "../../images/Day07/xbox.jpg";

const Day07: React.FC = () => {
  const [isHover, setIsHover] = useState<"left" | "right" | null>(null);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const getWidth = (label: string) => {
    switch (isHover) {
      case label:
        return "75%";
      case null:
        return "50%";
      default:
        return "25%";
    }
  };

  const addLeftRefEventListener = () => {
    if (leftRef.current !== null) {
      leftRef.current.addEventListener("mouseenter", () => setIsHover("left"));
      leftRef.current.addEventListener("mouseleave", () => setIsHover(null));
    }
  };

  const removeLeftRefEventListener = () => {
    if (leftRef.current !== null) {
      leftRef.current.removeEventListener("mouseenter", () =>
        setIsHover("left")
      );
      leftRef.current.removeEventListener("mouseleave", () => setIsHover(null));
    }
  };

  const addRightRefEventListener = () => {
    if (rightRef.current !== null) {
      rightRef.current.addEventListener("mouseenter", () =>
        setIsHover("right")
      );
      rightRef.current.addEventListener("mouseleave", () => setIsHover(null));
    }
  };

  const removeRightRefEventListener = () => {
    if (rightRef.current !== null) {
      rightRef.current.removeEventListener("mouseenter", () =>
        setIsHover("right")
      );
      rightRef.current.removeEventListener("mouseleave", () =>
        setIsHover(null)
      );
    }
  };

  useEffect(() => {
    addLeftRefEventListener();
    addRightRefEventListener();

    return () => {
      removeLeftRefEventListener();
      removeRightRefEventListener();
    };
  }, []);

  return (
    <Container>
      <SectionsContainer>
        <SplitLeft width={getWidth("left")} ref={leftRef}>
          <Title>Playstation 5</Title>
          <LeftBtn>Buy</LeftBtn>
        </SplitLeft>
        <SplitRight width={getWidth("right")} ref={rightRef}>
          <Title>XBox Series X</Title>
          <RightBtn>Buy</RightBtn>
        </SplitRight>
      </SectionsContainer>
    </Container>
  );
};

export default Day07;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background-color: #efedd6;
`;

const SectionsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333;
`;

const Split = styled.div<{ width: string }>`
  position: absolute;
  width: ${(props) => props.width};
  height: 100%;
  overflow: hidden;
  transition: all 1000ms ease;
`;

const SplitLeft = styled(Split)`
  left: 0;
  background: url(${ps5});
  background-repeat: no-repeat;
  background-size: cover;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(87, 84, 236, 0.7);
  }
`;

const SplitRight = styled(Split)`
  right: 0;
  background: url(${xbox});
  background-repeat: no-repeat;
  background-size: cover;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(43, 43, 43, 0.8);
  }
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  color: white;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 20%;
  text-align: center;
  transform: translateX(-50%);
  whitespace: no-wrap;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Btn = styled.button`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  color: white;
  border: 3px solid white;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  width: 200px;
  text-transform: upperCase;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 120px;
    padding: 12px;
  }
`;

const LeftBtn = styled(Btn)`
  :hover {
    background-color: rgba(87, 84, 236, 1);
    border-color: rgba(87, 84, 236, 1);
  }
`;

const RightBtn = styled(Btn)`
  :hover {
    background-color: rgba(28, 122, 28, 1);
    border-color: rgba(28, 122, 28, 1);
  }
`;
