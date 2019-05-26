import React, { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3.2em;
  position: absolute;
  top: 1em;

  ${({ theme }) => theme.media.desktop} {
    font-size: 5em;
    top: 3em;
  }
`;

const Paragraph = styled.p`
  font-size: 2.2em;
  position: absolute;
  top: 7.5em;

  ${({ theme }) => theme.media.desktop} {
    font-size: 2.5em;
    top: 12.5em;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid hsl(0, 100%, 100%);
  font-size: 2em;
  color: hsl(0, 100%, 100%);
  font-family: ${({ theme }) => theme.font.primary};
  background-color: transparent;
  text-align: center;
  width: 75%;
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 0.1em;

  &::placeholder {
    color: hsl(0, 100%, 100%);
    transition: transform 0.4s ease-out, opacity 0.5s ease-in;
    font-family: ${({ theme }) => theme.font.primary};
  }

  &:focus::placeholder {
    opacity: 0;
    transform: translateX(20px);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: 2.5em;
    bottom: 4.5em;
    width: 30%;
  }
`;

const Content = props => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(value);

    document.title = `Gurajmesu Search - ${value}`;
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <StyledWrapper>
      <Heading>Gurajmesu Search</Heading>
      <Paragraph>
        Najlepsza wyszukiwarka tekstów utworów autorstwa Grimes.
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Tytuł utworu:"
          value={value}
          onChange={handleChange}
        />
      </form>
    </StyledWrapper>
  );
};

export default Content;
