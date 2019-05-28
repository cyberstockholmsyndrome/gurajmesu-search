import React, { useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import axios from "axios";

import Content from "../components/Content";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  top: 0.2em;
  right: 0.5em;
  font-size: 2.85em;
  padding: 0.25em;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const ModalHeading = styled.h1`
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

const ModalText = styled.p`
  padding-top: 10em;
  padding-bottom: 1em;
  white-space: pre-line;
  text-align: center;

  ${({ theme }) => theme.media.desktop} {
    font-size: 2em;
    padding-top: 8em;
  }
`;

const Spinner = styled.div`
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

const Container = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");

  const handleOpenModal = value => {
    setShowModal(true);
    setLoading(true);
    axios
      .get(`https://api.lyrics.ovh/v1/grimes/${value}`)
      .then(res => res.data.lyrics)
      .then(res => {
        setLoading(false);
        setLyrics(res);
      })
      .catch(error => {
        setLoading(false);
        setLyrics("Nie znaleziono utworu");
      });

    setTitle(value);
  };

  const handleCloseModal = value => {
    setShowModal(false);
    setTitle("");
    setLyrics("");

    document.title = `Gurajmesu Search`;
  };

  const text = loading ? <Spinner /> : lyrics;

  return (
    <StyledWrapper>
      <Content onSubmit={handleOpenModal} />
      <ReactModal
        isOpen={showModal}
        contentLabel="Song Text"
        style={{
          overlay: {
            zIndex: "2",
            backgroundColor: "hsla(0, 0%, 0%, 0.6) "
          },
          content: {
            backgroundColor: "#F46286",
            border: "none",
            borderRadius: "36px"
          }
        }}
        closeTimeoutMS={500}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <Icon onClick={handleCloseModal}>
          <i className="fas fa-times" />
        </Icon>
        <ModalHeading>{title}</ModalHeading>
        <ModalText>{text}</ModalText>
      </ReactModal>
    </StyledWrapper>
  );
};

export default Container;
