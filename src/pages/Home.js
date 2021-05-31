import { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import Animated from "../functions/Animated";

import Loader from "../components/Loader/Loader";

import Contact from "../views/Contact/Contact";
import Nav from "../components/Nav/Nav";
import Header from "../views/Header/Header";
import Project from "../views/Project/Project";
import Skills from "../views/Skills/Skills";

import { skillsList, learnSkillsList } from "../dataBase/dataBase";
import SmoothScroll from "../functions/SmoothScroll/SmoothScroll";

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

  const handleScroll = (e) => {
    setTicking(true);
    setScrollTop(e.target.scrollTop);

    // SmoothScroll(e);
  };

  return (
    <>
      {pageLoaded ? (
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <WrapperScrollSnapping ticking={ticking} onScroll={handleScroll}>
            <Header ticking={ticking} />
            <Skills
              db={skillsList}
              scrollTop={scrollTop}
              data-anim="fade-up"
              id="skills"
            >
              Skillsy
            </Skills>
            <Skills db={learnSkillsList} scrollTop={scrollTop} id="learn">
              W trakcie nauki
            </Skills>
            <Project scrollTop={scrollTop} />
            <Contact scrollTop={scrollTop} />
          </WrapperScrollSnapping>
          <Nav scrollTop={scrollTop} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
