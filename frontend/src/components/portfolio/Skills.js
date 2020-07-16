import React, { useState, useEffect } from 'react';
import { Skill } from './Skill';
import axios from 'axios';

export const Skills = () => {
	const [ skills, setSkills ] = useState([]);
	useEffect(() => {
		const getSkills = async () => {
			try {
				const res = await axios.get('https://www.michael-doctor.me/api/skills/');
				setSkills(res.data);
			} catch (error) {
				console.error(error);
			}
		};
		getSkills();
	}, []);
	return (
		<div>
			<section id="services" className="white">
				<div className="container">
					<div className="gap" />
					<div className="row">
						<div className="col-md-12">
							<div className="center gap fade-down section-heading">
								<h2 className="main-title">Skills</h2>
								<hr />
								<p>These are the languages and frameworks that I'm confident in.</p>
							</div>
						</div>
					</div>

					<div className="row">
						{skills.map((skill) => (
							<Skill key={skill.title} title={skill.title} icon={skill.icon} content={skill.content} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
