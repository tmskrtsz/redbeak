import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from '../components/ui/TransitionLink'

import { Consumer } from '../store'
import SEO from '../components/seo'
import { Container, Row, Column, Inner } from '../components/ui/Grid'
import { SectionHeading } from '../components/ui/Heading'
import Greeter from '../components/Greeter'
import { Card, Title, Subtitle, Cover, Meta } from '../components/ui/Cards'
import { FlyUp } from '../components/ui/Animations'
import Contact from '../components/ContactAlt'
import { Element } from 'react-scroll'
import Footer from '../components/Footer'

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
        <Element
          name="work"
          id="work"
        >
          <Consumer>
            {({ douche }) => (
              <React.Fragment>
                {douche ? <SectionHeading>Arté</SectionHeading> : <SectionHeading>Work</SectionHeading>}
              </React.Fragment>
            )}
          </Consumer>
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
                      <Meta>
                        <Title>{work.node.frontmatter.title}</Title>
                        <Subtitle>{work.node.frontmatter.intro}</Subtitle>
                      </Meta>
                    </Card>
                  </Link>
                </Inner>
              </Column>
            ))}
          </Row>
        </Element>
      </Container>

      <Contact />
      <Footer />
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
            intro
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
