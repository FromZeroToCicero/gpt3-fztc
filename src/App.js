import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import { Container } from "./components/shared";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Header />
      </Container>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
