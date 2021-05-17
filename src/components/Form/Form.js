import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

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
  color: #171717;

  transition: 0.3s ease-in-out;

  display: ${({ sendmessage }) => (sendmessage !== "" ? "block" : "none")};
`;

const StyledButton = styled.button`
  width: 200px;
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

const Form = ({ setLoaded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendmessage, setSendmessage] = useState("");

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
      console.log("idziemy w axiosa");
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
          setSendmessage("Wystąpił błąd podczas wysyłania");
          setTimeout(() => {
            setSendmessage("");
          }, 10000);
        });
    } else {
      console.log("coś nie tak");
    }
  };

  return (
    <Wrapper data-anim="fade-up">
      <Input
        name="name"
        onMouseEnter={MouseEnter}
        onMouseOut={MouseOut}
        set={setName}
        value={name}
      >
        Wpisz swoje imię
      </Input>
      <Input
        name="email"
        onMouseEnter={MouseEnter}
        onMouseOut={MouseOut}
        set={setEmail}
        value={email}
      >
        Wpisz swój email
      </Input>
      <TextArea
        name="message"
        onMouseEnter={MouseEnter}
        onMouseOut={MouseOut}
        set={setMessage}
        value={message}
      >
        Wiadomość:
      </TextArea>
      <StyledSendMessage sendmessage={sendmessage}>
        {sendmessage}
      </StyledSendMessage>
      <StyledButton
        onMouseEnter={MouseEnter}
        onMouseOut={MouseOut}
        onClick={sendEmail}
        disabled={false}
      >
        Wyślij
      </StyledButton>
    </Wrapper>
  );
};

export default Form;
