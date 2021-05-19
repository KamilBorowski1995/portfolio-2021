import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import axios from "axios";

import "./App.css";

import Cursor from "./components/Cursor/Cursor";

import AnimationRoute from "./AnimationRoute";
import NavPages from "./components/NavPages/NavPages";

function App() {
  useEffect(() => {
    axios
      .get("https://kamilborowskiportfolio.herokuapp.com/contact")
      .then(function (response) {})
      .catch(function (error) {})
      .then(function () {});
  }, []);

  return (
    <div className="App">
      <Router>
        <Cursor />
        <NavPages />
        <AnimationRoute />
      </Router>
    </div>
  );
}

export default App;
