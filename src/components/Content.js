import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h1`
  padding-top: 9rem;
  font-size: 3.5em;
`;

const Paragraph = styled.p`
  padding-top: 2em;
  font-size: 2em;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid hsl(0, 100%, 100%);
  font-size: 1.6em;
  color: hsl(0, 100%, 100%);
  font-family: "Montserrat";
  background-color: transparent;
  margin-top: 3em;
  text-align: center;
  padding-bottom: 0.2em;

  &::placeholder {
    color: hsl(0, 100%, 100%);
    transition: transform 0.4s ease-out, opacity 0.5s ease-in;
    font-family: "Montserrat";
  }

  &:focus::placeholder {
    opacity: 0;
    transform: translateX(20px);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid hsl(189, 100%, 50%);
  }
`;

function Content() {
  return (
    <Wrapper>
      <Heading>Gurajmesu Search</Heading>
      <Paragraph>
        Najlepsza wyszukiwarka tekstów utworów autorstwa Grimes.
      </Paragraph>
      <form action="#">
        <Input type="text" placeholder="Tytuł utworu:" />
      </form>
    </Wrapper>
  );
}

export default Content;
