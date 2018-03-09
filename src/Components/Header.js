import React from 'react'
import styled from 'styled-components'
import Definition from '../Components/Definition'

const Title = styled.h1`
  span {
    font-size: 50%
  }
`

export default () => (
  <header>
    <Title>Inutile <span>by dsgn</span></Title>
    <Definition />
  </header>
)
