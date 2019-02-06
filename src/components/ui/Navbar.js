import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../../store'

import { Link as GatsbyLink } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from './TransitionLink'
import theme from '../../theme/light'

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${ props => props.theme.color.text };
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 0 1.8em;
    outline: 0;

    :focus {
      color: ${ props => props.theme.color.primary };
    }

    &.active {
      color: ${ props => props.theme.color.primary };
    }
  }
`

export default class extends Component {
  active = {
    color: theme.color.primary
  }

  state = {
    links: [
      {
        to: 'work',
        name: {
          normal: 'Work',
          douche: 'Arté'
        },
        anchor: true
      },
      {
        to: 'contact',
        name: {
          normal: 'Contact',
          douche: 'Inquiries'
        },
        anchor: true
      },
      {
        to: 'about',
        name: {
          normal: 'About',
          douche: 'About Him'
        },
        anchor: false
      }
    ]
  }

  render () {
    const { location } = this.props
    const { links } = this.state
    return (
      <Consumer>
        {({ douche }) => (
          <Navbar location={location}>
            {links.map((link, idx) => {
              if (location.pathname === '/' && link.anchor) {
                return (
                  <ScrollLink
                    activeClass="active"
                    key={idx}
                    to={link.to}
                    href={`/#${ link.to }`}
                    offset={50}
                    smooth={true}
                    duration={700}
                    spy={true}
                    hashSpy={true}
                  >
                    {douche ? link.name.douche : link.name.normal}
                  </ScrollLink>
                )
              } else if (!link.anchor) {
                return (
                  // About link
                  <Link
                    key={idx}
                    to={link.to}
                    activeStyle={this.active}
                  >
                    {douche ? link.name.douche : link.name.normal}
                  </Link>
                )
              } else {
                return (
                  <GatsbyLink
                    key={idx}
                    to="/"
                  >
                    {douche ? link.name.douche : link.name.normal}
                  </GatsbyLink>
                )
              }
            })}
          </Navbar>
        )}
      </Consumer>
    )
  }
}
