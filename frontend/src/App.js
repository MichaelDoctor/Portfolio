import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';
import { Navbar } from './components/portfolio/Navbar';
import { Register } from './containers/Register';

import { Provider } from 'react-redux';
import store from './redux/store';

export const App = () => {
	return (
		<div>
			<Provider store={store}>
				<Navbar>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/register/" component={Register} />
						<Route component={NotFound} />
					</Switch>
				</Navbar>
			</Provider>
		</div>
	);
};
