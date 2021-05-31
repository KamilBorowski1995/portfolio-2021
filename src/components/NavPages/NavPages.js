import { useState } from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;

const Burger = styled.div`
  position: fixed;
  height: 30px;
  top: 40px;
  left: 60px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  mix-blend-mode: difference;

  ::before {
    position: absolute;
    z-index: 10;
    content: "";
    transform: scale(1.2);
    width: 100%;
    height: 100%;
  }
`;

const StyledBurgerElement = styled.span`
  display: block;
  width: 40px;
  height: 5px;
  background-color: #f1f1f1;
  border-radius: 50px;
  transition: 0.3s ease-in-out;

  transform: translateY(0);

  :nth-child(1) {
    transform: ${({ openNav }) => openNav && "translateY(13px) rotate(45deg)"};
  }
  :nth-child(2) {
    opacity: ${({ openNav }) => openNav && "0"};
  }
  :nth-child(3) {
    transform: ${({ openNav }) =>
      openNav && "translateY(-12px) rotate(-45deg)"};
  }
`;

const WrapperPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #131313;
  width: 100vw;
  height: 100vh;
  transition: 0.3s ease-in-out;
  /* opacity: ${({ openNav }) => (openNav ? "1" : "0")}; */
  transform: ${({ openNav }) =>
    openNav ? "translateX(0)" : "translateX(100%)"};
`;

const StyledNav = styled.nav`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledLink = styled(NavLink)`
  margin: 0 auto;
  width: max-content;
  font-family: "Handlee", sans-serif;

  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 50px;
  text-decoration: none;
  color: #f1f1f1;
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
    color: #a5a5a5;
  }
  &.selected {
    border-bottom: 2px solid #f1f1f1;
  }
`;

const NavPages = () => {
  const [openNav, setOpenNav] = useState(false);

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
      <Burger
        onClick={() => {
          setOpenNav((prev) => !prev);
        }}
        onMouseEnter={MouseEnter}
        onMouseOut={MouseOut}
      >
        <StyledBurgerElement openNav={openNav}></StyledBurgerElement>
        <StyledBurgerElement openNav={openNav}></StyledBurgerElement>
        <StyledBurgerElement openNav={openNav}></StyledBurgerElement>
      </Burger>
      <WrapperPopup openNav={openNav}>
        <StyledNav>
          <StyledLink
            exact
            to="/portfolio-2021/"
            onClick={() => setOpenNav(false)}
            onMouseEnter={MouseEnter}
            onMouseOut={MouseOut}
            activeClassName="selected"
          >
            home
          </StyledLink>
          <StyledLink
            exact
            to="/portfolio-2021/courses"
            onClick={() => setOpenNav(false)}
            onMouseEnter={MouseEnter}
            onMouseOut={MouseOut}
            activeClassName="selected"
          >
            kursy
          </StyledLink>
          <StyledLink
            exact
            to="/portfolio-2021/about"
            onClick={() => setOpenNav(false)}
            onMouseEnter={MouseEnter}
            onMouseOut={MouseOut}
            activeClassName="selected"
          >
            Kontakt
          </StyledLink>
        </StyledNav>
      </WrapperPopup>
    </Wrapper>
  );
};

export default NavPages;
