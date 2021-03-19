import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FavouritePage from './pages/FavouritePage';
ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<Router>
				<App>
					<Switch>
						<Route path='/favourites' component={FavouritePage} />
						<Route path='/' component={HomePage} />
					</Switch>
				</App>
			</Router>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
