import React from 'react';

export const Skill = ({ icon, title, content }) => {
	return (
		<div className="col-md-4 col-sm-6">
			<div className="service-block">
				<div className="pull-left bounce-in">
					<i className={icon} />
				</div>
				<div className="media-body fade-up">
					<h3 className="media-heading">{title}</h3>
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};
