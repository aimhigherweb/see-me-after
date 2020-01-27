import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contact'
import { StaticQuery, graphql } from 'gatsby'

const Contact = () => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}

		render={data => {
			const meta = {
				name: 'Thank You - Contact Us',
				slug: '/thanks',
			}

			return (
				<Layout meta={meta}>
					<h1>Thanks</h1>
					<p>Thanks for getting in touch, someone will contact you shortly</p>
				</Layout>
			)
		}}
	/>
)

export default Contact
