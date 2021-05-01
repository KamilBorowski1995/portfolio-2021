import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  max-width: 1400px;
  margin: 25px auto;

  grid-template-columns: 40% 50%;
  justify-content: space-between;

  font-family: "Handlee";
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const WrapperTech = styled.div``;

const WrapperImages = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%; */

  display: grid;
  grid-template-areas:
    "pc pc"
    "mobileOne mobileTwo";

  grid-gap: 20px;
`;

const StyledImageBox = styled.div`
  grid-area: ${({ title }) => `${title}`};
  width: ${({ title }) => (title === "pc" ? "100%" : " 70%;")};

  justify-self: center;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const ProjectElement = ({ name, tech, link, image }) => {
  return (
    <Wrapper>
      <WrapperInfo>
        <h3>{name}</h3>
        <WrapperTech>
          {tech.map((el) => (
            <p key={name + el}>- {el} </p>
          ))}
        </WrapperTech>
        <p>git: {link.git}</p>
        <p>live: {link.live}</p>
      </WrapperInfo>
      <WrapperImages>
        <StyledImageBox title="pc">
          <StyledImage src={image[0]} alt="obrazek ze strony" />
        </StyledImageBox>
        <StyledImageBox title="mobileOne">
          <StyledImage src={image[1]} alt="obrazek ze strony" />
        </StyledImageBox>
        <StyledImageBox title="mobileTwo">
          <StyledImage src={image[2]} alt="obrazek ze strony" />
        </StyledImageBox>
      </WrapperImages>
    </Wrapper>
  );
};

export default ProjectElement;
