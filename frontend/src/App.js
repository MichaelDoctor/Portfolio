import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';
import { Navbar } from './components/portfolio/Navbar';

export const App = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/404" component={NotFound} />
			</Switch>
		</div>
	);
};
