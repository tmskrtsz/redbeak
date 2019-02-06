import styled from 'styled-components'
import { rgba, shade, lighten } from 'polished'
import { Link } from './TransitionLink'

const Article = styled.article`
  margin-top: 5em;
  ${ props => props.anim };

  p {
    font-size: 2rem;
    color: ${ props => rgba(props.theme.color.text, 0.9) };
    line-height: 1.8;
    padding-bottom: 1.2em;
  }

  h4 {
    margin: 0;
    padding-top: 0.5em;
    letter-spacing: 1.5px;
  }

  .icon {
    width: 32px;
    height: 32px;

    img {
      max-height: 100%;
    }
  }

  hr {
    border: 0;
    width: 10%;
    border-width: 1px;
    border-style: solid;
    border-color: ${ props => rgba(props.theme.color.text, 0.12) };
    margin-top: 2em;
    margin-bottom: 4em;
    margin-left: 0;
  }
`

const Pagination = styled(Link)`
  width: 100%;
  margin: 4em 0;
  color: ${ props => props.theme.color.text };
  font-size: 2rem;
  transition: all 0.25s ease;

  :hover {
    opacity: 0.7;
  }

  h4 {
    color: ${ props => props.theme.color.primary };
    margin: 0;
    padding: 0;
  }
`

export { Article as default, Pagination }
