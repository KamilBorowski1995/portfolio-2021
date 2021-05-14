import { useState, useRef } from "react";

import styled, { keyframes } from "styled-components";

const loadElement = keyframes`
from {
    transform: translateY(-10%);
    opacity: 0
  }
  
   to {
    transform: translateY(0%);
    opacity: 1
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: ${(props) => `${props.size / 20}vw`};
  height: ${(props) => `${props.size / 20}vw`};
  border-radius: 50%;
  background-color: #313131;
  transition: 1s;

  animation-duration: 0.8s;
  animation-fill-mode: backwards;
  animation-delay: 2s;
  animation-name: ${loadElement};

  @media (max-width: 800px) {
    width: ${(props) => `${props.size / 15}vw`};
    height: ${(props) => `${props.size / 15}vw`};
  }
`;

const Circle = ({ className, size = 200 }) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [posXCursor, setPosXCursor] = useState(0);
  const [posYCursor, setPosYCursor] = useState(0);

  const refElement = useRef(null);

  const style = {
    transform: `translate(${posX}px, ${posY}px) `,
  };

  function moveElement(e) {
    const topEl = refElement.current.offsetTop;
    const leftEl = refElement.current.offsetLeft;
    const widthEl = refElement.current.clientWidth;

    window.addEventListener("mousemove", (e) => {
      setPosXCursor(e.clientX);
      setPosYCursor(e.clientY);
    });
    if (posXCursor >= leftEl + widthEl / 2) {
      setPosX((prev) => prev - 20);
    } else {
      setPosX((prev) => prev + 20);
    }
    if (posYCursor >= topEl + widthEl / 2) {
      setPosY((prev) => prev - 20);
    } else {
      setPosY((prev) => prev + 20);
    }
  }

  return (
    <Wrapper
      ref={refElement}
      size={size}
      className={className}
      style={style}
      onMouseEnter={moveElement}
    ></Wrapper>
  );
};

export default Circle;
