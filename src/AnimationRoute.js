import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/Home.js";
import Courses from "./pages/Courses.js";

import "./App.css";
import About from "./pages/About.js";

const AnimationRoute = () => {
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="slide"
          timeout={2000}
        >
          <Switch location={location}>
            <Route exact path="/portfolio-2021/" component={Home} />
            <Route exact path="/portfolio-2021/courses" component={Courses} />
            <Route exact path="/portfolio-2021/about" component={About} />
            <Route path="*" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default AnimationRoute;
