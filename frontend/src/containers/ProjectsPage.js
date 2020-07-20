import React from 'react';
import { Projects } from '../components/portfolio/Projects';
import { Footer } from '../components/portfolio/Footer';
import { HeadHelmet } from '../components/portfolio/HeadHelmet';

export const ProjectsPage = () => {
	return (
		<div>
			<HeadHelmet title="Michael Doctor's Portfolio" />
			<div id="content-wrapper">
				<Projects heading="projects" />
			</div>
			<Footer />
		</div>
	);
};
