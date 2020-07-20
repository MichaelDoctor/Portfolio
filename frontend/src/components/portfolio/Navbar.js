import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Navbar = ({ children }) => {
	return (
		<div>
			<Helmet>
				<link href="https://michaeldoctor.imfast.io/portfolio/css/bootstrap.min.css" rel="stylesheet" />
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
				<link href="https://michaeldoctor.imfast.io/portfolio/css/pe-icons.css" rel="stylesheet" />
				<link href="https://michaeldoctor.imfast.io/portfolio/css/prettyPhoto.css" rel="stylesheet" />
				<link href="https://michaeldoctor.imfast.io/portfolio/css/animate.css" rel="stylesheet" />
				<link href="https://michaeldoctor.imfast.io/portfolio/style.css" rel="stylesheet" />
				<script src="https://michaeldoctor.imfast.io/portfolio/js/jquery.js" />
			</Helmet>
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
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/404">Contact Me</Link>
							</li>
							<li className="dropdown active">
								<a href="#!" className="dropdown-toggle" data-toggle="dropdown">
									Pages <i className="icon-angle-down" />
								</a>
								<ul className="dropdown-menu">
									<li>
										<a href="/admin/">Admin Login</a>
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
		</div>
	);
};
