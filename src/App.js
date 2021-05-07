import { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import "./App.css";

import Cursor from "./components/Cursor/Cursor";
import Contact from "./views/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Header from "./views/Header/Header";
import Project from "./views/Project/Project";
import Skills from "./views/Skills/Skills";

const WrapperScrollSnapping = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  transition: 0.3s ease-in;

  ::-webkit-scrollbar {
    display: none;
  }

  scroll-behavior: smooth;

  @media (min-width: 800px) {
    ${({ ticking }) =>
      ticking === true &&
      css`
        transform: scale3d(0.98, 0.95, 1);
      `}
  }
`;

function App() {
  const refWrapper = useRef(null);
  const [ticking, setTicking] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTicking(false);
    }, 1000);
  }, [ticking]);

  return (
    <div className="App">
      <Cursor />
      {/* <div
        style={{
          position: "fixed",
          top: "20px",
          left: "10%",
          color: "red",
          zIndex: "9999",
        }}
      >
        {scrollTop}
      </div> */}
      <WrapperScrollSnapping
        ref={refWrapper}
        ticking={ticking}
        onScroll={(e) => {
          setTicking(true);
          setScrollTop(e.target.scrollTop);
        }}
      >
        <Header ticking={ticking} />
        <Skills />
        <Project ticking={ticking} />
        <Contact />
      </WrapperScrollSnapping>

      <Nav scrollTop={scrollTop} />
    </div>
  );
}

export default App;
