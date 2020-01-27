import React from 'react'
import { Link } from 'gatsby'

import '../scss/partials/header.scss'

const Header = () => {
	const menu = [
		// {
		// 	slug: '/',
		// 	title: 'Home',
		// },
		{
			slug: '/contact',
			title: 'Contact',
		},
	]
	return (
		<header>
			<h1>
				<Link to="/" className="site-title">
					See Me After
				</Link>
			</h1>

			<nav>
				<ul id="menu-main" className="menu">
					{menu.map(item => (
						<li key={item.slug}>
							<Link activeClassName="active" to={item.slug}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
