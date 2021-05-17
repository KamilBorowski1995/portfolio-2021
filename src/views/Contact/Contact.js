import { useState } from "react";
import styled from "styled-components";

import SVG_Github from "../../assets/svg/github.svg";
import SVG_Linkedin from "../../assets/svg/linkedin.svg";

import Form from "../../components/Form/Form";
import ViewTemplate from "../../templates/ViewTemplate";
import Loader from "../../components/Loader/Loader";

const StyledMailLink = styled.a`
  font-family: "Roboto Condensed", sans-serif;
  display: inline-block;
  color: #171717;
  cursor: none;
  text-decoration: none;
  font-size: 36px;

  margin: 36px 0;

  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

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
    transform: scale(1.1);
  }
`;

const Contact = ({ scrollTop }) => {
  const [loaded, setLoaded] = useState(false);

  const MouseEnter = () => {
    const mouse = document.querySelector(".cursorBorder");
    mouse.classList.add("active");
  };
  const MouseOut = () => {
    const mouse = document.querySelector(".cursorBorder");
    mouse.classList.remove("active");
  };

  return (
    <ViewTemplate
      id="contact"
      theme="light"
      name="Kontakt"
      scrollTop={scrollTop}
    >
      {loaded ? <Loader /> : <Form setLoaded={setLoaded} />}

      <StyledMailLink
        href="mailto:k.borowski@onet.pl"
        onMouseEnter={MouseEnter}
        onMouseOut={MouseOut}
        data-anim="fade-up"
      >
        k.borowski@onet.pl
      </StyledMailLink>
      <div>
        <StyledLink
          href="https://github.com/KamilBorowski1995"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={MouseEnter}
          onMouseOut={MouseOut}
          data-anim="fade-up"
        >
          <StyledImage src={SVG_Github} alt="Github Logo z SimpleIcons.org." />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/kamil-borowski-44b95a104/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={MouseEnter}
          onMouseOut={MouseOut}
          data-anim="fade-up"
        >
          <StyledImage
            src={SVG_Linkedin}
            alt="Linkedin Logo z SimpleIcons.org."
          />
        </StyledLink>
      </div>
    </ViewTemplate>
  );
};

export default Contact;
