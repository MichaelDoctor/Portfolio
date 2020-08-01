import React from 'react';

export const About = () => {
	return (
		<section id="about-us" className="white">
			<div className="container">
				<div className="gap" />
				<div className="row">
					<div className="col-md-12">
						<div className="center gap fade-down section-heading">
							<h2 className="main-title">A Little About Me</h2>
							<hr />
							<p>Calgary based software development student and an aspiring full-stack web developer</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-offset-1 fade-up">
						<p>
							&emsp;Currently, I'm a software development student at Southern Alberta Institute of
							Technology (SAIT). I'm passionate in full-stack web development. My preferred frontend and
							backend frameworks are React and Django, respectively. The programming languages I excel in
							are Python and JavaScript. I enjoy creating responsive and dynamic web apps by integrating
							bootstrap with React. Along with web development, I'm interested in learning about
							Artificial Intelligence using Python.
						</p>
					</div>
					<div className="col-md-4 fade-up" />
				</div>
			</div>
		</section>
	);
};
