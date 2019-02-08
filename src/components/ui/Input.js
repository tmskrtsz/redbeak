import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba, lighten } from 'polished'

import { Row, Column, Inner } from './Grid'
import { Button } from './Buttons'

const InputStyles = css`
  background-color: ${ props => lighten(0.05, props.theme.input.bg) };
  border: 2px solid ${ props => props.theme.input.border };
  color: ${ props => props.theme.input.color };
  padding: 0.6em 0.8em;
  width: 100%;
  box-sizing: border-box;
  transition: box-shadow, border-color 0.25s ease;

  :focus {
    border-color: ${ props => props.theme.color.primary };
    box-shadow: 0 0 0 4px ${ props => rgba(props.theme.color.primary, 0.12) };
  }
`

const Input = styled.input`
  ${ InputStyles }
`

const TextArea = styled.textarea`
  ${ InputStyles }
  min-height: 20rem;
`

const InputGroup = styled(Row)`
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0.7em;

  ${ Column } {
    padding: 0.5em;
  }

  ${ Button } {
    margin: 0.5em;
  }

  label {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0.5em;
  }
`

export { Input, InputGroup, TextArea }
