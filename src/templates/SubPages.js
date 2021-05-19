import styled, { keyframes } from "styled-components";
import Title from "../components/Title/Title";

const animateFadeUp = keyframes`
from {
    opacity: 0;
    transform: translateY(50%)
}
to {
  opacity: 1;
    transform: translateY(0)
}
`;

const Wrapper = styled.div`
  padding: 60px;
  height: 100vh;
  width: 100vw;

  background-color: #171717;
  color: #f5f5f5;
  font-family: "Roboto", sans-serif;

  overflow-y: scroll;
  overflow-x: hidden;

  transition: 0.3s ease-in;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #171717;
  }
  ::-webkit-scrollbar-thumb {
    background: #313131;
    border-radius: 10px;
  }
`;

const StyledTitle = styled(Title)`
  font-family: "Roboto", sans-serif;
  opacity: 0;
  text-transform: capitalize;
  letter-spacing: 0px;
  font-size: 50px;

  @media (max-width: 800px) {
    font-size: 46px;
  }
  opacity: 0;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  animation-name: ${animateFadeUp};
`;
const SubPages = ({ children, title }) => {
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </Wrapper>
  );
};

export default SubPages;
