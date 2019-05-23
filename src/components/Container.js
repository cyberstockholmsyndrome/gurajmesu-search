import React from "react";
import styled from "styled-components";

import Content from "../components/Content";

const Wrapper = styled.div`
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

function Container() {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
}

export default Container;
