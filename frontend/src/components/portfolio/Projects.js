import React, { useState, useEffect } from 'react';
import { Project } from './Project';
import axios from 'axios';

export const Projects = () => {
	const [ projects, setProjects ] = useState([]);
	useEffect(() => {
		try {
			const getProjects = async () => {
				const res = await axios.get(`https://michael-doctor.herokuapp.com/api/projects/`);
				setProjects(res.data);
			};
			getProjects();
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<section id="portfolio" className="white">
			<div className="container">
				<div className="gap" />
				<div className="center gap fade-down section-heading">
					<h2 className="main-title">Projects</h2>
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
						<a className="btn btn-outlined btn-primary active" href="#!" data-filter="*">
							All
						</a>
					</li>
					<li>
						<a className="btn btn-outlined btn-primary" href="#!" data-filter=".python">
							Python
						</a>
					</li>
					<li>
						<a className="btn btn-outlined btn-primary" href="#!" data-filter=".javascript">
							JavaScript
						</a>
					</li>
					<li>
						<a className="btn btn-outlined btn-primary" href="#!" data-filter=".java">
							Java
						</a>
					</li>
				</ul>
			</div>
			<section id="blog" className="white">
				<div className="container">
					<ul className="portfolio-items isotope fade-up row">
						{projects.map((project) => (
							<Project
								key={project.title}
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
	);
};
