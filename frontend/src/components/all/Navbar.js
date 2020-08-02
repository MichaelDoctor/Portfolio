import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout, authenticated } from '../../redux/actions/auth';
import Alert from './Alert';
import { clearAlerts } from '../../redux/actions/alerts';
import DjangoCSRFToken from 'django-react-csrftoken';

const Navbar = ({ children, authenticated, clearAlerts, logout, auth: { isAuthenticated, user } }) => {
	const [ input, setInput ] = useState({});
	useEffect(() => {
		setInput({ csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value });
		authenticated();
	}, []);

	const getToken = () => {
		logout(input);
	};
	const authLinks = (
		<li className="dropdown active">
			<a className="dropdown-toggle" data-toggle="dropdown">
				{user ? `Welcome ${user.username}` : `Welcome`} <i className="icon-angle-down" />
			</a>
			<ul className="dropdown-menu">
				<li>
					<Link to="/profile/">Profile</Link>
				</li>
				<li>
					<a onClick={getToken}>Logout</a>
				</li>
			</ul>
		</li>
	);

	const guestLinks = (
		<li className="dropdown active">
			<a className="dropdown-toggle" data-toggle="dropdown">
				Profile <i className="icon-angle-down" />
			</a>
			<ul className="dropdown-menu">
				<li>
					<Link to="/register/">Register</Link>
				</li>
				<li>
					<Link to="/login/">Login</Link>
				</li>
			</ul>
		</li>
	);

	return (
		<div>
			<header className="navbar navbar-inverse navbar-fixed-top " role="banner">
				<div className="container">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<span className="sr-only">Toggle navigation</span>
							<i className="fa fa-bars" />
						</button>
						<Link className="navbar-brand" to="/">
							<h1>
								<i className="fas fa-code" /> Michael Doctor
							</h1>
						</Link>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<a href="#projects">Projects</a>
							</li>
							<li>
								<Link to="/contact/">Contact Me</Link>
							</li>
							{isAuthenticated ? authLinks : guestLinks}
						</ul>
					</div>
				</div>
			</header>
			<DjangoCSRFToken />
			<div id="alerts" className="center centered">
				{clearAlerts()}
				<Alert />
			</div>
			{children}
		</div>
	);
};

Navbar.propTypes = {
	logout        : PropTypes.func.isRequired,
	auth          : PropTypes.object.isRequired,
	clearAlerts   : PropTypes.func.isRequired,
	authenticated : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth : state.auth
});
export default connect(mapStateToProps, { logout, clearAlerts, authenticated })(Navbar);
