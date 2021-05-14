import styled, { keyframes, css } from "styled-components";

import Circle from "../../components/Circle/Circle";

import Arrow from "../../assets/svg/arrow.svg";

const rubberBand = keyframes`
from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const loadElement = keyframes`
from {
    transform: translateY(-10%);
    opacity: 0
  }
20% {
  opacity: 0
}
80% {
  opacity: 1
 }
  to {
    transform: translateY(0%);
 
  }
`;

const loadButton = keyframes`
from {
    transform: translate(-50% ,-10%);
    opacity: 0
  }
 

  to {
    transform: translate(-50%, 0);
    opacity: 1
  }
`;

const firstLoad = keyframes`
from { transform: translateY(100%) }
to { transform: translateY(0%) }
`;

const amimationButton = keyframes`
    0% {
      opacity: 1
    }
    35% {
      opacity: 0
    }
    65% {
      opacity: 0
    }   
    100% {
      opacity: 1
    }
`;

const Wrapper = styled.header`
  position: relative;
  background-color: #171717;
  color: #dbdbdb;
  width: 100vw;
  padding: 10px;
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
  font-family: "Handlee", sans-serif;

  letter-spacing: 5px;
  text-transform: uppercase;

  transition: 0.3s ease-in-out;

  clip-path: polygon(0 0%, 100% 0, 100% 100%, 0% 100%);

  animation: ${firstLoad} 0.5s ease-in-out;

  @media (min-width: 800px) {
    ${({ ticking }) =>
      ticking === true &&
      css`
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 97%);
      `}
  }
`;

const WrapperText = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${loadElement} 2s;
`;

const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 15px;
  z-index: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    font-size: 50px;
    flex-direction: column;
  }
`;
const TitleEdit = styled.div``;

const ParagraphEdit = styled.div`
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

const Letter = styled.span`
  display: inline-block;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  transition: 0.3s ease-in-out;

  :hover {
    animation-name: ${rubberBand};
    color: #525252;
  }
`;

const LetterWhite = styled(Letter)`
  width: 15px;
`;

const Paragraph = styled.p`
  font-size: 35px;
  z-index: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    font-size: 25px;
    flex-direction: column;
  }
`;

const StyledCircle = styled(Circle)`
  top: 0;

  :nth-child(2) {
    top: 15%;
    left: 25%;
  }
  :nth-child(3) {
    top: 12%;
    left: 61%;
  }
  :nth-child(4) {
    top: 45%;
    left: 48%;
  }
  :nth-child(5) {
    top: 60%;
    left: 35%;
  }
  :nth-child(6) {
    top: 23%;
    left: 50%;
  }
`;

const StyledButton = styled.a`
  position: absolute;
  transform: translateX(-50%);
  bottom: 100px;
  /* width: 250px; */
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  background-color: transparent;
  padding: 30px 40px;
  text-transform: uppercase;
  color: #f5f5f5;
  cursor: none;
  text-decoration: none;

  font-family: "Roboto Condensed", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;

  transition: 0.3s ease-in-out;
  z-index: 0;

  :hover {
    background-color: #313131;
    border: 1px solid #313131;
  }

  overflow: hidden;

  animation-duration: 1s;
  animation-fill-mode: backwards;
  animation-delay: 2s;
  animation-name: ${loadButton};

  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const StyledArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  animation: ${amimationButton} 3s infinite 2s;
`;

const Header = ({ ticking }) => {
  const LetterMap = ({ children }) => {
    const array = [];
    for (let i = 0; i < children.length; i++) {
      array.push(children[i]);
    }
    return array.map((el, index) => {
      if (el === " ") {
        return <LetterWhite key={el + index}>{el}</LetterWhite>;
      } else return <Letter key={el + index}>{el}</Letter>;
    });
  };

  const MouseEnter = () => {
    const mouse = document.querySelector(".cursorBorder");
    mouse.classList.add("active");
  };
  const MouseOut = () => {
    const mouse = document.querySelector(".cursorBorder");
    mouse.classList.remove("active");
  };

  return (
    <Wrapper id="home" className="App-header" ticking={ticking}>
      <WrapperText>
        <Title>
          <TitleEdit>
            <LetterMap>Kamil </LetterMap>
          </TitleEdit>
          <TitleEdit>
            <LetterMap>Borowski </LetterMap>
          </TitleEdit>
        </Title>
        <Paragraph>
          <ParagraphEdit>
            <LetterMap>Fron-end </LetterMap>
          </ParagraphEdit>
          <ParagraphEdit>
            <LetterMap>Developer </LetterMap>
          </ParagraphEdit>
        </Paragraph>
      </WrapperText>
      <StyledCircle size={380} />
      <StyledCircle size={200} />
      <StyledCircle size={300} />
      <StyledCircle size={150} />
      <StyledCircle size={130} />

      <StyledButton
        href="#skills"
        onMouseEnter={MouseEnter}
        onMouseOut={MouseOut}
      >
        <StyledArrow src={Arrow} alt="arrow" />
      </StyledButton>
    </Wrapper>
  );
};

export default Header;
