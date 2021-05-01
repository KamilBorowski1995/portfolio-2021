import styled from "styled-components";

import SVGAJs from "../../assets/svg/js.svg";
import SVGANode from "../../assets/svg/nodejs.svg";
import SVGReact from "../../assets/svg/react.svg";

import SVGGithub from "../../assets/svg/github.svg";
import SVGPlay from "../../assets/svg/play.svg";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 25px auto;

  font-family: "Handlee";
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const WrapperTech = styled.div``;

const WrapperImages = styled.div``;

const StyledImageBox = styled.div`
  width: 500px;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  color: #171717;

  :hover > img {
    transform: scale(1.2);
  }

  :hover > div {
    opacity: 0.9;
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

  opacity: 0;
  transition: 0.4s ease-in-out;
`;

const StyledTitle = styled.h3`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
  padding: 20px;
`;

const StyledSvg = styled.img`
  width: 50px;
  padding: 0 10px 30px;
`;
const StyledSvgLink = styled(StyledSvg)`
  width: 70px;
  transition: 0.2s linear;
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
          <div>
            {tech.map((el) => {
              if (el === "react")
                return <StyledSvg src={SVGReact} alt="obrazek ze strony" />;
              if (el === "node")
                return <StyledSvg src={SVGANode} alt="obrazek ze strony" />;
              if (el === "js")
                return <StyledSvg src={SVGAJs} alt="obrazek ze strony" />;
              else return null;
            })}
          </div>
          <StyledSvgLink src={SVGGithub} alt="obrazek ze strony" />
          <StyledSvgLink src={SVGPlay} alt="obrazek ze strony" />
        </WrapperInfo>
      </StyledImageBox>
    </Wrapper>
  );
};

export default ProjectElement;
