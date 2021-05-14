import { useEffect, useRef } from "react";
import styled from "styled-components";

const WrapperElement = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;

  margin: 0 20px 50px;

  :hover {
    transform: scale(1.15);
  }
`;

const StyledImage = styled.img`
  padding: 15px;

  max-height: 100px;
`;

const Paragraph = styled.p`
  font-family: "Handlee", sans-serif;
  text-transform: uppercase;

  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const LogoSkills = ({ name, path, from, scrollTop }) => {
  const ref = useRef(null);

  useEffect(() => {
    const offsetTopElement = ref.current.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.75 < scrollTop) {
      const element = document.getElementById(`${name}`);
      element.style.animation = `fadeUp 2s both`;
    }
  }, [name, scrollTop]);

  return (
    <WrapperElement id={name} key={name} ref={ref}>
      <StyledImage src={path} alt={from} />
      <Paragraph>{name}</Paragraph>
    </WrapperElement>
  );
};

export default LogoSkills;
