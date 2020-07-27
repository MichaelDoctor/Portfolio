import React from 'react';

export const Footer = () => {
	return (
		<div>
			<div id="footer-wrapper">
				<section id="bottom" className="">
					<div className="container">
						<div className="row">
							<div className="col-md-3 col-sm-6 about-us-widget">
								<h4>Michael Doctor</h4>
								<p>
									My personal website portfolio made with Django, React, Redux, and the Impact
									Bootstrap template.
								</p>
							</div>

							<div className="col-md-3 col-sm-6">
								<h4>Links</h4>
								<div>
									<ul className="fa-ul">
										<li>
											<i className="fab fa-github" />&nbsp;
											<a href="https://github.com/MichaelDoctor">Github</a>
										</li>
										<li>
											<i className="fab fa-linkedin" />&nbsp;
											<a href="https://www.linkedin.com/in/michael-doctor-403/">Linked in</a>
										</li>
										<li>
											<i className="fab fa-instagram" />&nbsp;
											<a href="https://www.instagram.com/docdoc_whosthere/">Instagram</a>
										</li>
										<li>
											<i className="fab fa-youtube" />&nbsp;
											<a href="https://www.youtube.com/channel/UCA0sB4KikzGL-A5bbZNHBPQ">
												Youtube
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-md-3 col-sm-6">
								<h4>Latest Projects</h4>
								<div>
									<div className="media">
										<div className="pull-left">
											<img
												className="widget-img"
												src="https://michaeldoctor.imfast.io/portfolio/images/portfolio/folio01.jpg"
												alt=""
											/>
										</div>
										<div className="media-body">
											<span className="media-heading">
												<a href="#!">Update Later</a>
											</span>
											<small className="muted">Update later</small>
										</div>
									</div>
									<div className="media">
										<div className="pull-left">
											<img
												className="widget-img"
												src="https://michaeldoctor.imfast.io/portfolio/images/portfolio/folio02.jpg"
												alt=""
											/>
										</div>
										<div className="media-body">
											<span className="media-heading">
												<a href="#!">Update later</a>
											</span>
											<small className="muted">Update later</small>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-6">
								<h4>Contacts</h4>
								<address>
									<strong>Michael Doctor</strong>
									<br />
									Canada<br />
									Calgary, AB<br />
									<abbr title="Phone">
										<i className="fab fa-google" />
									</abbr>&nbsp; michaeldoctoryyc@gmail.com
								</address>
							</div>
						</div>
					</div>
				</section>

				<footer id="footer" className="">
					<div className="container">
						<div className="row">
							<div className="col-sm-8">
								&copy; 2020 Michael Doctor's Portfolio. All Rights Reserved.&nbsp;
								<a href="https://templatemag.com/bootstrap-templates/">Bootstrap templates</a> by
								TemplateMag.
							</div>
							<div className="col-sm-4">
								<ul className="pull-right">
									<li>
										<a id="gototop" className="gototop" href="#!">
											<i className="fa fa-chevron-up" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};
