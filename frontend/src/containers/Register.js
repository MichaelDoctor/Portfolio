import React from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import { HeadHelmet } from '../components/portfolio/HeadHelmet';
import { Footer } from '../components/portfolio/Footer';

export const Register = () => {
	return (
		<div>
			<HeadHelmet title="User Signup" />
			<div id="content-wrapper">
				<section id="services" className="white">
					<div className="container">
						<div className="row">
							<h1>Test Signup</h1>
							<form action="/users/signup/" id="signup-form" method="post">
								<DjangoCSRFToken />
								<input type="email" name="email" placeholder="Email" required id="id_email" />
								<input type="text" name="username" placeholder="Username" required id="id_username" />
								<input
									type="password"
									name="password1"
									placeholder="Password"
									required
									id="id_password1"
								/>
								<input
									type="password"
									name="password2"
									placeholder="Confrim Password"
									required
									id="id_password2"
								/>
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
