import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Handlee", sans-serif;

  letter-spacing: 5px;
  text-transform: uppercase;

  font-size: 50px;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

const Title = ({ children, className }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default Title;
