import React, { useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import axios from "axios";

import Content from "../components/Content";

ReactModal.setAppElement("#root");

const StyledWrapper = styled.div`
  background: url("https://i.imgur.com/SdXO5wk.png") no-repeat center
    center/cover;
  width: 100%;
  min-height: 100vh;
  filter: blur(4px);
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
  }
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

  ${({ theme }) => theme.media.desktop} {
    font-size: 2em;
    width: 75%;
    text-align: center;
    display: inline-block;
    padding-top: 8em;
  }
`;

const Spinner = styled.div`
  position: absolute;
  display: inline-block;
  width: 64px;
  height: 64px;
  top: 20em;
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

  const handleCloseModal = () => {
    setShowModal(false);
    setTitle("");
    setLyrics("");

    document.title = `Gurajmesu Search`;
  };

  const text = loading ? <Spinner /> : lyrics;

  return (
    <>
      <StyledWrapper>
        <ReactModal
          isOpen={showModal}
          contentLabel="Song Text"
          style={{
            overlay: {
              zIndex: "2",
              backgroundColor: "hsla(0, 0%, 0%, 0.6) "
            },
            content: {
              backgroundColor: "#61449C",
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
      <Content onSubmit={handleOpenModal} />
    </>
  );
};

export default Container;
