import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import About from '../components/about'
import Testimonials from '../components/testimonials'

const testimonials = [
	{
		name: 'Amy',
		company: 'AimHigher Web Design',
		service: 'editing',
		testimonial: 'Mandy did a fantastic job, she made my words sound good.',
	},
]

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
					<About {...data.file.childImageSharp.fixed} />
				</div>
				{/* <Testimonials quotes={testimonials} /> */}
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
