import React, { Fragment, Component } from 'react'
import styled from 'styled-components'

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

export default class Offline extends Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: 500,
      score: 0,
      speed: 5,
      running: true,
      next: true,
    }
    this.speedUp = this.speedUp.bind(this)
    this.gotIt = this.gotIt.bind(this)
  }

  speedUp () {
    const { winner: oldWinner, speed: oldSpeed } = this.state
    const winner = oldWinner + 500
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
    const { score, speed, running, next } = this.state

    return (
      <Fragment>
        <Score>{score}</Score>
        { running ? (
          <Fragment>
            <Ball onClick={this.gotIt} speed={speed} />
            <p>You're now offline</p>
            <p>There isn't much point in linking other web resources</p>
            <p>Play a game instead: catch the ball!</p>
          </Fragment>
        ) : (
          <Fragment>
            <p>
              { next ? <input onClick={this.speedUp} type="button" value="NEXT" /> : 'YOU WON!'}
            </p>
          </Fragment>
        )
        }
      </Fragment>
    )
  }
}
