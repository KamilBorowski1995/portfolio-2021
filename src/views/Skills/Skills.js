import { useEffect, useRef } from "react";
import styled from "styled-components";
import LogoSkills from "../../components/LogoSkills/LogoSkills";

import Title from "../../components/Title/Title";

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 100px;

  :nth-child(3) {
    padding: 0 100px;
  }

  @media (max-width: 800px) {
    padding: 25px;
  }
`;

const WrapperImg = styled.div`
  max-width: 1100px;

  margin: 25px auto 0;
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
`;

const Skills = ({ children, db, scrollTop }) => {
  const ref = useRef(null);

  useEffect(() => {
    const offsetTopElement = ref.current.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.75 < scrollTop) {
      const element = document.getElementById(`${children}`);
      element.style.animation = `fadeUp 1s both`;
    }
  }, [children, scrollTop]);

  return (
    <Wrapper id="skills" ref={ref}>
      <Title id={children}>#{children}</Title>
      <WrapperImg>
        {db.map(({ name, path, from }) => (
          <LogoSkills
            name={name}
            path={path}
            from={from}
            scrollTop={scrollTop}
          />
        ))}
      </WrapperImg>
    </Wrapper>
  );
};

export default Skills;
