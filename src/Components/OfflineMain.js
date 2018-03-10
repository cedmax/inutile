import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import Fireworks from 'fireworks-react'
import Konami from 'react-konami'

const getWindowSize = () => ({
  w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
})
const winnerStages = 500

const defaultState = {
  winner: winnerStages,
  score: 0,
  speed: 5,
  running: true,
  next: true,
  cheat: false,
}

const Ball = styled.div`
  animation: moveX ${props => `${props.speed}.05s`} linear 0s infinite alternate, moveY ${props => `${props.speed}.4s`} linear 0s infinite alternate;
  border-radius: 50px;
  background: red;
  width: 5vw;
  height: 5vw;
  position: absolute;
`

const Score = styled.div`
  font-family: Impact;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 200%;
  color: red;
`

const Button = styled.button`
  font-size: .5rem
`

const Center = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class Offline extends Component {
  constructor (props) {
    super(props)

    this.state = { ...defaultState }
    this.cheat = this.cheat.bind(this)
    this.speedUp = this.speedUp.bind(this)
    this.gotIt = this.gotIt.bind(this)
  }

  componentWillMount () {
    this.setState({ ...defaultState })
  }

  cheat () {
    this.setState({
      cheat: true,
    })
  }

  speedUp () {
    const { winner: oldWinner, speed: oldSpeed } = this.state
    const winner = oldWinner + winnerStages
    const speed = oldSpeed - 1

    if (speed > 2) {
      this.setState({
        running: true,
        winner,
        speed,
      })
    } else {
      this.setState({ next: false })
    }
  }

  gotIt () {
    const { score: oldScore, winner } = this.state
    const score = oldScore + 100
    const running = score < winner

    this.setState({
      score,
      running,
    })
  }

  render () {
    const { score, speed, running, next, cheat } = this.state

    return (
      <Fragment>
        <Konami easterEgg={this.cheat} />
        <Score>{score}</Score>
        { running ? (
          <Fragment>
            <Ball
              style={{
                '--max-x': 'calc(100vw - 5vw)',
                '--max-y': 'calc(100vh - 5vw)',
                animationDelay: `-${Math.floor(Math.random() * 100)}s`,
              }}
              onClick={this.gotIt} speed={cheat ? 100 : speed} />
            <p>You're now offline</p>
            <p>There isn't much point in linking other web resources</p>
            <p>Play a game instead: catch the ball!</p>
          </Fragment>
        ) : (
          <Fragment>
            {
              next
                ? (
                  <p>
                    You just ended level {score / winnerStages} of 3<br />
                    <Button onClick={this.speedUp}>NEXT</Button>
                  </p>
                ) : (
                  <Center>
                    <Fireworks width={getWindowSize().w} height={getWindowSize().h} />
                  </Center>
                )
            }
          </Fragment>
        )}
      </Fragment>
    )
  }
}
