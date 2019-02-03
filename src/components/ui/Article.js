import styled from 'styled-components'
import { rgba } from 'polished'

const Article = styled.article`
  margin-top: 5em;
  ${ props => props.anim };

  p {
    font-size: 2.2rem;
    color: ${ props => rgba(props.theme.color.text, 0.7) };
  }

  h4 {
    margin: 0;
    padding-top: 0.5em;
  }

  .icon {
    width: 32px;
    height: 32px;

    img {
      max-height: 100%;
    }
  }

  /* span.gatsby-resp-image-wrapper {
    margin-top: 5em;
    margin-bottom: 5em;
  } */
`

export default Article
