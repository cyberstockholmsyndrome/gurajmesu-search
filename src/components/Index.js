import React, { useState } from "react";
import ReactModal from "react-modal";

import Content from "./Content";
import { IndexWrapper, Icon, ModalHeading, ModalText, Spinner } from "./Styled";

import { getLyrics } from "../api/lyricsApi";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");

  const handleOpenModal = async value => {
    setShowModal(true);
    setLoading(true);

    const response = await getLyrics(value);

    setLoading(false);
    setLyrics(response);
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
    <IndexWrapper>
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
    </IndexWrapper>
  );
};

export default Index;
