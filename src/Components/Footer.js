import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  font-size: 50%;
  pointer-events: ${({ theme }) => theme.interaction};

  a:hover::after {
    pointer-events: none;
    animation: 1s linear infinite blinking;
    position: absolute;
    margin-left: .5rem;
    content: '<= the webmaster';
    color: ${({ theme }) => theme.a.active};
    display: inline;
    text-decoration: underline;
  }

  .offline & {
    pointer-events: ${({ theme }) => theme.offline.interaction};

    a:hover::after {
      color: ${({ theme }) => theme.offline.a.active};
    }
  }
`

export default () => (
  <Footer>
    <p>
      Another bad example of design by{' '}
      <a target="blank" rel="noopener" href="https://cedmax.com">cedmax</a>
    </p>

    <p>* speaking of unnecessary, have you considered going offline?</p>
  </Footer>
)
