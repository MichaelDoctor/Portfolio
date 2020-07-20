import React, { useEffect } from 'react';
import { Projects } from '../components/portfolio/Projects';
import { Footer } from '../components/portfolio/Footer';
import { renderHead } from '../components/portfolio/head';

export const ProjectsPage = () => {
	useEffect(() => {
		renderHead("Michael Doctor's Projects");
	}, []);
	return (
		<div>
			<div id="content-wrapper">
				<Projects heading="projects" />
			</div>
			<Footer />
		</div>
	);
};
