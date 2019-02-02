module.exports = {
	siteMetadata: {
		title: `redbeak`,
		description: `I break a few eggs to design for the web. My name is Tamás Kertész and I'm a student of great design`,
		author: `Tamás Kertész`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${ __dirname }/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `work`,
				path: `${ __dirname }/src/work`
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-component`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 980,
							linkImagesToOriginal: false,
							quality: 100
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-transition-link',
			options: {
				layout: require.resolve(`./src/templates/layout.js`)
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.svg` // This path is relative to the root of the site.
			}
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				typekit: {
					id: 'pfi2kcb'
				}
			}
		}
	]
}
