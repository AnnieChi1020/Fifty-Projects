import React from 'react';
import styled from 'styled-components';
import './App.css';
import { GlobalStyle, ResetStyle } from './styles/globalStyle';

function App() {
  return (
    <Container>
      <ResetStyle />
      <GlobalStyle />
    </Container>
  );
}

export default App;

const Container = styled.div``;

