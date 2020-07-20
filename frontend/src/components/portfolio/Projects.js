import React, { useState, useEffect } from 'react';
import { Project } from './Project';
import axios from 'axios';
import { Preloader } from './Preloader';

export const Projects = ({ heading }) => {
	const [ projects, setProjects ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(
		() => {
			const getProjects = async () => {
				try {
					const res = await axios.get(`https://michael-doctor.herokuapp.com/api/${heading}/`);
					await setProjects(res.data);
					setLoading(false);
				} catch (err) {
					console.error(err);
				}
			};
			getProjects();
		},
		[ setProjects ]
	);
	return (
		<div>
			{loading ? <Preloader /> : ''}
			<section id="portfolio" className="white">
				<div className="container">
					<div className="gap" />
					<div className="center gap fade-down section-heading">
						<h2 className="main-title">{heading}</h2>
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
							<a className="btn btn-outlined btn-primary active" href="#" data-filter="*">
								All
							</a>
						</li>
						<li>
							<a className="btn btn-outlined btn-primary" href="#" data-filter=".python">
								Python
							</a>
						</li>
						<li>
							<a className="btn btn-outlined btn-primary" href="#" data-filter=".javascript">
								JavaScript
							</a>
						</li>
						<li>
							<a className="btn btn-outlined btn-primary" href="#" data-filter=".java">
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
		</div>
	);
};
