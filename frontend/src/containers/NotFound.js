import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	const scripts = [
		'https://michaeldoctor.imfast.io/portfolio/js/plugins.js',
		'https://michaeldoctor.imfast.io/portfolio/js/bootstrap.min.js',
		'https://michaeldoctor.imfast.io/portfolio/js/jquery.prettyPhoto.js',
		'https://michaeldoctor.imfast.io/portfolio/js/init.js'
	];
	useEffect(
		() => {
			const createScripts = (srcs) => {
				srcs.forEach((src) => {
					const script = document.createElement('script');
					script.src = src;
					document.body.appendChild(script);
				});
			};

			createScripts(scripts);
		},
		[ scripts ]
	);
	return (
		<div>
			<Helmet>
				<title>Page Not Found</title>
			</Helmet>
			<section id="main-slider" className="no-margin">
				<div className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="item active">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="carousel-content center centered">
											<span className="home-icon pe-7s-gleam bounce-in" />
											<h2 className="boxed animation animated-item-1 fade-down">
												UH OH, A 404 ERROR
											</h2>
											<p className="boxed animation animated-item-2 fade-up">
												The Page you are looking for doesn't exist or an other error occurred.
												Head home to try again.
											</p>
											<br />
											<Link className="btn btn-md animation bounce-in" to="/">
												Home
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
