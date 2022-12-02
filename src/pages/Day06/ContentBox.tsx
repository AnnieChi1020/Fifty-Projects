import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ContentBox: React.FC<{ index: number }> = (props) => {
  const { index } = props;

  const boxRef = useRef<HTMLDivElement>(null);

  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;

      if (boxRef.current !== null) {
        const boxTop = boxRef.current?.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
      }
    };

    checkBoxes();

    window.addEventListener("scroll", checkBoxes);

    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  return (
    <Box
      isShow={isShow}
      initLocation={index % 2 === 0 ? "translateX(-300%)" : "translateX(300%)"}
      ref={boxRef}
    >
      Content
    </Box>
  );
};

export default ContentBox;

const Box = styled.div<{ isShow: boolean; initLocation: string }>`
  width: 300px;
  height: 160px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: steelblue;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  font-size: 20px;
  font-weight: bold;
  color: white;
  transform: ${(props) =>
    props.isShow ? "translateX(0)" : props.initLocation};
  transition: transform 400ms ease;
`;
