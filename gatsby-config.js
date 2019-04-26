require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'See Me After',
		description: 'See Me After Editing and Proofreading Services',
		siteUrl: 'https://seemeafter.com',
	},
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				include: `./src/img`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `./src/img`,
				name: 'images',
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify-cache`,
	],
}
