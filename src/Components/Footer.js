import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  font-size: 50%;

  a:hover::after {
    pointer-events: none;
    animation: 1s linear infinite blinking;
    position: absolute;
    margin-left: .5rem;
    content: '<= the webmaster';
    color: ${props => props.theme.a.active};
    display: inline;
    text-decoration: underline;
  }
`

export default () => (
  <Footer>
    Another bad example of design by{' '}
    <a target="blank" rel="noopener" href="https://cedmax.com">cedmax</a>
  </Footer>
)
