import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from '../components/ui/TransitionLink'

import SEO from '../components/seo'
import { Container, Row, Column, Inner } from '../components/ui/Grid'
import { SectionHeading } from '../components/ui/Heading'
import Greeter from '../components/Greeter'
import { Card, Title, Cover } from '../components/ui/Cards'
import { FlyUp } from '../components/ui/Animations'

export default ({ data }) => {
  return (
    <>
      <SEO
        title="I break a few eggs to design for the web"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Container>
        <Row>
          <Column>
            <Inner>
              <Greeter />
            </Inner>
          </Column>
        </Row>
      </Container>
      <Container
        animTime="0.7s"
        anim={FlyUp}
      >
        <SectionHeading>Work</SectionHeading>
        <Row grid={1 / 2}>
          {data.allMarkdownRemark.edges.map(work => (
            <Column key={work.node.id}>
              <Inner>
                <Link
                  to={work.node.fields.slug}
                  color={work.node.frontmatter.bg}
                >
                  <Card bg={work.node.frontmatter.bg}>
                    <Cover>
                      <Img
                        fluid={work.node.frontmatter.banner.childImageSharp.fluid}
                        fadeIn={true}
                      />
                    </Cover>
                    <Title>{work.node.frontmatter.title}</Title>
                  </Card>
                </Link>
              </Inner>
            </Column>
          ))}
        </Row>
      </Container>
    </>
  )
}

export const allPages = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 440, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            bg
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
