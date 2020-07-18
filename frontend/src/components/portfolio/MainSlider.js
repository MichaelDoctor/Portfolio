import React from 'react';

export const MainSlider = () => {
	return (
		<section id="main-slider" className="no-margin">
			<div className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="item active">
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="carousel-content center centered">
										<i className="home-icon fas fa-user-md bounce-in" />
										<br />
										<p className="boxed animation animated-item-2 fade-up">Hi, my name is</p>
										<br />
										<h2 className="boxed animation animated-item-1 fade-down">Michael Doctor</h2>
										<hr />
										<p className="boxed animation animated-item-2 fade-up">
											I can't perform cpr or save a life but I can code!&nbsp;
											<i className="fab fa-python" />
										</p>
										<br />
										<a className="btn btn-md animation bounce-in" href="#portfolio">
											Check out my projects
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
