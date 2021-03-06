import styled from "styled-components";

const WrapperElement = styled.div`
  opacity: 0;

  margin: 0 20px 50px;
`;

const StyledScale = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: 0.3s ease-in-out;
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

const LogoSkills = ({ name, path, from, scrollTop }) => {
  return (
    <WrapperElement id={name} key={name} data-anim="fade-up">
      <StyledScale>
        <StyledImage src={path} alt={from} />
        <Paragraph>{name}</Paragraph>
      </StyledScale>
    </WrapperElement>
  );
};

export default LogoSkills;
