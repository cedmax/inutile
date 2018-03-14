import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OnlineMain from '../Components/OnlineMain'
import OfflineMain from '../Components/OfflineMain'

let Offline
let Online
if (typeof window !== 'undefined') {
  const reactDetect = require('react-detect-offline')
  Offline = reactDetect.Offline
  Online = reactDetect.Online
}

const theme = {
  interaction: 'unset',
  bk: 'white',
  front: 'black',
  a: {
    default: '#0000EE',
    visited: '#551A8B',
    active: '#ff0000',
  },
  offline: {
    interaction: 'none',
    bk: '#222',
    front: 'white',
    a: {
      default: '#ee7700',
      visited: '#8b711a',
      active: '#00FF00',
    },
  },
}

const themableProps = theme => `
  user-select: ${theme.interaction};
  background: ${theme.bk};
  color: ${theme.front};

  a {
    color: ${theme.a.default};

    &:visited {
      color: ${theme.a.visited};
    }

    &:active {
      color: ${theme.a.active};
    }
  }
`

const BodyStyle = styled.div`
  background: red;
  min-height: 100%;
  padding: 0 2vw 2vw;
  position: relative;
  width: 100%;
  ${themableProps(theme)}

  .offline & {
    ${themableProps(theme.offline)}
  }
`

const HomePage = ({ offline }) => (
  <ThemeProvider theme={theme}>
    <BodyStyle>
      <Header />
      { offline ? <OfflineMain /> : <OnlineMain /> }
      <Footer />
    </BodyStyle>
  </ThemeProvider>
)

export default () => (
  (typeof window !== 'undefined') ? (
    <Fragment>
      <Online><HomePage /></Online>
      <Offline><HomePage offline /></Offline>
    </Fragment>
  ) : <HomePage />
)
