import styled from "styled-components";
import ProjectElement from "../../components/ProjectElement/ProjectElement";

import Title from "../../components/Title/Title";

import { projectsList } from "../../dataBase/dataBase";

const Wrapper = styled.section`
  background-color: #171717;
  padding: 100px;

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

const Project = () => {
  return (
    <Wrapper id="projects" data-anim="fade-opacity-long">
      <StyledTitle id="projectsTitle">#Projekty</StyledTitle>
      <WrapperElements>
        {projectsList.map(({ name, tech, link, image }) => (
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
