import React, { Fragment, Component } from 'react'
import styled from 'styled-components'

const winner = 500

const Ball = styled.div`
  animation: moveX 4.05s linear 0s infinite alternate, moveY 4.4s linear 0s infinite alternate;
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
      score: 0,
    }
    this.gotIt = this.gotIt.bind(this)
  }

  gotIt () {
    this.setState({
      score: this.state.score + 100,
    })
  }

  render () {
    const { score } = this.state

    return (
      <Fragment>
        <Score>{score}</Score>
        { score < winner ? (
          <Fragment>
            <Ball onClick={this.gotIt} />
            <p>You're now offline</p>
            <p>There isn't much point in linking other web resources</p>
            <p>Play a game instead: catch the ball!</p>
          </Fragment>
        ) : <p>YOU WON!</p> }
      </Fragment>
    )
  }
}
