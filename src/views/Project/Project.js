import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProjectElement from "../../components/ProjectElement/ProjectElement";

import Title from "../../components/Title/Title";

import CarPage from "../../assets/image/carpage.png";
import CosmosWarGamePage from "../../assets/image/cosmoswar.png";
import FotoikaPage from "../../assets/image/fotoika.png";
import ProxPage from "../../assets/image/prox-shop.png";
import ManaorderPage from "../../assets/image/manaorder-1.png";
import Planner from "../../assets/image/planner.png";

const db = [
  {
    name: "Manaorder",
    tech: ["react", "node", "mongodb"],
    image: ManaorderPage,
    link: {
      git: "https://github.com/KamilBorowski1995/ManaOrder",
      live: "https://kamilborowski1995.github.io/ManaOrder/",
    },
  },

  {
    name: "CosmosWar",
    tech: ["react"],
    image: CosmosWarGamePage,
    link: {
      git: "https://github.com/KamilBorowski1995/cosmos-war",
      live: "https://kamilborowski1995.github.io/cosmos-war/",
    },
  },
  {
    name: "Fotoika.com",
    tech: ["react", "node", "mongodb"],
    image: FotoikaPage,
    link: {
      live: "http://fotoika.com/",
    },
  },
  {
    name: "Prox - Sklep",
    tech: ["react", "node", "mongodb"],
    image: ProxPage,
    link: {},
  },
  {
    name: "Car-sharing",
    tech: ["react"],
    image: CarPage,
    link: {
      git: "https://github.com/KamilBorowski1995/car-sharing",
      live: "https://kamilborowski1995.github.io/car-sharing/",
    },
  },
  {
    name: "Planner Mobile",
    tech: ["react", "node", "mongodb"],
    image: Planner,
    link: {
      git: "https://github.com/KamilBorowski1995/planner",
      live: "https://kamilborowski1995.github.io/planner/",
    },
  },
];

const Wrapper = styled.section`
  opacity: 0;
  background-color: #171717;
  padding: 100px;
  transform: scale(0);

  color: #f5f5f5;

  @media (max-width: 800px) {
    padding: 25px;
  }

  transition: 0.3s ease-in-out;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 50px;
`;

const WrapperElements = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Project = ({ scrollTop }) => {
  const [refTitle, setRefTitle] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const offsetTopElement = ref.current.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.75 < scrollTop) {
      const element = document.getElementById("projects");
      element.style.animation = `fadeOpacity 1s both`;
    }

    if (refTitle) {
      const offsetTopElementTitle = refTitle.offsetTop;
      if (offsetTopElementTitle - window.innerHeight * 0.75 < scrollTop) {
        const elementTitle = document.getElementById("projectsTitle");
        elementTitle.style.animation = `fadeUp 1s both`;
      }
    }
  }, [refTitle, scrollTop]);

  const showEl = (refTitle) => {
    setRefTitle(refTitle);
    console.log(refTitle);
  };

  return (
    <Wrapper id="projects" ref={ref}>
      <StyledTitle id="projectsTitle" functionEl={showEl}>
        #Projekty
      </StyledTitle>
      <WrapperElements>
        {db.map(({ name, tech, link, image }) => (
          <ProjectElement
            key={name + tech}
            name={name}
            tech={tech}
            link={link}
            image={image}
          />
        ))}
      </WrapperElements>
    </Wrapper>
  );
};

export default Project;
