import React from 'react';
import { Skill } from './Skill';

export const Skills = () => {
	const props = [
		{
			title   : 'Photography',
			icon    : 'fa fa-camera fa fa-md',
			content : 'Nay middleton him admitting consulted and behaviour son household'
		},
		{
			title   : 'Python',
			icon    : 'fa fa-camera fa fa-md',
			content : 'Nay middleton him admitting consulted and behaviour son household'
		}
	];
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
						{props.map((prop) => (
							<Skill key={prop.title} title={prop.title} icon={prop.icon} content={prop.content} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
