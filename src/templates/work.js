import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { graphql, Link } from 'gatsby'
import RehypeReact from 'rehype-react'

import Seo from '../components/seo'
import { Container, Row, Column, Inner, Wrapper } from '../components/ui/Grid'
import Article from '../components/ui/Article'
import { Subtitle } from '../components/ui/Heading'
import { FadeIn } from '../components/ui/Animations'

const Intro = styled(Column)`
  width: 60%;
  max-width: 60%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: auto;

  h1 {
    margin: 0;
  }

  small {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${ props => props.theme.color.primary };
    border-radius: 20px;
  }
`

const Meta = styled(Column)`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  margin-left: 4em;

  ${ Inner } {
    width: 100%;
  }

  h4 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 1.7rem;
    color: ${ props => rgba(props.theme.color.text, 0.5) };
  }
`

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    row: Row,
    column: Column,
    inner: Inner
  }
}).Compiler

export default ({ data, pageContext }) => {
  const { work } = data
  const getNoun = work.timeToRead <= 1 ? 'minute' : 'minutes'

  const { previous, next } = pageContext
  return (
    <>
      <Seo
        title={work.frontmatter.title}
        description={work.excerpt}
        keywords={[work.frontmatter.tags]}
      />
      <Wrapper
        anim={FadeIn}
        animDelay="0.3s"
      >
        <Container>
          <Row>
            <Intro>
              <Inner>
                <small>
                  Read Time: {work.timeToRead} {getNoun}
                </small>
                <h1>{work.frontmatter.title}</h1>
                <Subtitle tinted={true}>{work.frontmatter.intro}</Subtitle>
              </Inner>
            </Intro>
            <Meta>
              <Inner>
                <h4>Client</h4>
                <p>{work.frontmatter.client}</p>
              </Inner>
              <Inner>
                <h4>Roles</h4>
                <p>{work.frontmatter.roles}</p>
              </Inner>
            </Meta>
          </Row>
        </Container>
      </Wrapper>
      <Container>
        <Article
          anim={FadeIn}
          animDelay="0.5s"
        >
          <div>{renderAst(work.htmlAst)}</div>
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="prev"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              to={next.fields.slug}
              rel="next"
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </Article>
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    work: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      frontmatter {
        title
        client
        roles
        tags
        intro
        banner {
          childImageSharp {
            fluid(maxWidth: 760, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
