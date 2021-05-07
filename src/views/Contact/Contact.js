import styled from "styled-components";

import Title from "../../components/Title/Title";
import SVG_Github from "../../assets/svg/github.svg";
import SVG_Linkedin from "../../assets/svg/linkedin.svg";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 100px;

  @media (max-width: 800px) {
    padding: 25px;
  }
`;

const StyledMailLink = styled.p`
  font-family: "Roboto Condensed", sans-serif;

  color: #171717;
  cursor: none;
  text-decoration: none;
  font-size: 36px;

  margin: 36px 0;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const StyledLink = styled.a`
  margin: 0 40px;
  cursor: none;
`;

const StyledImage = styled.img`
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.3);
  }
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Title>#Kontakt</Title>
      <StyledMailLink>k.borowski@onet.pl</StyledMailLink>

      <div>
        <StyledLink
          href="https://github.com/KamilBorowski1995"
          target="_blank"
          rel="noreferrer"
        >
          <StyledImage src={SVG_Github} alt="Github Logo z SimpleIcons.org." />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/kamil-borowski-44b95a104/"
          target="_blank"
          rel="noreferrer"
        >
          <StyledImage
            src={SVG_Linkedin}
            alt="Linkedin Logo z SimpleIcons.org."
          />
        </StyledLink>
      </div>
    </Wrapper>
  );
};

export default Contact;
