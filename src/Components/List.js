import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;

  li a {
    padding-right: 2.5em;
  }

  li a::before {
    content: "";
    border-color: transparent ${({ theme }) => theme.a.default};
    border-style: solid;
    border-width: 0.35em 0 0.35em 0.45em;
    height: 0;
    width: 0;
    left: -.5em;
    position: relative;
    display: inline-block;
  }
  
  li a::after {
    pointer-events: none;
    animation: 1s linear infinite blinking;
    position: absolute;
    margin-left: .5rem;
    content: 'NEW!';
    color: ${({ theme }) => theme.a.active};
    display: inline;
    text-decoration: underline;
  }
  
  li:nth-child(2n) a::after {
    animation-delay: .2s;
    animation-duration: 1.3s;
  }
  
  li:nth-child(3n) a::after {
    animation-delay: .3s;
    animation-duration: .8s;
  }
  
  li:nth-child(4n) a::after {
    animation-delay: .7s;
    animation-duration: .1.1s;
  }
  
  li:nth-child(5n) a::after {
    animation-delay: .9s
  }
  
  li a:visited::before {
    border-color: ${({ theme }) => theme.a.visited};
  }
  
  li a:active::before {
    border-left-color: red;
  }
  
  li a:visited::after {
    color: white;
    text-decoration-color: white;
  }
`

export default () => (
  <List>
    <li><a target="blank" rel="noopener" href="https://safe.dsgn.it">Facebook marked safe generator</a></li>
    <li><a target="blank" rel="noopener" href="https://swear.at">Swearing gift cards</a></li>
    <li><a target="blank" rel="noopener" href="https://bearded.dsgn.it">How is my beard right now</a></li>
    <li><a target="blank" rel="noopener" href="https://baas.dsgn.it">Blasphemy as a service</a></li>
    <li><a target="blank" rel="noopener" href="https://swear.at/me">My better half swearing trends</a></li>
    <li><a target="blank" rel="noopener" href="https://memento-mori.dsgn.it">Get reminders about your future death</a></li>
    <li><a target="blank" rel="noopener" href="https://smartcookies.dsgn.it">Pseudo-sciencific intelligence traits, according to the internet</a></li>
    <li><a target="blank" rel="noopener" href="https://suchify.dsgn.it">Apply the face of my former team lead on other people's pics</a></li>
    <li><a target="blank" rel="noopener" href="https://trilogies.dsgn.it">Movies trilogies quality charts</a></li>
  </List>
)
