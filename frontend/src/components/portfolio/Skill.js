import React from 'react';

export const Skill = ({ icon, title, content }) => {
	return (
		<div className="col-md-4 col-sm-6 col-xs-12">
			<div className="service-block">
				<div className="pull-left bounce-in no-display animated bounceIn appear">
					<i className={icon} />
				</div>
				<div className="media-body fade-up no-display animated fadeInUp appear">
					<h3> {title}</h3>
					{/* <p>{content}</p> */}
				</div>
			</div>
		</div>
	);
};
