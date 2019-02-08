import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { rgba, timingFunctions } from 'polished'

const Anim = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
const Success = css`
  border-color: #72ed97;
`

const Danger = css`
  border-color: ${ props => props.theme.color.primary };
`

const ToastStyle = styled.div`
  position: fixed;
  bottom: 4%;
  right: 4%;
  border-radius: 4px;
  background-color: ${ props => props.theme.input.bg };
  box-shadow: 0 4px 20px -4px ${ rgba('black', 0.2) };
  padding: 0.5em 1em;
  font-size: 1.7rem;
  border-left: 4px solid;
  opacity: 0;
  transform: translateY(100%);
  animation: ${ Anim } 0.25s ${ timingFunctions('easeInOutExpo') } forwards;

  ${ ({ type }) => type === 'success' && Success };
  ${ ({ type }) => type === 'danger' && Danger };
`

const Toast = ({ msg, type }) => <ToastStyle type={type}>{msg}</ToastStyle>

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'danger']),
  msg: PropTypes.string
}

export default Toast
