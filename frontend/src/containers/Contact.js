import React, { useState, useEffect } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import { HeadHelmet } from '../components/portfolio/HeadHelmet';
import { Footer } from '../components/portfolio/Footer';
import { contact } from '../redux/actions/contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Contact = ({ contact, isSent }) => {
	const [ inputs, setInputs ] = useState({});
	useEffect(() => {
		setInputs({ csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value });
	}, []);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs({ ...inputs, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { csrfmiddlewaretoken, name, email, subject, message } = inputs;
		contact({ name, email, subject, message, csrfmiddlewaretoken });
	};
	if (isSent) return <Redirect to="/" />;
	return (
		<div>
			<HeadHelmet title="Contact Michael Doctor" />
			<div id="content-wrapper">
				<section id="contact" className="white">
					<div className="container">
						<div class="gap" />
						<div class="row">
							<div class="col-md-12 fade-up">
								<h1 class="text-center">Contact Me</h1>
								<br />
								<br />
								<div id="contact" />
								<form id="contactform" onSubmit={handleSubmit}>
									<DjangoCSRFToken />
									<input
										type="text"
										name="name"
										placeholder="Name"
										required
										id="input"
										onChange={handleChange}
									/>
									<input
										type="email"
										name="email"
										placeholder="Email"
										required
										id="input"
										onChange={handleChange}
									/>
									<input
										type="text"
										name="subject"
										placeholder="Subject"
										required
										id="input"
										onChange={handleChange}
									/>
									<textarea
										name="message"
										placeholder="Message"
										required
										id="comments"
										onChange={handleChange}
									/>
									<button class="btn btn-outlined btn-primary" type="submit" name="submit">
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
};

Contact.propTypes = {
	contact : PropTypes.func.isRequired,
	isSent  : PropTypes.bool
};

const mapStateToProps = (state) => ({
	isSent : state.contact.isSent
});
export default connect(mapStateToProps, { contact })(Contact);
