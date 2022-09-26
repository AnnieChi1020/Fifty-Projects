import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../styles/Colors";

const panels = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    text: "Yosemite Valley"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    text: "Lake Atitlan"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    text: "Pragser Wildsee"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    text: "Giau Pass"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    text: "Tsavo East National Park Kenya"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    text: "Niederbauen-Chulm, Emmetten"
  }
];

const Day01: React.FC = () => {
  const [activePanel, setActivePanel] = useState<number>(1);

  return (
    <Container>
      {panels.map((panel) => (
        <PanelContainer
          key={panel.id}
          imgUrl={panel.url}
          onClick={() => setActivePanel(panel.id)}
          isActive={activePanel === panel.id}
        >
          <Text>{panel.text}</Text>
        </PanelContainer>
      ))}
    </Container>
  );
};

export default Day01;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  gap: 20px;
  @media (max-width: 576px) {
    div:nth-of-type(4),
    div:nth-of-type(5),
    div:nth-of-type(6) {
      display: none;
    }
  }
`;

const PanelContainer = styled.div<{ imgUrl: string; isActive: boolean }>`
  height: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${(props) => (props.isActive ? "5" : "0.5")};
  transition: all ease 300ms;
  cursor: pointer;
  overflow: hidden;
  h1 {
    opacity: ${(props) => (props.isActive ? "1" : "0")};
  }
`;

const Text = styled.h1`
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.gray1};
  font-weight: bold;
  transition: all ease 300ms;
`;
