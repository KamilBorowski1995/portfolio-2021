import styled from "styled-components";

import "./App.css";

import Cursor from "./components/Cursor/Cursor";
// import Nav from "./components/Nav/Nav";
import Header from "./views/Header/Header";
import Project from "./views/Project/Project";
import Skills from "./views/Skills/Skills";

const WrapperScrollSnapping = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  scroll-behavior: smooth;

  // children
  /* scroll-margin: 10px;
  scroll-snap-align: start;
  scroll-snap-stop: normal; */
`;

const FakeElement = styled.div`
  height: 300vh;
  background-color: royalblue;
`;

function App() {
  return (
    <div className="App">
      <Cursor />
      <WrapperScrollSnapping>
        <Header />
        <Skills />
        <Project />
        <FakeElement />
      </WrapperScrollSnapping>

      {/* <Nav /> */}
    </div>
  );
}

export default App;
