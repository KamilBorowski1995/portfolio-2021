import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Loader from "../Loader/Loader";

const Wrapper = styled.div`
  max-width: 640px;
  margin: 24px auto;
  display: grid;
  grid-template-areas:
    "name"
    "email"
    "message"
    "sendMessage"
    "button";
`;

const StyledSendMessage = styled.p`
  grid-area: sendMessage;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: ${({ theme }) => (theme === "light" ? "#f1f1f1" : "#818181")};

  transition: 0.3s ease-in-out;

  display: ${({ sendmessage }) => (sendmessage !== "" ? "block" : "none")};
`;

const StyledButton = styled.button`
  width: calc(100% - 20px);
  grid-area: button;

  margin: 20px 10px 0 auto;

  padding: 15px 60px;
  background: #f1f1f1;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: #171717;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);

  cursor: none;

  transition: 0.3s ease-in-out;

  :hover {
    background-color: #313131;
    color: #f1f1f1;
  }
`;

const Form = ({ className, theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendmessage, setSendmessage] = useState("");

  const [loaded, setLoaded] = useState(false);

  const MouseEnter = () => {
    const mouse = document.querySelector(".cursorBorder");
    mouse.classList.add("active");
  };
  const MouseOut = () => {
    const mouse = document.querySelector(".cursorBorder");
    mouse.classList.remove("active");
  };

  const sendEmail = () => {
    setLoaded(true);
    if (name !== "" && email !== "" && message !== "") {
      axios
        .post("https://kamilborowskiportfolio.herokuapp.com/contact", {
          name,
          email,
          message,
        })
        .then(function (response) {
          console.log(response);
          setSendmessage(response.data);
          setName("");
          setEmail("");
          setMessage("");

          setLoaded(false);

          setTimeout(() => {
            setSendmessage("");
          }, 10000);
        })
        .catch(function (error) {
          setLoaded(false);
          setSendmessage("Wyst??pi?? b????d podczas wysy??ania");
          setTimeout(() => {
            setSendmessage("");
          }, 10000);
        });
    } else {
      setSendmessage("Uzupe??nij wszystkie pola formularza");
      setLoaded(false);
    }
  };

  return (
    <Wrapper data-anim="fade-opacity-long" className={className}>
      {loaded ? (
        <Loader />
      ) : (
        <>
          <Input
            theme={theme}
            name="name"
            onMouseEnter={MouseEnter}
            onMouseOut={MouseOut}
            set={setName}
            value={name}
          >
            Wpisz swoje imi??
          </Input>
          <Input
            theme={theme}
            name="email"
            onMouseEnter={MouseEnter}
            onMouseOut={MouseOut}
            set={setEmail}
            value={email}
          >
            Wpisz sw??j email
          </Input>
          <TextArea
            theme={theme}
            name="message"
            onMouseEnter={MouseEnter}
            onMouseOut={MouseOut}
            set={setMessage}
            value={message}
          >
            Wiadomo????:
          </TextArea>
          <StyledSendMessage theme={theme} sendmessage={sendmessage}>
            {sendmessage}
          </StyledSendMessage>
          <StyledButton
            theme={theme}
            onMouseEnter={MouseEnter}
            onMouseOut={MouseOut}
            onClick={sendEmail}
            disabled={false}
          >
            Wy??lij
          </StyledButton>
        </>
      )}
    </Wrapper>
  );
};

export default Form;
