import React, { useState, useEffect } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import { HeadHelmet } from '../components/portfolio/HeadHelmet';
import { Footer } from '../components/portfolio/Footer';
import axios from 'axios';

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
		const config = {
			headers : {
				'Content-Type' : 'application/json',
				'X-CSRFTOKEN'  : csrfmiddlewaretoken
			}
		};
		axios
			.post('http://0.0.0.0:5000/auth/register/', { username, password1, password2, email }, config)
			.then((response) => {
				return response.data;
			})
			.then((result) => {
				console.log(result);
				axios.defaults.headers.common = {
					'doctor-auth' : result.access_token
				};
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};
	return (
		<div>
			<HeadHelmet title="User Signup" />
			<div id="content-wrapper">
				<section id="register" className="white">
					<div className="container">
						<div className="row">
							<h1>Test Signup</h1>
							<form id="signup-form" onSubmit={handleSubmit}>
								<DjangoCSRFToken />
								<input
									type="email"
									name="email"
									placeholder="Email"
									required
									id="id_email"
									onChange={handleChange}
								/>
								<br />
								<input
									type="text"
									name="username"
									placeholder="Username"
									required
									id="id_username"
									onChange={handleChange}
								/>
								<br />
								<input
									type="password"
									name="password1"
									placeholder="Password"
									required
									id="id_password1"
									onChange={handleChange}
								/>
								<br />
								<input
									type="password"
									name="password2"
									placeholder="Confrim Password"
									required
									id="id_password2"
									onChange={handleChange}
								/>
								<br />
								<button type="submit">Sign up</button>
							</form>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
};
