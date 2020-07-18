import React from 'react';
import { MainSlider } from '../components/portfolio/MainSlider';
import { Skills } from '../components/portfolio/Skills';
import { About } from '../components/portfolio/About';
import { Projects } from '../components/portfolio/Projects';
import { Footer } from '../components/portfolio/Footer';
import { Helmet } from 'react-helmet';

export const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Michael Doctor's Portfolio</title>
			</Helmet>
			<MainSlider />
			<div id="content-wrapper">
				<Skills heading="languages" />
				<Skills heading="frameworks" />
				<About />
				<Projects />
			</div>
			<Footer />
		</div>
	);
};
