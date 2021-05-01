import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Handlee";
  letter-spacing: 5px;
  text-transform: uppercase;

  font-size: 50px;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
