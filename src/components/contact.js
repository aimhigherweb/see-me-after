import React from 'react'
import { navigateTo } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

const recaptchaKey = process.env.GATSBY_RECAPTCHA_KEY

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

class ContactForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleRecaptcha = value => {
		this.setState({ 'g-recaptcha-response': value })
	}

	handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...this.state,
			}),
		})
			.then(() => navigateTo(form.getAttribute('action')))
			.catch(error => alert(error))
	}

	render() {
		return (
			<form
				name="contact-recaptcha"
				method="post"
				action="/thanks/"
				data-netlify="true"
				data-netlify-recaptcha="true"
				data-netlify-honeypot="bot-field"
				onSubmit={this.handleSubmit}
			>
				<noscript>
					<p>This form won’t work with Javascript disabled</p>
				</noscript>
				<label htmlFor="name">
					Name
					<input type="text" name="name" onChange={this.handleChange} />
				</label>
				<label htmlFor="email">
					Email
					<input type="email" name="email" onChange={this.handleChange} />
				</label>
				<label htmlFor="phone">
					Phone
					<input type="text" name="phone" onChange={this.handleChange} />
				</label>
				<label htmlFor="message">
					Message
					<textarea name="message" onChange={this.handleChange} />
				</label>
				<Recaptcha ref="recaptcha" sitekey={recaptchaKey} onChange={this.handleRecaptcha} />
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default ContactForm
