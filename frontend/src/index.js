import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.hydrate(
	<div>
		<Router basename="/" forceRefresh>
			<App />
		</Router>
	</div>,
	document.getElementById('root')
);
serviceWorker.unregister();
