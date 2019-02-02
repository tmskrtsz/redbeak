import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import RehypeReact from 'rehype-react'

import Seo from '../components/seo'
import { Container, Row, Column, Inner } from '../components/ui/Grid'
import Article from '../components/ui/Article'
import { FadeIn } from '../components/ui/Animations'

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
			<Container>
				<Article
					anim={FadeIn}
					animDelay="0.3s"
				>
					<h1>{work.frontmatter.title}</h1>
					<small>
						Read time: {work.timeToRead} {getNoun}
					</small>
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
				tags
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
