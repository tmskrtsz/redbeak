import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { timingFunctions, rgba, darken, adjustHue } from 'polished'

import { Container, Row, Column, Inner } from '../components/ui/Grid'
import SEO from '../components/seo'
import Greeter from '../components/Greeter'

const Cover = styled.div`
	width: 338px;
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 25%);
	transition: transform 0.25s ${ timingFunctions('easeInOutQuad') };
`

const Title = styled.div`
	text-align: left;
	color: #000;
`

const Card = styled.div`
	background-image: linear-gradient(-150deg, ${ props => props.bg }, ${ props => adjustHue(50, props.bg) });
	border-radius: 4px;
	overflow: hidden;
	position: relative;
	padding: 2em;
	display: flex;
	flex-direction: column;
	min-height: 40rem;
	transition: all 0.25s ${ timingFunctions('easeInOutQuad') };

	:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 30px ${ props => rgba(darken(0.4, props.bg), 0.2) };

		${ Cover } {
			transform: translate(-50%, 0%);
		}
	}
`

const IndexPage = ({ data }) => {
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
			<Container>
				<Row grid={1 / 2}>
					{data.allMarkdownRemark.edges.map(work => (
						<Column key={work.node.id}>
							<Inner>
								<Link to={work.node.fields.slug}>
									<Card bg={work.node.frontmatter.bg}>
										<Cover>
											<Img
												fluid={work.node.frontmatter.banner.childImageSharp.fluid}
												fadeIn={true}
											/>
										</Cover>
										<Title>
											<h3>{work.node.frontmatter.title}</h3>
										</Title>
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

export default IndexPage
