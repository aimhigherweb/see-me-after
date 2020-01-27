import React from 'react'

const Testimonials = ({ quotes }) => (
	<div className="testimonials">
		<h2 className="left">Testimonial</h2>
		{quotes.map(test => (
			<Testimonial {...test} />
		))}
	</div>
)

export const Testimonial = ({ testimonial, name, company }) => {
	return (
		<blockquote className="testimonial">
			{testimonial}
			<cite>
				{name} - {company}
			</cite>
		</blockquote>
	)
}

export default Testimonials
