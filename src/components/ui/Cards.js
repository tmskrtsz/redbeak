import styled from 'styled-components'
import { timingFunctions, rgba, darken, shade } from 'polished'

const Cover = styled.div`
  width: 338px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 25%);
  transition: transform 0.25s ${ timingFunctions('easeInOutQuad') };
`

const Meta = styled.div`
  max-width: 80%;
`

const Title = styled.h2`
  margin: 0;
`

const Subtitle = styled.p`
  padding: 0;
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
`

export { Card, Title, Cover, Subtitle, Meta }
