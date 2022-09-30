import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../styles/Colors";
import { H2 } from "../../styles/Fonts";

const Day05: React.FC = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    let int: any;
    if (load < 100) {
      int = setInterval(() => {
        setLoad((pre) => pre + 1);
      }, 30);
    }
    return () => clearInterval(int);
  }, [load]);

  const scale = (
    num: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  return (
    <Container>
      <Background load={scale(load, 0, 100, 30, 0)} />
      <LoadingText opacity={scale(load, 0, 100, 1, 0)}>{load} %</LoadingText>
    </Container>
  );
};

export default Day05;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Background = styled.div<{ load: number }>`
  background: url("https://i.pinimg.com/originals/6d/88/f1/6d88f130b230b2459001c25dbbd06d4a.jpg")
    no-repeat center center/cover;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  position: absolute;
  top: -30px;
  left: -30px;
  z-index: -1;
  filter: blur(${(props) => props.load}px);
`;

const LoadingText = styled(H2)<{ opacity: number }>`
  font-size: 50px;
  color: ${Colors.ivory};
  font-family: "Ubuntu", sans-serif;
  opacity: ${(props) => props.opacity};
`;
