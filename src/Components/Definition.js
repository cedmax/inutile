import React from 'react'
import styled from 'styled-components'

const Dl = styled.dl`
  font-family: Courier, monospace;
  
  dd::before {
    background: #FFFFFF;
    border-left: .5rem solid #009900;
    border-right: .5rem solid #FF0000;
    content: '';
    display: inline-block;
    height: 1rem;
    margin-right: .5rem;
    vertical-align: middle;
    width: .5rem;
  }
`

export default () => (
  <Dl>
    <dt>Inutile</dt>
    <dd>useless, unnecessary<sup>*</sup>, pointless</dd>
  </Dl>
)
