import React, { useState, useEffect } from 'react';
import { Project } from './Project';
import axios from 'axios';
import { Preloader } from '../all/Preloader';

export const Projects = () => {
	const [ projects, setProjects ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ filtered, setFiltered ] = useState([]);
	const [ type, setType ] = useState('All');
	useEffect(() => {
		const getProjects = () => {
			try {
				axios.get(`https://michael-doctor.me/api/projects/`).then((res) => res.data).then((result) => {
					setProjects(result);
					setFiltered(result);
					setLoading(false);
				});
			} catch (err) {
				console.error(err);
			}
		};
		getProjects();
	}, []);

	const handleClick = (e, word) => {
		const filters = document.getElementsByName('project-filter');
		filters.forEach((filter) => {
			filter.className = 'btn btn-outlined btn-primary';
		});
		e.target.className = `${e.target.className} active`;
		let results = [];
		if (word === 'all') {
			setFiltered(projects);
		}
		else {
			projects.forEach((project) => {
				if (project.class_name.includes(word)) results.push(project);
			});

			setFiltered(results);
		}
		if (word === 'js') {
			word = 'JavaScript';
		}
		setType(word);
	};

	return (
		<div id="projects">
			<section id="portfolio" className="white">
				<div className="container">
					<div className="gap" />
					<div className="center gap fade-down section-heading">
						<h2 className="main-title">{type} projects</h2>
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
							<button
								name="project-filter"
								className="btn btn-outlined btn-primary active"
								onClick={(e) => handleClick(e, 'all')}
							>
								All
							</button>
						</li>
						<li>
							<button
								name="project-filter"
								className="btn btn-outlined btn-primary"
								onClick={(e) => handleClick(e, 'python')}
							>
								Python
							</button>
						</li>
						<li>
							<button
								name="project-filter"
								className="btn btn-outlined btn-primary"
								onClick={(e) => handleClick(e, 'js')}
							>
								JavaScript
							</button>
						</li>
						<li>
							<button
								name="project-filter"
								className="btn btn-outlined btn-primary"
								onClick={(e) => handleClick(e, 'java')}
							>
								Java
							</button>
						</li>
					</ul>
				</div>
				{loading ? (
					<Preloader />
				) : (
					<section id="blog" className="white">
						<div className="container">
							<ul className="portfolio-items isotope fade-up row">
								{filtered.map((project) => (
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
				)}
			</section>
		</div>
	);
};
