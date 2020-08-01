import React from 'react';

export const Banner = ({ title, description }) => {
	return (
		<div>
			<section id="single-page-slider" class="no-margin">
				<div class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="item active">
							<div class="container">
								<div class="row">
									<div class="col-md-12">
										<div class="center gap fade-down section-heading">
											<h2 class="main-title">{title}</h2>
											<hr />
											<p>{description}</p>
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
