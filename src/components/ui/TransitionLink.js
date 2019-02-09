import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { rgba, timingFunctions } from 'polished'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import theme from '../../theme/light'

const HoverStyle = css`
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35%;
    background-color: ${ props => rgba(props.theme.color.primary, 0.2) };
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
  }

  :hover {
    &::before {
      transform: scaleX(1);
      transition: transform 0.25s ${ timingFunctions('easeOutQuad') };
    }
  }
`

const LinkStyle = styled(AniLink)`
  ${ props => props.anchor && HoverStyle }
`

const Link = ({ children, color, ...other }) => (
  <LinkStyle
    {...other}
    cover
    direction="up"
    duration={0.9}
    bg={color || theme.color.primary}
  >
    {children}
  </LinkStyle>
)

LinkStyle.propTypes = {
  anchor: PropTypes.bool
}
Link.propTypes = {
  anchor: PropTypes.bool
}

export { Link, HoverStyle }
