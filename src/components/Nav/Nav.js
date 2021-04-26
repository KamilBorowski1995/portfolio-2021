import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
`;

const Nav = () => {
  return (
    <Wrapper>
      <p>Nav</p>
    </Wrapper>
  );
};

export default Nav;
