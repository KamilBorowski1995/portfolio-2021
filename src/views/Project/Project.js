import styled from "styled-components";
import ProjectElement from "../../components/ProjectElement/ProjectElement";

import Title from "../../components/Title/Title";

import CarPCImage from "../../assets/image/car-pc.png";

const db = [
  {
    name: "Car-sharing",
    tech: ["react"],
    image: CarPCImage,
    link: {
      git: "https://github.com/KamilBorowski1995/car-sharing",
      live: "https://kamilborowski1995.github.io/car-sharing/",
    },
  },
  {
    name: "Car-sharing",
    tech: ["react", "node", "js"],
    image: CarPCImage,
    link: {
      git: "https://github.com/KamilBorowski1995/car-sharing",
      live: "https://kamilborowski1995.github.io/car-sharing/",
    },
  },
  {
    name: "Car-sharing",
    tech: ["js"],
    image: CarPCImage,
    link: {
      git: "https://github.com/KamilBorowski1995/car-sharing",
      live: "https://kamilborowski1995.github.io/car-sharing/",
    },
  },
];

const Wrapper = styled.div`
  background-color: #171717;
  padding: 50px;

  color: #f5f5f5;
`;

const Project = () => {
  return (
    <Wrapper>
      <Title>#Project</Title>
      {db.map(({ name, tech, link, image }) => (
        <ProjectElement
          key={name}
          name={name}
          tech={tech}
          link={link}
          image={image}
        />
      ))}
    </Wrapper>
  );
};

export default Project;
