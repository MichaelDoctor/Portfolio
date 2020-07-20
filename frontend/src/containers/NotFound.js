import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeadHelmet } from '../components/portfolio/HeadHelmet';
import { Preloader } from '../components/portfolio/Preloader';

export const NotFound = () => {
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<div>
			<HeadHelmet title="Michael Doctor's Portfolio" />
			{loading ? <Preloader /> : ''}
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
