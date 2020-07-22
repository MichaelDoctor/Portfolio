import React, { useState, useEffect } from 'react';
import { Skill } from './Skill';
import axios from 'axios';

export const Skills = ({ heading }) => {
	const [ skills, setSkills ] = useState([]);
	useEffect(
		() => {
			const getSkills = () => {
				try {
					axios
						.get(`https://michael-doctor.me/api/skills/${heading}/`)
						.then((res) => res.data)
						.then((result) => {
							setSkills(result);
						});
				} catch (error) {
					console.error(error);
				}
			};
			getSkills();
		},
		[ heading ]
	);
	return (
		<div>
			<section id="services" className="white">
				<div className="container">
					<div className="gap" />
					<div className="row">
						<div className="col-md-12">
							<div className="center gap fade-down section-heading">
								<h2 className="main-title">{heading}</h2>
								<hr />
								<p>These are the {heading} I know.</p>
							</div>
						</div>
					</div>

					<div className="row">
						{skills.map((skill) => (
							<Skill key={skill.id} title={skill.title} icon={skill.icon} content={skill.content} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
