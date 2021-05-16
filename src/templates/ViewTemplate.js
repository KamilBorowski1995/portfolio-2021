import { useEffect, useRef } from "react";
import styled from "styled-components";

import Title from "../components/Title/Title";

const Wrapper = styled.section`
  background-color: ${({ theme }) =>
    theme === "dark" ? "#171717" : "#f5f5f5"};
  color: ${({ theme }) => (theme === "dark" ? "#f5f5f5" : "#171717")};
  padding: 100px;

  :nth-child(3) {
    padding: 0 100px;
  }

  @media (max-width: 800px) {
    padding: 25px;
  }
`;

const ViewTemplate = ({ children, theme, name, id, scrollTop }) => {
  const ref = useRef(null);

  useEffect(() => {
    const offsetTopElement = ref.current.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.75 < scrollTop) {
      const element = document.getElementById(`${name}`);

      element.style.animation = `fadeUp 1s both`;
    }
  }, [name, scrollTop]);

  return (
    <Wrapper id={id} ref={ref} theme={theme}>
      <Title id={name}>#{name}</Title>
      {children}
    </Wrapper>
  );
};

export default ViewTemplate;
