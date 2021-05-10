import styled from "styled-components";

import Title from "../../components/Title/Title";

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

const Skills = ({ children, db }) => {
  return (
    <Wrapper id="skills">
      <Title>#{children}</Title>
      <WrapperImg>
        {db.map(({ name, path, from }) => (
          <StyledImage key={name} src={path} alt={from} />
        ))}
      </WrapperImg>
    </Wrapper>
  );
};

export default Skills;
