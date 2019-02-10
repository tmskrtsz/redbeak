import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import { Consumer } from '../../store'
import Switch from './Switch'
import Navbar from './Navbar'
import { Link } from './TransitionLink'
import { Container, Row, Column, Inner } from './Grid'
import { FlyDown } from './Animations'
import _throttle from 'lodash/throttle'
import { animateScroll as scroll } from 'react-scroll'

import logo from '../../images/logo.svg'

const Header = styled.header`
  background-color: ${ props => (props.active ? rgba(props.theme.color.bg, 0.97) : 'transparent') };
  border-top: 2px solid ${ props => props.theme.color.primary };
  padding: ${ props => (props.active ? '0.4em' : '1.2em') } 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 30px ${ props => (props.active ? rgba(props.theme.color.dark, 0.12) : 'transparent') };
  transition: all 0.2s ease-in-out;
  ${ props => props.anim }

  ${ Row } {
    margin-left: 0;
    margin-right: 0;
  }
`

const Home = styled(Link)`
  background-image: url(${ logo });
  background-repeat: no-repeat;
  width: 72px;
  height: 54px;
  display: inline-block;
  text-indent: -9999px;
  overflow: hidden;
  outline: 0;
`

const ScrollUp = styled.button`
  background-color: ${ props => rgba(props.theme.color.primary, 0.1) };
  border: 0;
  border-radius: 30px;
  color: ${ props => props.theme.color.primary };
  font-size: 1.4rem;
  margin-left: 1.2em;
  margin-top: 0.6rem;
  padding: 0.6em 1em;
  cursor: pointer;
`

export default class extends PureComponent {
  state = {
    scrolling: false,
    showScrollUp: false
  }

  isScrolling = () => {
    if (window.pageYOffset > 0) {
      this.setState({ scrolling: true })
    } else {
      this.setState({
        scrolling: false,
        showScrollUp: false
      })
    }
  }

  isHovering = () => {
    if (window.pageYOffset > 0) {
      this.setState({ showScrollUp: true })
    }
  }

  scrollTop = () => {
    scroll.scrollToTop()
    this.setState({ showScrollUp: false })
  }

  componentDidMount () {
    window.addEventListener('scroll', _throttle(this.isScrolling, 250))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.isScrolling)
  }

  render () {
    const { scrolling, showScrollUp } = this.state
    const { location } = this.props
    return (
      <Header
        active={scrolling}
        anim={FlyDown}
        animDelay="0.5s"
      >
        <Container>
          <Row grid="3">
            <Column
              dir="row"
              align="center"
            >
              <Home
                onMouseOver={this.isHovering}
                onMouseLeave={this.isHovering}
                to="/"
              >
                Home
              </Home>
              {showScrollUp && <ScrollUp onClick={this.scrollTop}>Scroll Up</ScrollUp>}
            </Column>
            <Column
              justify="center"
              align="center"
            >
              <Navbar location={location} />
            </Column>
            <Column
              justify="center"
              align="flex-end"
            >
              <Consumer>{({ actions, douche }) => <Switch
                onClick={actions.switchTone}
                status={douche}
              />}</Consumer>
            </Column>
          </Row>
        </Container>
      </Header>
    )
  }
}
