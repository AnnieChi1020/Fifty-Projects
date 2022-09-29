import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../styles/Colors";

const steps = [1, 2, 3, 4];

const Day03: React.FC = () => {
  const [currStep, setCurrStep] = useState<number>(1);

  const handleOnClickPrev = () => {
    setCurrStep(currStep > 1 ? currStep - 1 : currStep);
  };

  const handleOnClickNext = () => {
    setCurrStep(currStep < steps[steps.length - 1] ? currStep + 1 : currStep);
  };

  return (
    <Container>
      <ProgressContainer>
        <Progress percentage={((currStep - 1) / (steps.length - 1)) * 100} />
        {steps.map((step) => (
          <Circle key={step} isActive={step <= currStep}>
            {step}
          </Circle>
        ))}
      </ProgressContainer>
      <BtnsContainer>
        <Btn disabled={currStep <= 1} onClick={handleOnClickPrev}>
          Prev
        </Btn>
        <Btn
          disabled={currStep >= steps[steps.length - 1]}
          onClick={handleOnClickNext}
        >
          Next
        </Btn>
      </BtnsContainer>
    </Container>
  );
};

export default Day03;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: "Muli", sans-serif;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${Colors.gray3};
    height: 4px;
    width: 100%;
    z-index: -1;
    transition: 400ms ease;
  }
`;

const Progress = styled.div<{ percentage: number }>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #3498db;
  height: 4px;
  width: ${(props) => props.percentage}%;
  z-index: -1;
  transition: 400ms ease;
`;

const Circle = styled.div<{ isActive: boolean }>`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.gray6};
  background-color: ${Colors.gray1};
  border-radius: 100px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => (props.isActive ? "#3498db" : Colors.gray3)};
  transition: 400ms ease;
`;

const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

const Btn = styled.button`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.gray1};
  width: 100px;
  padding: 4px 12px;
  background-color: #3498db;
  border-radius: 8px;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  :focus {
    outline: 0;
  }
  :disabled {
    background-color: ${Colors.gray3};
    cursor: not-allowed;
  }
`;
