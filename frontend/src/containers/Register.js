import React, { useState, useEffect } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import { HeadHelmet } from '../components/portfolio/HeadHelmet';
import { Footer } from '../components/portfolio/Footer';
import { register } from '../redux/actions/auth';
import { createMessage } from '../redux/actions/messages';

export const Register = () => {
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
		const { csrfmiddlewaretoken, email, username, password1, password2 } = inputs;
		if (password1 !== password2) {
			createMessage({ passwordMatch: 'Passwords do not match' });
		}
		else {
			register(username, email, password1, password2, csrfmiddlewaretoken);
		}
	};
	return (
		<div>
			<HeadHelmet title="User Signup" />
			<div id="content-wrapper">
				<section id="register" className="white">
					<div className="container">
						<div class="gap" />
						<div class="row">
							<div class="col-md-12 fade-up">
								<h1 class="text-center">Register</h1>
								<br />
								<br />
								<div id="register" />

								<button class="btn btn-lg btn-google btn-block text-uppercase" type="button">
									<i class="fab fa-google mr-2" /> Sign in with Google
								</button>
								<button class="btn btn-lg btn-github btn-block text-uppercase" type="button">
									<i class="fab fa-github mr-2" /> Sign in with Github
								</button>
								<hr class="my-4" />
								<form id="registerform" onSubmit={handleSubmit}>
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
										type="text"
										name="username"
										placeholder="Username"
										required
										id="input"
										onChange={handleChange}
									/>
									<input
										type="password"
										name="password1"
										placeholder="Password"
										required
										id="input"
										onChange={handleChange}
									/>
									<input
										type="password"
										name="password2"
										placeholder="Confrim Password"
										required
										id="input"
										onChange={handleChange}
									/>
									<button class="btn btn-outlined btn-primary" type="submit" name="submit">
										Sign up
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
