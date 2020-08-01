import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import { NotFound } from './containers/NotFound';
import Navbar from './components/portfolio/Navbar';
import Register from './containers/Register';
import Login from './containers/Login';
import Contact from './containers/Contact';

import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
export const App = () => {
	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Navbar>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/register/" component={Register} />
							<Route path="/login/" component={Login} />
							<Route path="/contact/" component={Contact} />
							<Route component={NotFound} />
						</Switch>
					</Navbar>
				</PersistGate>
			</Provider>
		</div>
	);
};
