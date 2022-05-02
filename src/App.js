import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Section1 from "./components/Section1";
import { css } from "styled-components";
import Section2 from "./components/Section2";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const ClipShape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ClipPath = styled.div`
  ${ClipShape}
  -webkit-clip-path: polygon(100% 0, 68% 0%, 52% 100%, 100% 100%);
  clip-path: polygon(100% 0, 68% 0%, 52% 100%, 100% 100%);
  background-color: crimson;
`;

const ClipPath2 = styled.div`
  ${ClipShape}
  -webkit-clip-path: polygon(0 0, 52% 0, 70% 100%, 16% 100%);
  clip-path: polygon(0 0, 52% 0, 70% 100%, 16% 100%);
  background-color: #f8da77;
`;

const ClipPath3 = styled.div`
  ${ClipShape}
  -webkit-clip-path: polygon(70% 0, 100% 0, 100% 100%, 70% 100%);
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 70% 100%);
  background-color: #11a797;
`;

const ClipPath4 = styled.div`
  ${ClipShape}
  -webkit-clip-path: polygon(0 0, 70% 0, 26% 100%, 0 100%);
  clip-path: polygon(0 0, 70% 0, 26% 100%, 0 100%);
  background-color: crimson;
`;
const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <ClipPath />
      </Container>

      <Container>
        <Section1 />
        <ClipPath2 />
      </Container>

      <Container>
        <Section2 />
        <ClipPath3 />
      </Container>

      <Container>
        <Pricing />
        <ClipPath4 />
      </Container>

      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
