import React from 'react';
import { Project } from './Project';

export const Projects = () => {
	const props = [
		{
			className : 'col-lg-3 col-md-4 portfolio-item nature isotope-item',
			img       : 'https://michaeldoctor.imfast.io/portfolio/images/portfolio/folio02.jpg',
			title     : 'Post Title1',
			author    : 'Michael Doctor',
			datetime  : '2014-01-20',
			date      : 'April 11th, 2014',
			content   : `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the
											1500s, when an unknown printer took a galley of type and scrambled it to
											make a type specimen book.`,
			link      : '#'
		},
		{
			className : 'col-lg-3 col-md-4 portfolio-item nature isotope-item',
			img       : 'https://michaeldoctor.imfast.io/portfolio/images/portfolio/folio02.jpg',
			title     : 'Post Title2',
			author    : 'Michael Doctor',
			datetime  : '2014-01-20',
			date      : 'April 11th, 2014',
			content   : `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the
											1500s, when an unknown printer took a galley of type and scrambled it to
											make a type specimen book.`,
			link      : '#'
		},
		{
			className : 'col-lg-3 col-md-4 portfolio-item nature isotope-item',
			img       : 'https://michaeldoctor.imfast.io/portfolio/images/portfolio/folio01.jpg',
			title     : 'Post Title3',
			author    : 'Michael Doctor',
			datetime  : '2014-01-20',
			date      : 'April 11th, 2014',
			content   : `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the
											1500s, when an unknown printer took a galley of type and scrambled it to
											make a type specimen book.`,
			link      : '#'
		},
		{
			className : 'col-lg-3 col-md-4 portfolio-item apps isotope-item',
			img       : 'https://michaeldoctor.imfast.io/portfolio/images/portfolio/folio01.jpg',
			title     : 'Post Title4',
			author    : 'Michael Doctor',
			datetime  : '2014-01-20',
			date      : 'April 11th, 2014',
			content   : `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the
											1500s, when an unknown printer took a galley of type and scrambled it to
											make a type specimen book.`,
			link      : '#'
		}
	];
	return (
		<section id="portfolio" className="white">
			<div className="container">
				<div className="gap" />
				<div className="center gap fade-down section-heading">
					<h2 className="main-title">Projects</h2>
					<hr />
					<p>
						Check out my{'  '}
						<a href="https://github.com/MichaelDoctor">
							<i className="fab fa-github" /> Github
						</a>
					</p>
				</div>
				<ul className="portfolio-filter fade-down center">
					<li>
						<a className="btn btn-outlined btn-primary active" href="#" data-filter="*">
							All
						</a>
					</li>
					<li>
						<a className="btn btn-outlined btn-primary" href="#" data-filter=".apps">
							Apps
						</a>
					</li>
					<li>
						<a className="btn btn-outlined btn-primary" href="#" data-filter=".nature">
							Nature
						</a>
					</li>
					<li>
						<a className="btn btn-outlined btn-primary" href="#" data-filter=".design">
							Design
						</a>
					</li>
				</ul>
			</div>
			<section id="blog" className="white">
				<div className="container">
					<ul className="portfolio-items isotope fade-up row">
						{props.map((prop) => (
							<Project
								key={prop.title}
								className={prop.className}
								img={prop.img}
								title={prop.title}
								author={prop.author}
								datetime={prop.datetime}
								date={prop.date}
								content={prop.content}
								link={prop.link}
							/>
						))}
					</ul>
				</div>
			</section>
		</section>
	);
};
