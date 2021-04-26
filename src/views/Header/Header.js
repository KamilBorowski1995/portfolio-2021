import styled, { keyframes } from "styled-components";

import Circle from "../../components/Circle/Circle";

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

const Wrapper = styled.header`
  scroll-margin: 10px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  position: relative;
  background-color: #171717;
  color: #dbdbdb;
  width: 100vw;
  padding: 10px;
  /* height: calc(100vh - 100px); */
  /* width: 100vw; */
  /* margin: 50px auto 0; */
  margin: 0 auto;
  height: 100%;
  font-family: "Handlee";
  /* font-family: "Ink Free"; */
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const WrapperText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const StyledButton = styled.button`
  position: absolute;
  transform: translateX(-50%);
  bottom: 100px;
  /* width: 250px; */
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  background-color: transparent;
  padding: 15px 40px;
  text-transform: uppercase;
  color: #f5f5f5;
  cursor: none;

  font-family: "Roboto Condensed", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;

  transition: 0.3s ease-in-out;
  z-index: 0;
  :hover {
    background-color: #313131;
    color: #f5f5f5;
    border: 1px solid #313131;
  }
`;

const Header = () => {
  const LetterMap = ({ children }) => {
    const array = [];
    for (let i = 0; i < children.length; i++) {
      array.push(children[i]);
    }
    return array.map((el) => {
      if (el === " ") {
        return <LetterWhite>{el}</LetterWhite>;
      } else return <Letter>{el}</Letter>;
    });
  };

  return (
    <Wrapper className="App-header">
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
            <LetterMap>Junior </LetterMap>
          </ParagraphEdit>
          <ParagraphEdit>
            <LetterMap>fron-end </LetterMap>
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

      <StyledButton>Projekty</StyledButton>
    </Wrapper>
  );
};

export default Header;
