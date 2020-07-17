import React from 'react';
import { Navbar } from './components/portfolio/Navbar';
import { MainSlider } from './components/portfolio/MainSlider';
import { Skills } from './components/portfolio/Skills';
import { About } from './components/portfolio/About';
import { Preloader } from './components/portfolio/Preloader';
import { Projects } from './components/portfolio/Projects';

export const App = () => {
	return (
		<div>
			<Preloader />
			<Navbar />
			<MainSlider />
			<div id="content-wrapper">
				<Skills heading="languages" />
				<Skills heading="frameworks" />
				<About />
				<Projects />
			</div>
		</div>
	);
};
