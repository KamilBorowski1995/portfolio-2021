import styled from "styled-components";

import SVGAJs from "../../assets/svg/js.svg";
import SVGANode from "../../assets/svg/nodejs.svg";
import SVGReact from "../../assets/svg/react.svg";

import SVGGithub from "../../assets/svg/github.svg";
import SVGPlay from "../../assets/svg/play.svg";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0px auto;

  font-family: "Handlee";
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const StyledImageBox = styled.div`
  /* min-width: 300px;
  max-width: 500px; */
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid #dbdbdb;
  position: relative;

  color: #171717;

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
  width: 50px;
  margin: 0 10px;

  @media (max-width: 800px) {
    width: 25px;
    margin: 0 5px;
  }
`;

const StyledLink = styled.a`
  margin: 0 20px;
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
  return (
    <Wrapper>
      <StyledImageBox>
        <StyledImage src={image} alt="obrazek ze strony" />
        <WrapperInfo>
          <StyledTitle>{name}</StyledTitle>
          <WrapperSvgLogos>
            {tech.map((el) => {
              if (el === "react")
                return <StyledSvg src={SVGReact} alt="obrazek ze strony" />;
              if (el === "node")
                return <StyledSvg src={SVGANode} alt="obrazek ze strony" />;
              if (el === "js")
                return <StyledSvg src={SVGAJs} alt="obrazek ze strony" />;
              else return null;
            })}
          </WrapperSvgLogos>
          <div>
            {link.git && (
              <StyledLink href={link.git} target="_blank" rel="noreferrer">
                <StyledSvgLink src={SVGGithub} alt="obrazek ze strony" />
              </StyledLink>
            )}

            {link.live && (
              <StyledLink href={link.live} target="_blank" rel="noreferrer">
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
