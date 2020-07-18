import React, { Fragment } from 'react';
import { MainSlider } from '../components/portfolio/MainSlider';
import { Skills } from '../components/portfolio/Skills';
import { About } from '../components/portfolio/About';
import { Preloader } from '../components/portfolio/Preloader';
import { Projects } from '../components/portfolio/Projects';
import { Footer } from '../components/portfolio/Footer';
import { Helmet } from 'react-helmet';

export const Home = () => {
	return (
		<Fragment>
			<Helmet>
				<title>Michael Doctor's Portfolio</title>
			</Helmet>
			<Preloader />
			<MainSlider />
			<div id="content-wrapper">
				<Skills heading="languages" />
				<Skills heading="frameworks" />
				<About />
				<Projects />
			</div>
			<Footer />
		</Fragment>
	);
};
