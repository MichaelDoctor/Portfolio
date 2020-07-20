import React, { useEffect } from 'react';
import { MainSlider } from '../components/portfolio/MainSlider';
import { Skills } from '../components/portfolio/Skills';
import { About } from '../components/portfolio/About';
import { Footer } from '../components/portfolio/Footer';
import { renderHead } from '../components/portfolio/head';

export const Home = () => {
	useEffect(() => {
		renderHead("Michael Doctor's Portfolio");
	}, []);
	return (
		<div>
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
