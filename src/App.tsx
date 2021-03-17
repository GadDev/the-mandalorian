import React from 'react';
import './App.css';
import { Store } from './Store';

function App(): JSX.Element {
	const {state, dispatch} = React.useContext(Store);

	const URL =
		'https://api.tvmaze.com/singlesearch/shows?q=the-mandalorian&embed=episodes';
	const fetchDataAction = async () => {
		const data = await fetch(URL) 
		const dataJSON = await data.json()
		return dispatch({
			type: 'FETCH_DATA',
			payload: dataJSON
		})
	}
	return (
		<React.Fragment>
			<h1>Marvel collection</h1>
			<p>Pick your favorite character</p>
		</React.Fragment>
	);
}

export default App;
