import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';
import { Navbar } from './components/portfolio/Navbar';
import { ProjectsPage } from './containers/ProjectsPage';

export const App = () => {
	return (
		<div>
			<Navbar>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/projects" component={ProjectsPage} />
					<Route component={NotFound} />
				</Switch>
			</Navbar>
		</div>
	);
};
