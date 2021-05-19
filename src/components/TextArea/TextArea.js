import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;
  padding: 10px;
  position: relative;

  grid-area: ${({ name }) => name};
`;

const StyledLabel = styled.label`
  cursor: pointer;
  position: absolute;
  left: 18px;
  top: 0px;
  transition: 0.3s ease-in-out;

  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#373738")};
  cursor: none;
`;

const StyledTextArea = styled.textarea`
  margin-top: 24px;
  border: 1px solid
    ${({ theme }) => (theme === "light" ? "#ffffff" : "#a5a5a5")};

  width: 100%;
  height: 170px;
  cursor: pointer;
  padding: 10px;

  background-color: transparent;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#373738")};
  cursor: none;
`;

const TextArea = ({
  children,
  name,
  onMouseEnter,
  onMouseOut,
  value,
  set,
  theme,
}) => {
  return (
    <Wrapper name={name}>
      <StyledLabel
        theme={theme}
        htmlFor={name}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      >
        {children}
      </StyledLabel>
      <StyledTextArea
        theme={theme}
        type="text"
        id={name}
        placeholder=" "
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        value={value}
        onChange={(e) => set(e.target.value)}
      />
    </Wrapper>
  );
};

export default TextArea;
