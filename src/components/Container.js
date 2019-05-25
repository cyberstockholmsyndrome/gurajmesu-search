import React, { useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

import Content from "../components/Content";

ReactModal.setAppElement("#root");

const StyledWrapper = styled.div`
  background: url("https://i.imgur.com/SdXO5wk.png") no-repeat center
    center/cover;
  position: relative;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  &::after {
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
  top: 2em;
  right: 50%;
  transform: translateX(50%);
  font-size: 3em;

  @media only screen and (min-width: 768px) {
    font-size: 5em;
    top: 1.5em;
  }
`;

const ModalText = styled.p`
  margin-top: 10em;

  @media only screen and (min-width: 768px) {
    font-size: 2em;
    width: 75%;
    text-align: center;
    display: inline-block;
  }
`;

function Container() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
        <ModalHeading>Oblivion</ModalHeading>
        <ModalText>
          Another walk about, after dark It's my point of view If someone could
          break your neck Coming up behind you always coming and you'd never
          have a clue And now I'm left behind, all the time I will wait forever,
          always looking straight Thinking, counting, all the hours you wait See
          you on a dark night See you on a dark night See you on a dark night
          See you on a dark night And now another clue, I would ask If you could
          help me out It's hard to understand Cause when you're really by
          yourself It's hard to find someone to hold your hand And now it's
          gonna be, tough on me But I will wait forever I need someone now to
          look into my eyes and tell me Girl you know you gotta watch your
          health To look into my eyes and tell me La la la la la To look…
        </ModalText>
      </ReactModal>
    </StyledWrapper>
  );
}

export default Container;
