import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Facebook, Twitter, Youtube, Linkedin } from 'react-feather'

const SocialIcons = {
	facebook: <Facebook />,
	twitter: <Twitter />,
	youtube: <Youtube />,
	linkedin: <Linkedin />,
}

const Footer = () => {
	const menu = [
		{
			url: 'https://facebook.com',
			title: 'Facebook',
			type: 'facebook'
		}
	]
			return (
				<footer>
					<nav>
						<ul>
							{menu.map(item => (
								<li key={item.type}>
									<a href={item.url} target="_blank">
										<span>{item.title}</span>
										{SocialIcons[item.type]}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</footer>
			)
}

export default Footer
