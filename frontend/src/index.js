import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<div>
		<Router basename="/" forceRefresh>
			<App />
		</Router>
	</div>,
	document.getElementById('root')
);
