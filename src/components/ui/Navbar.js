import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Consumer } from '../../store'

import { Link as GatsbyLink } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import { Link as TransitionLink, HoverStyle } from './TransitionLink'
import theme from '../../theme/light'

const MobileMenu = styled.button`
  position: absolute;
  top: 50%;
  right: 1.4em;
  z-index: 1500;
  color: ${ props => props.theme.color.text };
  display: none;
  transform: translateY(-50%);

  @media (max-width: ${ props => props.theme.breakpoints.md }) {
    display: inline-block;
  }
`

const BlurAnim = keyframes`
  0% {
    filter: blur(15px);
  }

  100% {
    filter: blur(0);
  }
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${ BlurAnim } 0.2s ease-in;

  a {
    color: ${ props => props.theme.color.text };
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0 1.8em;
    outline: 0;
    transition: color 0.25s ease;

    :hover {
      color: ${ props => props.theme.color.primary };
    }

    ${ HoverStyle }

    :focus {
      color: ${ props => props.theme.color.primary };
    }

    &.active {
      color: ${ props => props.theme.color.primary };
    }
  }

  @media (max-width: ${ props => props.theme.breakpoints.md }) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: ${ props => props.theme.color.bg };
    z-index: 1000;
    display: ${ props => (props.mobileActive ? 'flex' : 'none') };

    a {
      display: block;
      font-weight: 700;
      padding: 2em 0;
      font-size: 2rem;
    }
  }
`

export default class extends Component {
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

  active = {
    color: theme.color.primary
  }

  render () {
    const { location } = this.props
    const { links } = this.state
    return (
      <>
        <Consumer>
          {({ douche, menuActive, actions }) => (
            <Navbar
              location={location}
              mobileActive={menuActive}
              onClick={actions.handleMenuClick}
            >
              {links.map((link, idx) => {
                if (location.pathname === '/' && link.anchor) {
                  return (
                    <ScrollLink
                      activeClass="active"
                      key={idx}
                      to={link.to}
                      href={`/#${ link.to }`}
                      offset={70}
                      smooth={true}
                      duration={700}
                      spy={true}
                      hashSpy={true}
                      onClick={actions.handleMenuClick}
                    >
                      {douche ? link.name.douche : link.name.normal}
                    </ScrollLink>
                  )
                } else if (!link.anchor) {
                  return (
                    // About link
                    <TransitionLink
                      key={idx}
                      to={`/${ link.to }`}
                      activeStyle={this.active}
                    >
                      {douche ? link.name.douche : link.name.normal}
                    </TransitionLink>
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
        <Consumer>
          {({ actions, menuActive }) => (
            <MobileMenu onClick={actions.handleMenuClick}>{menuActive ? 'Close' : 'Menu'}</MobileMenu>
          )}
        </Consumer>
      </>
    )
  }
}
