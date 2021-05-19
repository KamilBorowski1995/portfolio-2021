import styled, { keyframes } from "styled-components";

import SubPages from "../templates/SubPages";
import { coursesEndList } from "../dataBase/dataBase";

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

const StyledTitleCategory = styled.h3`
  text-transform: capitalize;

  font-size: 32px;
  margin: 30px 0;

  @media (max-width: 800px) {
    font-size: 26px;
  }
  opacity: 0;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  animation-name: ${animateFadeUp};
`;

const WrapperCourse = styled.div`
  margin: 20px auto;
  opacity: 0;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 2.6s;
  animation-name: ${animateFadeUp};

  width: max-content;

  :hover p {
    transform: scale(1.1);
  }
`;
const StyledParagraph = styled.p`
  font-size: 18px;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  :nth-last-of-type(1) {
    font-size: 14px;
  }

  @media (max-width: 800px) {
    font-size: 16px;

    :nth-last-of-type(1) {
      font-size: 14px;
    }
  }
`;

const Courses = () => {
  return (
    <SubPages title="Ukończone kursy">
      {coursesEndList.map(({ name, courses }) => (
        <div key={name}>
          <StyledTitleCategory>{name}</StyledTitleCategory>
          <div>
            {courses.map(({ name, from }) => (
              <WrapperCourse key={name}>
                <StyledParagraph>- {name}</StyledParagraph>
                <StyledParagraph>{from}</StyledParagraph>
              </WrapperCourse>
            ))}
          </div>
        </div>
      ))}
    </SubPages>
  );
};

export default Courses;
