import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Contact from '../components/contact'

import { testimonials } from '../data/testimonials'

export default class IndexPage extends React.Component {
	render() {
		const { data } = this.props,
			meta = {
				name: data.site.siteMetadata.title,
				description: data.site.siteMetadata.description,
				slug: data.site.siteMetadata.siteUrl,
			}

		return (
			<Layout meta={meta}>
				<div className="align">
					<Img fixed={data.file.childImageSharp.fixed} />
					<div>
						<h2>About</h2>
						<p>See Me After specialises in creating and editing content that still maintains your voice.</p>
					</div>
				</div>
				<div className="testimonials">
					<h2 className="left">Testimonial</h2>
					<blockquote className="testimonial">
						{testimonials[0].testimonial}
						<cite>
							{testimonials[0].name} - {testimonials[0].company}
						</cite>
					</blockquote>
				</div>
				<div className="contact">
					<h2 className="right">Contact</h2>
					<Contact />
				</div>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		file(relativePath: { eq: "editor.jpg" }) {
			childImageSharp {
				fixed(width: 300) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
	}
`
