import styled from 'styled-components'
import { rgba, timingFunctions } from 'polished'

const Button = styled.button`
  display: inline-block;
  outline: 0;
  border: 2px solid ${ props => props.theme.button.border };
  color: ${ props => props.theme.button.color };
  padding: 0.8em 1.4em;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  background-color: ${ props => props.theme.color.bg };
  transition: all 0.25s ${ timingFunctions('easeOutQuad') };

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${ props => rgba(props.theme.color.primary, 0.3) };
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translate(0, 0);
    transition: all 0.25s ${ timingFunctions('easeOutQuad') };
  }

  &::after {
    content: '➜';
    display: inline-block;
    transform: translateX(0.5em);
    transition: transform 0.25s ${ timingFunctions('easeOutQuad') };
  }

  :hover {
    color: ${ props => props.theme.color.primary };
    border-color: ${ props => props.theme.color.primary };

    &::before {
      transform: translate(5%, -20%);
    }

    &::after {
      transform: translateX(1em);
    }
  }
`

export { Button }
