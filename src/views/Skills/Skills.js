import styled from "styled-components";
import LogoSkills from "../../components/LogoSkills/LogoSkills";

import ViewTemplate from "../../templates/ViewTemplate";

const WrapperImg = styled.div`
  max-width: 1100px;

  margin: 25px auto 0;
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
`;

const Skills = ({ children, db, scrollTop, id }) => {
  return (
    <ViewTemplate id={id} theme="light" name={children} scrollTop={scrollTop}>
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
    </ViewTemplate>
  );
};

export default Skills;
