import styled from "styled-components";

import Title from "../../components/Title/Title";

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 100px;

  @media (max-width: 800px) {
    padding: 25px;
  }
`;

const WrapperImg = styled.div`
  max-width: 1100px;

  margin: 25px auto 0;
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
`;
const WrapperElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;

  margin: 0 20px 50px;

  :hover {
    transform: scale(1.15);
  }
`;

const StyledImage = styled.img`
  padding: 15px;

  max-height: 100px;
`;

const Paragraph = styled.p`
  font-family: "Handlee", sans-serif;
  text-transform: uppercase;

  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const Skills = ({ children, db }) => {
  return (
    <Wrapper id="skills">
      <Title>#{children}</Title>
      <WrapperImg>
        {db.map(({ name, path, from }) => (
          <WrapperElement>
            <StyledImage key={name} src={path} alt={from} />
            <Paragraph>{name}</Paragraph>
          </WrapperElement>
        ))}
      </WrapperImg>
    </Wrapper>
  );
};

export default Skills;
