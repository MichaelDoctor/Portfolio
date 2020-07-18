import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ children }) => {
	return (
		<Fragment>
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
						<a className="navbar-brand" href="/">
							<h1>
								<i className="fas fa-code" /> Michael Doctor
							</h1>
						</a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<Link to="#services">Skills</Link>
							</li>
							<li>
								<Link to="#about-us">About Me</Link>
							</li>
							<li>
								<Link to="#portfolio">Projects</Link>
							</li>
							<li>
								<Link href="#!">Contact Me</Link>
							</li>
							<li className="dropdown active">
								<a href="#!" className="dropdown-toggle" data-toggle="dropdown">
									Pages <i className="icon-angle-down" />
								</a>
								<ul className="dropdown-menu">
									<li>
										<Link to="/admin">Admin Login</Link>
									</li>
									<li>
										<Link to="/404">404</Link>
									</li>
								</ul>
							</li>
							<li>
								<span className="search-trigger">
									<i className="fa fa-search" />
								</span>
							</li>
						</ul>
					</div>
				</div>
			</header>
			{children}
		</Fragment>
	);
};
