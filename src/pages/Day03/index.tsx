import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faPhone,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../../styles/Colors";
import { H1 } from "../../styles/Fonts";

const Day02: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <Background>
      <Container showNav={showNav} onClick={() => setShowNav((pre) => !pre)}>
        <CircleContainer>
          <BtnsContainer showNav={showNav}>
            <CloseBtn>
              <Icon icon={faXmark} />
            </CloseBtn>
            <OpenBtn>
              <Icon icon={faBars} />
            </OpenBtn>
          </BtnsContainer>
        </CircleContainer>
        <Content>
          <H1>What is Lorem Ipsum?</H1>
          <span>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`}
          </span>
          <Image
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="dog"
          />
        </Content>
      </Container>
      <Nav showNav={showNav}>
        <Ul>
          <Li>
            <NavIcon icon={faHome} />
            Home
          </Li>
          <Li>
            <NavIcon icon={faUser} />
            About
          </Li>
          <Li>
            <NavIcon icon={faPhone} />
            Contact
          </Li>
        </Ul>
      </Nav>
    </Background>
  );
};

export default Day02;

const Background = styled.div`
  font-family: "Lato", sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  overflow-y: visible;
  margin: 0;
`;

const Container = styled.div<{ showNav: boolean }>`
  width: 100vw;
  min-height: 100vh;
  background-color: ${Colors.gray1};
  padding: 50px;
  font-family: "Lato", sans-serif;
  transform-origin: top left;
  transform: ${(props) => props.showNav && "rotate(-20deg)"};
  transition: transform 0.5s linear;
`;

const CircleContainer = styled.div`
  position: fixed;
  top: -100px;
  left: -100px;
`;

const BtnsContainer = styled.div<{ showNav: boolean }>`
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
  transform: ${(props) => props.showNav && "rotate(-70deg)"};
`;

const Btn = styled.button`
  height: 100px;
  cursor: pointer;
  background-color: transparent;
  color: ${Colors.gray1};
  position: absolute;
  top: 50%;
  left: 50%;
`;

const OpenBtn = styled(Btn)`
  left: 60%;
`;

const CloseBtn = styled(Btn)`
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const Content = styled.div`
  width: 100%;
  padding: 40px;
  gap: 20px;
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
  object-fit: contain;
`;

const Nav = styled.nav<{ showNav: boolean }>`
  position: fixed;
  left: 0;
  bottom: 50px;
  z-index: 100;
  transform: translateX(${(props) => (props.showNav ? "0" : "-120%")});
  transition: transform 0.5s linear;
`;

const NavIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 12px;
`;

const Ul = styled.ul`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  li:nth-child(2) {
    margin-left: 20px;
  }
  li:nth-child(3) {
    margin-left: 30px;
  }
`;

const Li = styled.li`
  text-transform: uppercase;
  color: ${Colors.gray1};
`;
