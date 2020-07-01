import React from 'react';

export const Navbar = () => {
	return (
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
							<a href="about-us.html">About Me</a>
						</li>
						<li>
							<a href="portfolio.html">Portfolio</a>
						</li>
						<li>
							<a href="services.html">Services</a>
						</li>
						<li>
							<a href="blog.html">Blog</a>
						</li>
						<li>
							<a href="contact-us.html">Contact</a>
						</li>
						<li className="dropdown active">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">
								Pages <i className="icon-angle-down" />
							</a>
							<ul className="dropdown-menu">
								<li>
									<a href="project-item.html">Project Single</a>
								</li>
								<li>
									<a href="blog-item.html">Blog Single</a>
								</li>
								<li className="active">
									<a href="404.html">404</a>
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
	);
};
