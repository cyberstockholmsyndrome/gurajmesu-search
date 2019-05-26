import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
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
  padding-top: 0.8em;
  font-size: 3.2em;

  ${({ theme }) => theme.media.desktop} {
    padding-top: 3em;
    font-size: 4.5em;
  }
`;

const Paragraph = styled.p`
  padding-top: 2em;
  font-size: 2em;

  ${({ theme }) => theme.media.desktop} {
    padding-top: 3em;
    font-size: 2.5em;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid hsl(0, 100%, 100%);
  font-size: 1.6em;
  color: hsl(0, 100%, 100%);
  font-family: ${({ theme }) => theme.font.primary};
  background-color: transparent;
  margin-top: 3em;
  text-align: center;
  padding-bottom: 0.2em;
  margin-bottom: 2em;
  width: 100%;

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
    margin-top: 5em;
    font-size: 2.5em;
  }
`;

const Content = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <StyledWrapper>
      <Heading>Gurajmesu Search</Heading>
      <Paragraph>
        Najlepsza wyszukiwarka tekstów utworów autorstwa Grimes.
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Tytuł utworu:" />
      </form>
    </StyledWrapper>
  );
};

export default Content;
