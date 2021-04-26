import styled from "styled-components";
import GH_SVG from "../../assets/svg/iconGitGub.svg";
import FB_SVG from "../../assets/svg/iconFacebook.svg";

const Wrapper = styled.nav`
  /* background-color: #fff; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  padding: 20px;
  margin-left: 100px;
`;

const StyledLink = styled.a`
  margin-left: 10px;
`;

const Nav = () => {
  return (
    <Wrapper>
      <StyledLink
        href="https://github.com/KamilBorowski1995"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GH_SVG} alt="Github Logo z linkiem" />
      </StyledLink>
      <StyledLink
        href="https://github.com/KamilBorowski1995"
        target="_blank"
        rel="noreferrer"
      >
        <img src={FB_SVG} alt="Facebook Logo z linkiem" />
      </StyledLink>
    </Wrapper>
  );
};

export default Nav;
