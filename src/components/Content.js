import React, { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  text-align: center;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 3.2em;
  margin-top: 1em;

  ${({ theme }) => theme.media.desktop} {
    font-size: 5em;
    margin-top: 2em;
  }
`;

const Paragraph = styled.p`
  font-size: 2.2em;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;

  ${({ theme }) => theme.media.desktop} {
    font-size: 2.5em;
    margin-top: 3em;
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
  margin-top: 2.5em;
  margin-bottom: 1em;
  padding-bottom: 3px;

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
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: 2.5em;
    width: 40%;
    margin-top: 4em;
  }
`;

const Content = props => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(value);
    setValue("");
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
