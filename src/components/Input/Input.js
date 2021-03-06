import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  position: relative;

  grid-area: ${({ name }) => name};
`;

const StyledLabel = styled.label`
  cursor: pointer;
  position: absolute;
  left: 18px;
  top: 40px;
  transition: 0.3s ease-in-out;

  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#373738")};
  cursor: none;
`;

const StyledInput = styled.input`
  margin-top: 24px;
  border: none;
  width: 100%;
  height: 30px;
  cursor: pointer;
  padding: 10px;

  background-color: transparent;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#373738")};

  cursor: none;

  :focus ~ label {
    top: 10px;
    font-size: 14px;
  }

  :not(:placeholder-shown) ~ label {
    top: 10px;
    font-size: 14px;
  }
`;

const StyledBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#f1f1f1" : "#818181"};
`;

const Input = ({
  children,
  name,
  onMouseEnter,
  onMouseOut,
  set,
  value,
  theme,
}) => {
  return (
    <Wrapper name={name}>
      <StyledInput
        theme={theme}
        type="text"
        id={name}
        placeholder=" "
        value={value}
        onChange={(e) => set(e.target.value)}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      />
      <StyledLabel
        theme={theme}
        htmlFor={name}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      >
        {children}
      </StyledLabel>
      <StyledBar theme={theme}></StyledBar>
    </Wrapper>
  );
};

export default Input;
