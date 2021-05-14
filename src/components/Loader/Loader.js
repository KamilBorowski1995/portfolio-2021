import styled, { keyframes } from "styled-components";

const AnimationLoader = () => keyframes`
from {  transform:rotate(0)}
 to { transform:rotate(360deg)}
`;

const Wrapper = styled.div`
  margin: 20% auto 0;

  width: 100px;
  height: 100px;

  border-radius: 50%;
  border-right: 10px solid black;
  border-left: 10px solid black;
  border-top: 10px solid white;
  border-bottom: 10px solid white};

  animation: ${AnimationLoader} 1.5s ease-in-out infinite;
`;

const Loader = () => {
  return <Wrapper />;
};

export default Loader;
