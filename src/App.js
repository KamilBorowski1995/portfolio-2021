import { useEffect } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import axios from "axios";

import "./App.css";

import Cursor from "./components/Cursor/Cursor";
import Home from "./pages/Home.js";

function App() {
  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    axios
      .get("https://kamilborowskiportfolio.herokuapp.com/contact")
      .then(function (response) {})
      .catch(function (error) {})
      .then(function () {});
  }, []);

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Cursor />
      <Home />
      {/* <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" timeout={2000}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
