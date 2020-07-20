import React, { useState, useEffect } from 'react';
import { Skill } from './Skill';
import axios from 'axios';
import { Preloader } from './Preloader';

export const Skills = ({ heading }) => {
	const [ skills, setSkills ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(
		() => {
			const getSkills = async () => {
				try {
					const res = await axios.get(`https://michael-doctor.herokuapp.com/api/skills/${heading}/`);
					setSkills(await res.data);
					setLoading(false);
				} catch (error) {
					console.error(error);
				}
			};
			getSkills();
		},
		[ heading, setSkills ]
	);
	return (
		<div>
			{loading ? <Preloader /> : ''}
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
