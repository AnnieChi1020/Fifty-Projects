import React from "react";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, ResetStyle } from "./styles/globalStyle";

import Day01 from "./pages/Day01";

const App = () => (
  <Container>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/day-01" element={<Day01 />} />
      </Routes>
    </BrowserRouter>
  </Container>
);

export default App;

const Container = styled.div``;
