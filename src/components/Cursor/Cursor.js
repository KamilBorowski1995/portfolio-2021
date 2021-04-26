import { useEffect, useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
  pointer-events: none;
  width: 30px;
  height: 30px;
  mix-blend-mode: difference;
`;

const CursorCircle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 33%;
  height: 33%;
  background-color: #dbdbdb;
  border-radius: 50%;
`;

const CursorBorder = styled(CursorCircle)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 2px solid #dbdbdb;
  transition: 0.15s;
`;

const Cursor = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const styleCursor = {
    transform: `translate(${posX}px, ${posY}px) `,
  };
  const styleCursorBorder = {
    transform: `translate(${posX - 10}px, ${posY - 10}px) `,
  };

  function positionCursor() {
    window.addEventListener("mousemove", (e) => {
      setPosX(e.clientX);
      setPosY(e.clientY);
    });
  }
  useEffect(() => {
    positionCursor();
  }, []);
  return (
    <Wrapper>
      <CursorCircle style={styleCursor} />
      <CursorBorder style={styleCursorBorder} />
    </Wrapper>
  );
};
export default Cursor;
