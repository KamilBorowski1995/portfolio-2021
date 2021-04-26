import "./App.css";

import Cursor from "./components/Cursor/Cursor";
import Nav from "./components/Nav/Nav";
import Header from "./views/Header/Header";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      {/* <Nav /> */}
    </div>
  );
}

export default App;
