import React, { Fragment } from 'react'
import { Offline, Online } from 'react-detect-offline'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OnlineMain from '../Components/OnlineMain'
import OfflineMain from '../Components/OfflineMain'

const theme = {
  online: {
    interaction: 'unset',
    bk: 'white',
    front: 'black',
    a: {
      default: '#0000EE',
      visited: '#551A8B',
      active: '#ff0000',
    },
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

const BodyStyle = styled.div`
  background: red;
  min-height: 100%;
  padding: 0 2vw 2vw;
  position: relative;
  width: 100%;
  user-select: ${props => props.theme.interaction};
  background: ${props => props.theme.bk};
  color: ${props => props.theme.front};

  a {
    color: ${props => props.theme.a.default};

    &:visited {
      color: ${props => props.theme.a.visited};
    }

    &:active {
      color: ${props => props.theme.a.active};
    }
  }
`

const HomePage = ({ theme, offline }) => (
  <ThemeProvider theme={theme}>
    <BodyStyle>
      <Header />
      { offline ? <OfflineMain /> : <OnlineMain /> }
      <Footer />
    </BodyStyle>
  </ThemeProvider>
)

export default () => (
  <Fragment>
    <Online><HomePage theme={theme.online} offline={false} /></Online>
    <Offline><HomePage theme={theme.offline} offline /></Offline>
  </Fragment>
)
