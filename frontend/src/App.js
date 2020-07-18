import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';
import { Navbar } from './components/portfolio/Navbar';

export const App = () => {
	return (
		<div>
			<Router>
				<Navbar>
					<Switch>
						<Route exact path="/" component={Home} />
						{/* Catches if one of these routes aren't provided */}
						<Route component={NotFound} />
					</Switch>
				</Navbar>
			</Router>
		</div>
	);
};
