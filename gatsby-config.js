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
				include: `${__dirname}/src/img`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify-cache`,
	],
}
