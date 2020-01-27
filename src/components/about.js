import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const About = img => (
	<Fragment>
		<Img fixed={img} />
		<h2>About</h2>
		<blockquote>Nobody starts a great story thinking about how perfectly their commas will be placed.</blockquote>
		<p>And nor should they. It gets in the way. A story is more than just its punctuation, or its spelling. It’s more than grammar or tense or point of view. Even things like structure and flow are only window-dressing to what a story actually is. All of these things can be fixed, or tweaked, or polished by someone else, but you are the only person on earth who can tell your story exactly the way you see it, and that uniqueness should be encouraged and nurtured.</p>
		<blockquote>The story is the most important element.</blockquote>
		<p>Which is why our dedicated editors at See Me After Editing & Proofreading Services strive to create a space for our authors where you don’t have to worry about the tiny details, the nitty-gritty, and the technical. A space that allows you to get on with the business of storytelling, with the peace of mind of knowing that we care just as much as you do about presenting the best possible version of your story to the world.
		</p>
		<blockquote className="cta">
			So first, create your story… and{' '}
			<Link to="/contact" className="btn cta">
				See Me After
			</Link>
		</blockquote>
	</Fragment>
)

export default About
