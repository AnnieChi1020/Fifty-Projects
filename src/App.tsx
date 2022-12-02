import React from "react";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, ResetStyle } from "./styles/globalStyle";

import Day01 from "./pages/Day01";
import Day02 from "./pages/Day02";
import Day03 from "./pages/Day03";
import Day04 from "./pages/Day04";
import Day05 from "./pages/Day05";
import Day06 from "./pages/Day06";
import Day07 from "./pages/Day07";

const App = () => (
  <Container>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/day01" element={<Day01 />} />
        <Route path="/day02" element={<Day02 />} />
        <Route path="/day03" element={<Day03 />} />
        <Route path="/day04" element={<Day04 />} />
        <Route path="/day05" element={<Day05 />} />
        <Route path="/day06" element={<Day06 />} />
        <Route path="/day07" element={<Day07 />} />
      </Routes>
    </BrowserRouter>
  </Container>
);

export default App;

const Container = styled.div``;
