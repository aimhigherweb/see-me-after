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
				name: 'Contact',
				slug: '/contact',
			}

			return (
				<Layout meta={meta}>
					<ContactForm />
				</Layout>
			)
		}}
	/>
)

export default Contact
