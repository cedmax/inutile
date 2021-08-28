import React from 'react'
import styled from 'styled-components'
import data from '../projects'


const List = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: .5em;
    padding: .1em .1em .1em 0;
    background:  ${({ theme }) => theme.a.bk};
  }

  li:hover {
    background:  ${({ theme }) => theme.front};
  }
  
  li a {
    padding-right: 2.5em;
  }

  a::before {
    content: '';
    border-color: transparent ${({ theme }) => theme.a.default};
    border-style: solid;
    border-width: 0.35em 0 0.35em 0.45em;
    height: 0;
    width: 0;
    left: -0.2em;
    position: relative;
    display: inline-block;
  }

  a::after {
    pointer-events: none;
    position: absolute;
    margin-left: 0.5rem;
    display: inline;
    text-decoration: underline;
  }

  a:not(:visited)::after {
    animation: 1s linear infinite blinking;
    content: 'NEW!';
    color: ${({ theme }) => theme.a.active};
  }

  li:nth-child(2n) a::after {
    animation-delay: 0.2s;
    animation-duration: 1.3s;
  }

  li:nth-child(3n) a::after {
    animation-delay: 0.3s;
    animation-duration: 0.8s;
  }

  li:nth-child(4n) a::after {
    animation-delay: 0.7s;
    animation-duration: 0.1.1s;
  }

  li:nth-child(5n) a::after {
    animation-delay: 0.9s;
  }

  li a:visited::before {
    border-color: ${({ theme }) => theme.a.visited};
  }

  li a:active::before {
    border-left-color: red;
  }

  li a:visited::after {
    color: ${({ theme }) => theme.a.bk};
    text-decoration-color: ${({ theme }) => theme.a.bk};
  }

  li:hover  a:visited::after {
    color: ${({ theme }) => theme.front};
    text-decoration-color: ${({ theme }) => theme.front};
  }
`

const Li = styled.li`
  margin-left: ${() => Math.random()*1.1}em;
`

export default () => (
  <List>
    {data.map(prj => (
      <Li key={prj.homepage}>
        <a target="blank" rel="noopener" href={prj.homepage}>
          {prj.description}
        </a>
      </Li>
    ))}
  </List>
)
