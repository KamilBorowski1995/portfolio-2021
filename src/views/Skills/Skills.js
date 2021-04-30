import styled from "styled-components";

import SVGAdobe from "../../assets/svg/adobexd.svg";
import SVGCss3 from "../../assets/svg/css3.svg";
import SVGGithub from "../../assets/svg/github.svg";
import SVGAHTML5 from "../../assets/svg/html5.svg";
import SVGAJs from "../../assets/svg/js.svg";
import SVGANode from "../../assets/svg/node.svg";
import SVGReact from "../../assets/svg/react.svg";

const db = [
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
    from: "https://simpleicons.org/",
  },
  {
    name: "html5",
    path: SVGAHTML5,
    from: "https://simpleicons.org/",
  },
  {
    name: "github",
    path: SVGGithub,
    from: "https://simpleicons.org/",
  },
  {
    name: "css3",
    path: SVGCss3,
    from: "https://simpleicons.org/",
  },
  {
    name: "adobexd",
    path: SVGAdobe,
    from: "https://simpleicons.org/",
  },
];

const Wrapper = styled.div`
  scroll-margin: 10px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  background-color: #f5f5f5;
`;

const WrapperImg = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

const Skills = () => {
  return (
    <Wrapper>
      <h1>#Skillsy</h1>
      <WrapperImg>
        {db.map(({ name, path, from }) => (
          <img key={name} src={path} alt={from} />
        ))}
      </WrapperImg>
    </Wrapper>
  );
};

export default Skills;
