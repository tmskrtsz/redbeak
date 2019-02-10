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
import Footer from '../components/Footer'

const Intro = styled(Column)`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  ${ Button } {
    align-self: flex-start;
  }
`

const Meta = styled(Column)`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-left: 4em;

  h4 {
    margin: 0;
  }

  p {
    margin: 0;
    margin-bottom: 1.2em;
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
          <Row
            grid={2}
            columns={[1.3, 1]}
          >
            <Intro>
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
            </Intro>
            <Meta>
              <h4>Client</h4>
              <p>{work.frontmatter.client}</p>

              <h4>Roles</h4>
              <p>{work.frontmatter.roles}</p>
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
            <Row grid={2}>
              <Column>
                {previous && (
                  <Pagination
                    to={previous.fields.slug}
                    rel="prev"
                    color={previous.frontmatter.bg}
                  >
                    <h4>Previous Case</h4>
                    {previous.frontmatter.title}
                  </Pagination>
                )}
              </Column>
              <Column align="flex-end">
                {next && (
                  <Pagination
                    to={next.fields.slug}
                    color={next.frontmatter.bg}
                    rel="next"
                    style={{ textAlign: 'right' }}
                  >
                    <h4>Next Case</h4>
                    {next.frontmatter.title}
                  </Pagination>
                )}
              </Column>
            </Row>
          </Container>
        </Article>
      </Container>
      <Footer />
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
