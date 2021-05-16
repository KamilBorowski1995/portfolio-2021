import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const loadElement = keyframes`
from {
    transform: translateY(-40%);
    opacity: 0
  }
  
   to {
    transform: translateY(-50%);
    opacity: 1
  }
`;

const Wrapper = styled.nav`
  position: fixed;
  top: 50%;
  right: 50px;

  transform: translateY(-50%);

  @media (max-width: 800px) {
    right: 20px;
  }

  animation-duration: 1s;
  animation-fill-mode: backwards;
  animation-delay: 1.5s;
  animation-name: ${loadElement};
`;

const StyledLinkNav = styled.li`
  width: 20px;
  height: 20px;
  background-color: ${({ name, activePage }) =>
    name === activePage ? "#6b6b6b" : "#313131"};
  margin: 20px 0;

  border-radius: 50%;

  transition: 0.3s ease-in-out;
  list-style: none;

  @media (max-width: 800px) {
    width: 15px;
    height: 15px;
  }

  :hover {
    background-color: #9e9e9e;
    transform: scale(1.3);
  }
`;

const StyledLink = styled.a`
  cursor: none;
  display: block;
  width: 100%;
  height: 100%;
`;

const Nav = ({ scrollTop }) => {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const home = document.getElementById("home");
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    const arrayElements = [home, skills, projects, contact];

    for (let i = 0; i < arrayElements.length; i++) {
      if (
        scrollTop >= arrayElements[i].offsetTop &&
        scrollTop < arrayElements[i + 1].offsetTop
      ) {
        setActivePage(arrayElements[i].id);
      }
    }
  }, [scrollTop]);

  const MouseEnter = () => {
    const mouse = document.querySelector(".cursorBorder");
    mouse.classList.add("active");
  };
  const MouseOut = () => {
    const mouse = document.querySelector(".cursorBorder");
    mouse.classList.remove("active");
  };

  return (
    <Wrapper>
      <ul>
        <StyledLinkNav
          name="home"
          activePage={activePage}
          onMouseEnter={MouseEnter}
          onMouseOut={MouseOut}
        >
          <StyledLink href="#home"></StyledLink>
        </StyledLinkNav>
        <StyledLinkNav
          name="skills"
          activePage={activePage}
          onMouseEnter={MouseEnter}
          onMouseOut={MouseOut}
        >
          <StyledLink href="#skills"></StyledLink>
        </StyledLinkNav>
        <StyledLinkNav
          name="projects"
          activePage={activePage}
          onMouseEnter={MouseEnter}
          onMouseOut={MouseOut}
        >
          <StyledLink href="#projects"></StyledLink>
        </StyledLinkNav>
        <StyledLinkNav
          name="contact"
          activePage={activePage}
          onMouseEnter={MouseEnter}
          onMouseOut={MouseOut}
        >
          <StyledLink href="#contact"></StyledLink>
        </StyledLinkNav>
      </ul>
    </Wrapper>
  );
};

export default Nav;
