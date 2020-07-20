import React from 'react';
import { MainSlider } from '../components/portfolio/MainSlider';
import { Skills } from '../components/portfolio/Skills';
import { About } from '../components/portfolio/About';
import { Footer } from '../components/portfolio/Footer';
import { HeadHelmet } from '../components/portfolio/HeadHelmet';

export const Home = () => {
	return (
		<div>
			<HeadHelmet title="Michael Doctor's Portfolio" />
			<MainSlider />
			<div id="content-wrapper">
				<Skills heading="languages" />
				<Skills heading="frameworks" />
				<About />
			</div>
			<Footer />
		</div>
	);
};
