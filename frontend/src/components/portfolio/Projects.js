import React, { useState, useEffect } from 'react';
import { Project } from './Project';
import axios from 'axios';
import { Preloader } from './Preloader';

export const Projects = () => {
	const [ projects, setProjects ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ allProjects, setAllProjects ] = useState([]);
	useEffect(
		() => {
			const getProjects = () => {
				try {
					axios.get(`https://michael-doctor.me/api/projects/`).then((res) => res.data).then((result) => {
						setProjects(result);
						setAllProjects(result);
						setLoading(false);
					});
				} catch (err) {
					console.error(err);
				}
			};
			getProjects();
		},
		[ projects, loading, allProjects ]
	);

	const handleClick = (word) => {
		console.log(word);
		if (word === 'all') {
			setProjects(allProjects);
		}
	};

	return (
		<div id="projects">
			{loading ? (
				<Preloader />
			) : (
				<section id="portfolio" className="white">
					<div className="container">
						<div className="gap" />
						<div className="center gap fade-down section-heading">
							<h2 className="main-title">projects</h2>
							<hr />
							<p>
								Check out my&nbsp;
								<a href="https://github.com/MichaelDoctor">
									<i className="fab fa-github" /> Github
								</a>
							</p>
						</div>
						<ul className="portfolio-filter fade-down center">
							<li>
								<a className="btn btn-outlined btn-primary active" data-filter="*">
									All
								</a>
							</li>
							<li>
								<a className="btn btn-outlined btn-primary" data-filter=".python">
									Python
								</a>
							</li>
							<li>
								<a className="btn btn-outlined btn-primary" data-filter=".js">
									JavaScript
								</a>
							</li>
							<li>
								<a className="btn btn-outlined btn-primary" data-filter=".java">
									Java
								</a>
							</li>
							<li>
								<button className="btn btn-outlined btn-primary" onClick={() => handleClick('python')}>
									Python
								</button>
							</li>
						</ul>
					</div>

					<section id="blog" className="white">
						<div className="container">
							<ul className="portfolio-items isotope fade-up row">
								{projects.map((project) => (
									<Project
										key={project.id}
										className={project.class_name}
										img={project.img}
										title={project.title}
										author={project.author}
										datetime={project.date_time}
										date={project.date}
										content={project.content}
										link={project.link}
									/>
								))}
							</ul>
						</div>
					</section>
				</section>
			)}
		</div>
	);
};
