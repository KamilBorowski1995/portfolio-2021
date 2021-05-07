import styled from "styled-components";

import Title from "../../components/Title/Title";

import SVGAdobe from "../../assets/svg/adobexd.svg";
import SVGCss3 from "../../assets/svg/css3.svg";
import SVGGithub from "../../assets/svg/github.svg";
import SVGAHTML5 from "../../assets/svg/html5.svg";
import SVGAJs from "../../assets/svg/js.svg";
import SVGANode from "../../assets/svg/nodejs.svg";
import SVGReact from "../../assets/svg/react.svg";
import SVGMongo from "../../assets/svg/mongodb.svg";

const db = [
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

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 100px;

  @media (max-width: 800px) {
    padding: 25px;
  }
`;

const WrapperImg = styled.div`
  max-width: 1400px;
  margin: 25px auto 0;
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  padding: 15px;
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.15);
  }
`;

const Skills = () => {
  return (
    <Wrapper id="skills">
      <Title>#Skillsy</Title>
      <WrapperImg>
        {db.map(({ name, path, from }) => (
          <StyledImage key={name} src={path} alt={from} />
        ))}
      </WrapperImg>
    </Wrapper>
  );
};

export default Skills;
