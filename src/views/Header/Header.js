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
  position: relative;
  background-color: #171717;
  color: #dbdbdb;
  width: 100vw;
  height: calc(100vh - 100px);
  /* width: 100vw;
  height: 100vh; */
  margin: 50px auto 0;
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
  font-size: 60px;
  margin-bottom: 20px;
  z-index: 1;
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
  width: 10px;
`;

const Paragraph = styled.p`
  font-size: 30px;
  z-index: 1;
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

const Header = () => {
  return (
    <Wrapper className="App-header">
      <WrapperText>
        <Title>
          <LetterMap>Kamil Borowski</LetterMap>
        </Title>
        <Paragraph>
          <LetterMap> Junior fron-end Developer</LetterMap>
        </Paragraph>
      </WrapperText>
      <StyledCircle size={380} />
      <StyledCircle size={200} />
      <StyledCircle size={300} />
      <StyledCircle size={150} />
      <StyledCircle size={130} />
    </Wrapper>
  );
};

export default Header;
