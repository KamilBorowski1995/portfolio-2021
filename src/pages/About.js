import styled, { keyframes } from "styled-components";

import Form from "../components/Form/Form";
import SubPages from "../templates/SubPages";

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

const StyledForm = styled(Form)`
  opacity: 0;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  animation-name: ${animateFadeUp};
`;

const About = () => {
  return (
    <SubPages title="Kontakt">
      <StyledForm theme="light" />
    </SubPages>
  );
};

export default About;
