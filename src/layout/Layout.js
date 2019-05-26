import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "../utils/theme";
import SEO from "../components/SEO";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: ${({ theme }) => theme.font.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  text-align: center;
}

.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
}

.ReactModal__Overlay--after-open {
    opacity: 1;
}

.ReactModal__Overlay--before-close {
    opacity: 0;
}

::-webkit-scrollbar {
  width: 0 !important
}

::selection {
  background: #ff8ce8;
}

::-moz-selection {
  background: #ff8ce8;
}
`;

const Layout = ({ children }) => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  </>
);

export default Layout;
