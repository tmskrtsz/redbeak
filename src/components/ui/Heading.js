import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Column } from './Grid'
import { rgba } from 'polished'

const Title = styled.h1`
  color: ${ props => props.theme.color.primary };
`

const Subtitle = styled.h2`
  color: ${ props => (props.tinted ? rgba(props.theme.color.text, 0.5) : props.theme.color.text) };
  font-size: 2.6rem;
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
  font-weight: 400;
  position: relative;

  &::before {
    content: '${ props => props.firstChar }';
    position: absolute;
    top: -14px;
    left: 50%;
    font-size: 7rem;
    line-height: 1;
    z-index: -1;
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

const SectionHeading = ({ children }) => {
  return (
    <Section>
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
