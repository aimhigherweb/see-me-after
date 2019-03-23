import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

//Resources
import Logo from '../img/logo.svg'

const Header = () => {
	const menu = [
		{
			slug: '/about',
			title: 'About'
		}
	]
				return (
					<header>
						<Link to="/" className="site-logo">
							<Logo />
						</Link>

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
