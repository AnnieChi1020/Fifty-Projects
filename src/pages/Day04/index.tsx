import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Colors from "../../styles/Colors";

const Day04: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container>
      <InputContainer>
        <Input placeholder="Search ..." isActive={isActive} />
        <Icon icon={faSearch} onClick={() => setIsActive((pre) => !pre)} />
      </InputContainer>
    </Container>
  );
};

export default Day04;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  overflow: hidden;
`;

const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${Colors.gray1};
  border-radius: 8px;
  overflow: hidden;
  padding: 8px;
`;

const Input = styled.input<{ isActive: boolean }>`
  width: ${(props) => (props.isActive ? "150px" : "0px")};
  font-size: 16px;
  line-height: 18px;
  outline: none;
  border: none;
  :focus {
    outline: none;
    border: none;
  }
  transition: all ease 500ms;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  cursor: pointer;
`;
