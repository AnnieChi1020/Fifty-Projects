import React from "react";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, ResetStyle } from "./styles/globalStyle";

import Day01 from "./pages/Day01";
import Day02 from "./pages/Day02";
import Day03 from "./pages/Day03";
import Day04 from "./pages/Day04";

const App = () => (
  <Container>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/day-01" element={<Day01 />} />
        <Route path="/day-02" element={<Day02 />} />
        <Route path="/day-03" element={<Day03 />} />
        <Route path="/day-04" element={<Day04 />} />
      </Routes>
    </BrowserRouter>
  </Container>
);

export default App;

const Container = styled.div``;
