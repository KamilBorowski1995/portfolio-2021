import styled from "styled-components";
import ProjectElement from "../../components/ProjectElement/ProjectElement";

import Title from "../../components/Title/Title";

import CarPCImage from "../../assets/image/car-pc.png";
import CarPhone1Image from "../../assets/image/car-phone1.jpg";
import CarPhone2Image from "../../assets/image/car-phone2.jpg";

const db = [
  {
    name: "Car-sharing",
    tech: ["React"],
    image: [CarPCImage, CarPhone1Image, CarPhone2Image],
    link: {
      git: "https://github.com/KamilBorowski1995/car-sharing",
      live: "https://kamilborowski1995.github.io/car-sharing/",
    },
  },
  {
    name: "Car-sharing",
    tech: ["React"],
    image: [CarPCImage, CarPhone1Image, CarPhone2Image],
    link: {
      git: "https://github.com/KamilBorowski1995/car-sharing",
      live: "https://kamilborowski1995.github.io/car-sharing/",
    },
  },
  {
    name: "Car-sharing",
    tech: ["React"],
    image: [CarPCImage, CarPhone1Image, CarPhone2Image],
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
