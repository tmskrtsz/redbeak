import styled from 'styled-components'
import { timingFunctions, rgba, darken, shade } from 'polished'

const Cover = styled.div`
  width: 33.8rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 25%);
  transition: transform 0.25s ${ timingFunctions('easeInOutQuad') };

  @media (max-width: ${ props => props.theme.breakpoints.md }) {
    width: 23.8rem;
  }
`

const Meta = styled.div`
  max-width: 80%;

  @media (max-width: 98rem) {
    max-width: 100%;
  }

  @media (max-width: ${ props => props.theme.breakpoints.md }) {
    text-align: center;
  }
`

const Title = styled.h2`
  margin: 0;
`

const Subtitle = styled.p`
  padding: 0;

  @media (max-width: ${ props => props.theme.breakpoints.md }) {
    display: none;
  }

  @media (max-width: ${ props => props.theme.breakpoints.sm }) {
    display: inline;
  }
`

const Card = styled.div`
  background-color: ${ props => props.bg };
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  padding: 2em;
  display: flex;
  flex-direction: column;
  min-height: 54rem;
  transition: all 0.25s ${ timingFunctions('easeInOutQuad') };
  outline: 0;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px ${ props => rgba(darken(0.4, props.bg), 0.2) };

    ${ Cover } {
      transform: translate(-50%, 0%);
    }
  }

  ${ Title },
  ${ Subtitle } {
    color: ${ props => shade(0.7, props.bg) };
  }

  @media (max-width: 98rem) {
    min-height: 44rem;
  }

  @media (max-width: ${ props => props.theme.breakpoints.md }) {
    min-height: 34rem;
  }
`

export { Card, Title, Cover, Subtitle, Meta }
