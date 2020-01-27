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
						description
						siteUrl
					}
				}
			}
		`}

		render={data => {
			const meta = {
				name: data.site.siteMetadata.title,
				description: data.site.siteMetadata.description,
				slug: data.site.siteMetadata.siteUrl,
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
