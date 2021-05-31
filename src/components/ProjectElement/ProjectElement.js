import styled from "styled-components";

import "../../functions/Animated.css";

import SVGAJs from "../../assets/svg/js.svg";
import SVGANode from "../../assets/svg/nodejs.svg";
import SVGReact from "../../assets/svg/react.svg";
import SVGMongo from "../../assets/svg/mongodb.svg";

import SVGGithub from "../../assets/svg/github.svg";
import SVGPlay from "../../assets/svg/play.svg";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0px auto;

  font-family: "Handlee";
  letter-spacing: 5px;
  text-transform: uppercase;

  @media (max-width: 800px) {
    margin-bottom: 5px;
  }
`;

const StyledImageBox = styled.div`
  opacity: 0;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid #dbdbdb;
  position: relative;

  color: #171717;

  transition: 0.4s ease-in-out;

  :hover > img {
    transform: scale(1.2);
  }

  :hover > div {
    opacity: 0.9;
    transform: scale(1);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: 0.4s ease-in-out;
`;

const WrapperInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  opacity: 0;
  transform: scale(1.1);
  transition: 0.4s ease-in-out;
`;

const StyledTitle = styled.h3`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
  /* padding: 20px; */

  @media (max-width: 800px) {
    /* padding: 10px; */
  }
`;

const WrapperSvgLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 0 20px; */
`;

const StyledSvg = styled.img`
  height: 40px;
  margin: 0 10px;

  @media (max-width: 800px) {
    width: 25px;
    margin: 0 5px;
  }
`;

const StyledLink = styled.a`
  margin: 0 20px;
  cursor: none;
  @media (max-width: 800px) {
    margin: 0 10px;
  }
`;
const StyledSvgLink = styled.img`
  transition: 0.2s linear;

  width: 60px;

  @media (max-width: 800px) {
    width: 40px;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const ProjectElement = ({ name, tech, link, image }) => {
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
      <StyledImageBox data-anim="fade-opacity">
        <StyledImage src={image} alt="obrazek ze strony" />
        <WrapperInfo>
          <StyledTitle>{name}</StyledTitle>
          <WrapperSvgLogos>
            {tech.map((el) => {
              if (el === "react")
                return (
                  <StyledSvg key="logoReact" src={SVGReact} alt="logo react" />
                );
              if (el === "node")
                return (
                  <StyledSvg key="logoNode" src={SVGANode} alt="logo node.js" />
                );
              if (el === "mongodb")
                return (
                  <StyledSvg
                    key="logoMongoDb"
                    src={SVGMongo}
                    alt="logo mongodb"
                  />
                );
              if (el === "js") return <StyledSvg src={SVGAJs} alt="logo js" />;
              else return null;
            })}
          </WrapperSvgLogos>
          <div>
            {link.git && (
              <StyledLink
                href={link.git}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={MouseEnter}
                onMouseOut={MouseOut}
              >
                <StyledSvgLink src={SVGGithub} alt="obrazek ze strony" />
              </StyledLink>
            )}

            {link.live && (
              <StyledLink
                href={link.live}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={MouseEnter}
                onMouseOut={MouseOut}
              >
                <StyledSvgLink src={SVGPlay} alt="obrazek ze strony" />
              </StyledLink>
            )}
          </div>
        </WrapperInfo>
      </StyledImageBox>
    </Wrapper>
  );
};

export default ProjectElement;
