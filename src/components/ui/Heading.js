import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Column } from './Grid'
import { rgba } from 'polished'

const Title = styled.h1`
  color: ${ props => props.theme.color.primary };
`

const Subtitle = styled.h2`
  color: ${ props => (props.tinted ? rgba(props.theme.color.text, 0.7) : props.theme.color.text) };
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1.7;
`

const Section = styled(Row)`
  padding: 6em 0;
  text-align: center;
`

const Heading = styled.h2`
  text-transform: lowercase;
  font-size: 3.6rem;
  font-weight: 700;
  position: relative;
  z-index: 100;

  &::before {
    content: '${ props => props.firstChar }';
    position: absolute;
    top: -14px;
    left: 50%;
    font-size: 7rem;
    line-height: 1;
    z-index: 50;
    transform: translateX(-50%);
    color: ${ props => rgba(props.theme.color.text, 0.1) };
  }
`

const firstLetter = str => {
  if (typeof str === 'string') {
    return str.charAt(0).toLocaleLowerCase()
  } else {
    console.error('Supplied object is not of type string')
  }
}

const SectionHeading = ({ children, ...other }) => {
  return (
    <Section
      {...other}
      grid={1}
    >
      <Column>
        <Heading firstChar={firstLetter(children)}>{children}</Heading>
      </Column>
    </Section>
  )
}

Heading.propTypes = {
  firstChar: PropTypes.string
}

Subtitle.propTypes = {
  tinted: PropTypes.bool
}

export { Title, Subtitle, SectionHeading }
