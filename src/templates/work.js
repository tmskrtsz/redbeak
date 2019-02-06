import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { graphql } from 'gatsby'
import RehypeReact from 'rehype-react'

import Seo from '../components/seo'
import { Container, Row, Column, Inner, Wrapper } from '../components/ui/Grid'
import Article, { Pagination } from '../components/ui/Article'
import { Link } from '../components/ui/TransitionLink'
import { Button } from '../components/ui/Buttons'
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

  time {
    color: ${ props => rgba(props.theme.color.text, 0.5) };
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
        description={work.frontmatter.intro}
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
                <time>{work.frontmatter.period}</time>
                <Subtitle tinted={true}>{work.frontmatter.intro}</Subtitle>
                {work.frontmatter.link && (
                  <Button
                    as="a"
                    href={work.frontmatter.link}
                    target="_blank"
                    rel="noopener"
                  >
                    View It Live
                  </Button>
                )}
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
          {renderAst(work.htmlAst)}
          <Container>
            <Row>
              {previous && (
                <Column>
                  <Pagination
                    to={previous.fields.slug}
                    rel="prev"
                    color={previous.frontmatter.bg}
                  >
                    <Inner>
                      <h4>Previous Case</h4>
                      {previous.frontmatter.title}
                    </Inner>
                  </Pagination>
                </Column>
              )}
              {next && (
                <Column align="flex-end">
                  <Pagination
                    to={next.fields.slug}
                    color={next.frontmatter.bg}
                    rel="next"
                    style={{ textAlign: 'right' }}
                  >
                    <Inner>
                      <h4>Next Case</h4>
                      {next.frontmatter.title}
                    </Inner>
                  </Pagination>
                </Column>
              )}
            </Row>
          </Container>
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
        period
        client
        roles
        tags
        intro
        link
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
