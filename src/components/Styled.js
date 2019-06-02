import styled from "styled-components";

export const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
  top: 0.2em;
  right: 0.5em;
  font-size: 2.85em;
  padding: 0.25em;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const ModalHeading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  top: 3em;
  padding-bottom: 1em;

  ${({ theme }) => theme.media.desktop} {
    font-size: 5em;
    top: 2em;
  }
`;

export const ModalText = styled.p`
  padding-top: 10em;
  padding-bottom: 1em;
  white-space: pre-line;
  text-align: center;

  ${({ theme }) => theme.media.desktop} {
    font-size: 2em;
    padding-top: 8em;
  }
`;

export const Spinner = styled.div`
  position: absolute;
  display: inline-block;
  width: 64px;
  height: 64px;
  top: 14em;
  right: 52%;
  transform: translateX(50%);

  &::after {
    content: " ";
    display: block;
    width: 4em;
    height: 4em;
    margin: 1px;
    border-radius: 50%;
    border: 10px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ theme }) => theme.media.desktop} {
    top: 14em;
  }
`;

export const ContentWrapper = styled.div`
  text-align: center;
  position: relative;
`;

export const Heading = styled.h1`
  font-size: 3.2em;
  margin-top: 1em;

  ${({ theme }) => theme.media.desktop} {
    font-size: 5em;
    margin-top: 2em;
  }
`;

export const Paragraph = styled.p`
  font-size: 2.2em;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;

  ${({ theme }) => theme.media.desktop} {
    font-size: 2.5em;
    margin-top: 3em;
  }
`;

export const Input = styled.input`
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
