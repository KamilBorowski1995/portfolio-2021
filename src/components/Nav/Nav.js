import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  top: 50%;
  right: 50px;

  transform: translateY(-50%);

  @media (max-width: 800px) {
    right: 20px;
  }
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
    background-color: #494949;
    transform: scale(1.1);
  }
`;

const StyledLink = styled.a`
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
  });

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <Wrapper>
      <ul>
        <StyledLinkNav name="home" activePage={activePage}>
          <StyledLink href="#home"></StyledLink>
        </StyledLinkNav>
        <StyledLinkNav name="skills" activePage={activePage}>
          <StyledLink href="#skills"></StyledLink>
        </StyledLinkNav>
        <StyledLinkNav name="projects" activePage={activePage}>
          <StyledLink href="#projects"></StyledLink>
        </StyledLinkNav>
        <StyledLinkNav name="contact" activePage={activePage}>
          <StyledLink href="#contact"></StyledLink>
        </StyledLinkNav>
      </ul>
    </Wrapper>
  );
};

export default Nav;
