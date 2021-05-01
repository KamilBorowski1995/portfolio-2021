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
  padding: 60px 20px;
  margin-left: 100px;
`;

const StyledLink = styled.a`
  margin-left: 20px;
  cursor: none;
`;

const StyledImage = styled.img`
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.3);
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <StyledLink
        href="https://github.com/KamilBorowski1995"
        target="_blank"
        rel="noreferrer"
      >
        <StyledImage src={GH_SVG} alt="Github Logo z linkiem" />
      </StyledLink>
      <StyledLink
        href="https://github.com/KamilBorowski1995"
        target="_blank"
        rel="noreferrer"
      >
        <StyledImage src={FB_SVG} alt="Facebook Logo z linkiem" />
      </StyledLink>
    </Wrapper>
  );
};

export default Nav;
