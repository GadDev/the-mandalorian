import React from 'react';
import './App.css';
import { Store } from './Store';

function App(): JSX.Element {
	const store = React.useContext(Store);

	return (
		<React.Fragment>
			{console.log(store)}
			<h1>Marvel collection</h1>
			<p>Pick your favorite character</p>
		</React.Fragment>
	);
}

export default App;
