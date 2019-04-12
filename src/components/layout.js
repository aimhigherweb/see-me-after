import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import Header from './header'
import Footer from './footer'

import Logo from '../img/logo.jpg'
// import Favicon from '../img/favicon.png'

const Layout = ({ children, meta }) => (
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
			// let defaultMeta = data.allWordpressSiteMetadata.edges[0].node

			// if (!meta) {
			// 	meta = {
			// 		name: defaultMeta.name,
			// 		description: defaultMeta.description,
			// 		siteUrl: defaultMeta.url,
			// 	}
			// } else {
			// 	meta = {
			// 		name: meta.name,
			// 		description: meta.description,
			// 		slug: meta.slug,
			// 		image: meta.image,
			// 		siteUrl: defaultMeta.url,
			// 		fallback: {
			// 			name: defaultMeta.name,
			// 			description: defaultMeta.description,
			// 		},
			// 	}
			// }

			return (
				<Fragment>
					{/* <Meta {...meta} /> */}
					{<Header />}
					<main id="main">{children}</main>
					{<Footer />}
				</Fragment>
			)
		}}
	/>
)

const Meta = ({ name, description, slug, image, siteUrl, fallback }) => {
	if (!image) {
		image = Logo
	}
	if (!name) {
		name = fallback.name
	} else if (name && fallback) {
		name = name + ' | ' + fallback.name
	}
	if (!description) {
		description = fallback.description
	}
	if (!slug) {
		slug = '/'
	}

	return (
		<Helmet>
			<title>{name}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={siteUrl + slug} />

			<meta name="twitter:card" content="summary_large_image" />
			<link rel="shortcut icon" href={Favicon} />
			<link rel="icon" sizes="192x192" href={Favicon} />
			<link rel="apple-touch-icon" href={Favicon} />
			<meta name="theme-color" content="#003462" />
			<link rel="mask-icon" href={Favicon} color="#003462" />
			<base href="/" />

			{/* Facebook */}
			<meta property="og:url" content={siteUrl + slug} />

			<meta property="og:title" content={name} />
			<meta property="og:image" content={image} />
			<meta property="og:description" content={description} />

			{/* Twitter */}
			<meta name="twitter:url" content={siteUrl + slug} />
			<meta name="twitter:title" content={name} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	)
}

export default Layout
