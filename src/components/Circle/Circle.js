import { useState, useRef, useEffect } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: ${(props) => `${props.size / 20}vw`};
  height: ${(props) => `${props.size / 20}vw`};
  border-radius: 50%;
  background-color: #313131;
  transition: 1s;
`;

const Circle = ({ className, size = 200 }) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [posXCursor, setPosXCursor] = useState(0);
  const [posYCursor, setPosYCursor] = useState(0);

  const [position, setPosition] = useState("");

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
    // setPosX(posXCursor - leftEl);
  }
  // useEffect(() => {
  //   moveElement();
  // }, []);

  return (
    <Wrapper
      ref={refElement}
      size={size}
      className={className}
      style={style}
      //   onMouseDown={() => setGrab(true)}
      //   onMouseUp={() => setGrab(false)}
      onMouseEnter={
        moveElement
        // (e) => {
        // setPosX(e.clientX / 4);
        // setPosY(e.clientY / 4);
        // }
      }
    >
      {position}
    </Wrapper>
  );
};

export default Circle;
