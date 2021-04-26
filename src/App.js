import styled from "styled-components";

import "./App.css";

import Cursor from "./components/Cursor/Cursor";
import Nav from "./components/Nav/Nav";
import Header from "./views/Header/Header";

const WrapperScrollSnapping = styled.div`
  height: 100vh;
  width: 100%;
  overflow: scroll;
  scroll-snap-type: y mandatory;

  ::-webkit-scrollbar {
    display: none;
  }

  // children
  /* scroll-margin: 10px;
  scroll-snap-align: start;
  scroll-snap-stop: normal; */
`;

function App() {
  return (
    <div className="App">
      <Cursor />
      <WrapperScrollSnapping>
        <Header />
        <Header />
      </WrapperScrollSnapping>

      <Nav />
    </div>
  );
}

export default App;
