import React from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

injectGlobal`
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
    font-size: 20px;
    line-height: 1.5
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: calc(20px + 6 * ((100vw - 320px) / 680));
    }
  }

  @media screen and (min-width: 1000px) {
    html {
      font-size: 32px;
    }
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    overflow-x: hidden
    min-height: 100%;
    display: flex;
  }
`

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default hot(module)(App)
