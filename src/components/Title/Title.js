import { useEffect, useRef } from "react";

import styled from "styled-components";

const StyledTitle = styled.h2`
  opacity: 0;

  font-family: "Handlee", sans-serif;

  letter-spacing: 5px;
  text-transform: uppercase;

  font-size: 50px;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

const Title = ({ children, className, id, functionEl }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (functionEl) {
      functionEl(ref.current);
    }
  }, []);

  return (
    <StyledTitle className={className} id={id} ref={ref}>
      {children}
    </StyledTitle>
  );
};

export default Title;
