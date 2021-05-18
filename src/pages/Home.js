import { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import Animated from "../functions/Animated";

import Loader from "../components/Loader/Loader";

import Contact from "../views/Contact/Contact";
import Nav from "../components/Nav/Nav";
import Header from "../views/Header/Header";
import Project from "../views/Project/Project";
import Skills from "../views/Skills/Skills";

import SVGAdobe from "../assets/svg/adobexd.svg";
import SVGCss3 from "../assets/svg/css3.svg";
import SVGGithub from "../assets/svg/github.svg";
import SVGAHTML5 from "../assets/svg/html5.svg";
import SVGAJs from "../assets/svg/js.svg";
import SVGANode from "../assets/svg/nodejs.svg";
import SVGReact from "../assets/svg/react.svg";
import SVGMongo from "../assets/svg/mongodb.svg";
import SVGReactRouter from "../assets/svg/reactrouter.svg";
import SVGSass from "../assets/svg/sass.svg";
import SVGStoryBook from "../assets/svg/storybook.svg";
import SVGSC from "../assets/svg/sc.svg";
import SVGNest from "../assets/svg/nest.svg";
import SVGRedux from "../assets/svg/redux.svg";
import SVGTJ from "../assets/svg/ts.svg";

const dbSkills = [
  {
    name: "html5",
    path: SVGAHTML5,
    from: "https://simpleicons.org/",
  },
  {
    name: "css3",
    path: SVGCss3,
    from: "https://simpleicons.org/",
  },
  {
    name: "javascript",
    path: SVGAJs,
    from: "https://fontawesome.com/",
  },
  {
    name: "react",
    path: SVGReact,
    from: "https://simpleicons.org/",
  },
  {
    name: "React-Router",
    path: SVGReactRouter,
    from: "https://simpleicons.org/",
  },
  {
    name: "Sass",
    path: SVGSass,
    from: "https://simpleicons.org/",
  },
  {
    name: "Styled-Components",
    path: SVGSC,
    from: "https://simpleicons.org/",
  },
  {
    name: "StoryBook",
    path: SVGStoryBook,
    from: "https://simpleicons.org/",
  },
  {
    name: "node",
    path: SVGANode,
    from: "https://fontawesome.com/",
  },

  {
    name: "mongodb",
    path: SVGMongo,
    from: "https://simpleicons.org/",
  },
  {
    name: "github",
    path: SVGGithub,
    from: "https://simpleicons.org/",
  },

  {
    name: "adobexd",
    path: SVGAdobe,
    from: "https://simpleicons.org/",
  },
];

const dbLearn = [
  {
    name: "Nest.js",
    path: SVGNest,
    from: "https://seeklogo.com",
  },
  {
    name: "Redux",
    path: SVGRedux,
    from: "https://simpleicons.org/",
  },
  {
    name: "TypeScript",
    path: SVGTJ,
    from: "https://fontawesome.com/",
  },
];

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

const Home = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [ticking, setTicking] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    Animated(scrollTop);
  }, [scrollTop]);

  useEffect(() => {
    setTimeout(() => {
      setTicking(false);
    }, 1000);
  }, [ticking]);

  useEffect(() => {
    if (window.onload !== null) {
      window.onload = function () {
        setTimeout(() => setPageLoaded(true), 1000);
      };
    } else {
      setTimeout(() => setPageLoaded(true), 1000);
    }
  }, []);

  return (
    <>
      {pageLoaded ? (
        <>
          <WrapperScrollSnapping
            ticking={ticking}
            onScroll={(e) => {
              setTicking(true);
              setScrollTop(e.target.scrollTop);
            }}
          >
            <Header ticking={ticking} />
            <Skills
              db={dbSkills}
              scrollTop={scrollTop}
              data-anim="fade-up"
              id="skills"
            >
              Skillsy
            </Skills>
            <Skills db={dbLearn} scrollTop={scrollTop} id="learn">
              W trakcie nauki
            </Skills>
            <Project scrollTop={scrollTop} />
            <Contact scrollTop={scrollTop} />
          </WrapperScrollSnapping>

          <Nav scrollTop={scrollTop} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
