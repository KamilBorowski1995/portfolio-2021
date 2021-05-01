import styled from "styled-components";
import ProjectElement from "../../components/ProjectElement/ProjectElement";

import Title from "../../components/Title/Title";

import CarPage from "../../assets/image/carpage.png";
import CosmosWarGamePage from "../../assets/image/cosmoswar.png";
import FotoikaPage from "../../assets/image/fotoika.png";
import ProxPage from "../../assets/image/prox-shop.png";
import ManaorderPage from "../../assets/image/manaorder-1.png";

const db = [
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
    tech: ["react", "node"],
    image: FotoikaPage,
    link: {
      live: "http://fotoika.com/",
    },
  },
  {
    name: "Prox - Sklep",
    tech: ["react", "node"],
    image: ProxPage,
    link: {},
  },
  {
    name: "Manaorder",
    tech: ["react", "node"],
    image: ManaorderPage,
    link: {},
  },
];

const Wrapper = styled.div`
  background-color: #171717;
  padding: 50px;

  color: #f5f5f5;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 50px;
`;

const WrapperElements = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; */

  max-width: 1400px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Project = () => {
  return (
    <Wrapper>
      <StyledTitle>#Projekty</StyledTitle>
      <WrapperElements>
        {db.map(({ name, tech, link, image }) => (
          <ProjectElement
            key={name}
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
