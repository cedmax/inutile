import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './Pages/Home'

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size: 40px;
    --bg-color: #2b1165;
    --fg-color: #f54171;

    --bg-gradient: linear-gradient(
      180deg,
      var(--bg-color) 0%,
      rgba(26, 58, 130, 1) 37%,
      rgba(171, 36, 177, 1) 69%,
      var(--fg-color) 100%
    );

    --fg-gradient: linear-gradient(
      0deg,
      var(--bg-color) 0%,
      rgba(26, 58, 130, 1) 37%,
      rgba(171, 36, 177, 1) 69%,
      var(--fg-color) 100%
    );
  }

  @keyframes blinking {
    0% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }

  @keyframes moveX {
    from { left: 0 } to { left: var(--max-x); }
  }

  @keyframes moveY {
    from { top: 0; } to { top: var(--max-y); }
  }

  * {
    box-sizing: border-box;
    max-width: 100%;
  }

  html {
    font-size: var(--font-size);
    line-height: 1.6;
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: calc(var(--font-size) + 6 * ((100vw - 320px) / 680));
    }
  }

  @media screen and (min-width: 1000px) {
    html {
      font-size: calc(var(--font-size) * 1.6);
    }
  }

  html, body {
    height: 100%;
    line-height: 1;
    font-family: Verdana, Geneva, sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--bg-color);
    background: var(--fg-gradient);
    background-attachment: fixed;
  }

  #root {
    overflow-x: hidden;
    min-height: 100%;
    display: flex;
  }
`

export default ({ data }) => (
  <Fragment>
    <GlobalStyles />
    <Home />
  </Fragment>
)
