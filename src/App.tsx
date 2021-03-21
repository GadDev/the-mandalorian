import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from './Store';

import './App.css';

function App(props: any): JSX.Element {
	const { state } = React.useContext(Store);

	return (
		<main>
			<header>
				<div>
					<Link to='/'>
						<h1>The mandalorian</h1>
					</Link>

					<p>Pick your favorite episodes</p>
				</div>
				<div className='menu'>
					<Link to='/'>Home</Link>
					<Link to='/favourites'>
						Favourite(s) : {state.favourites.length}
					</Link>
				</div>
			</header>
			{props.children}
		</main>
	);
}

export default App;
