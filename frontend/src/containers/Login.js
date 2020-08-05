import React, { useState, useEffect } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import { HeadHelmet } from '../components/all/HeadHelmet';
import { Footer } from '../components/all/Footer';
import { login } from '../redux/actions/auth';
import { createMessage } from '../redux/actions/messages';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
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
		const { csrfmiddlewaretoken, email, password } = inputs;

		login({ email, password, csrfmiddlewaretoken });
	};
	if (isAuthenticated) return <Redirect to="/" />;
	return (
		<div>
			<HeadHelmet title="User Login" />
			<div id="content-wrapper">
				<section id="login" className="white">
					<div className="container">
						<div class="gap" />
						<div class="row">
							<div class="col-md-12 fade-up">
								<h1 class="text-center">Login</h1>
								<br />
								<br />
								<div id="login" />
								<a href="/allauth/google/login/?process=login">
									<button class="btn btn-lg btn-google btn-block text-uppercase" type="button">
										<i class="fab fa-google mr-2" /> Sign in with Google
									</button>
								</a>
								<hr class="my-4" />
								<form id="loginform" onSubmit={handleSubmit}>
									<DjangoCSRFToken />
									<input
										type="email"
										name="email"
										placeholder="Email"
										required
										id="input"
										onChange={handleChange}
									/>
									<input
										type="password"
										name="password"
										placeholder="Password"
										required
										id="input"
										onChange={handleChange}
									/>
									<button class="btn btn-outlined btn-primary" type="submit" name="submit">
										Login
									</button>
								</form>
								<p>
									Don't have an account? <Link to="/register/">Sign up</Link>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
};

Login.propTypes = {
	login           : PropTypes.func.isRequired,
	createMessage   : PropTypes.func.isRequired,
	isAuthenticated : PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, createMessage })(Login);
