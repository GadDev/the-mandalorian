import React from 'react';
import './App.css';
import { Store } from './Store';

function App(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);

	React.useEffect(() => {
		state.episodes.length === 0 && fetchDataAction();
	});

	const URL =
		'https://api.tvmaze.com/singlesearch/shows?q=the-mandalorian&embed=episodes';
	const fetchDataAction = async () => {
		const data = await fetch(URL);
		const dataJSON = await data.json();
		return dispatch({
			type: 'FETCH_DATA',
			payload: dataJSON._embedded.episodes,
		});
	};
	return (
		<main
			style={{
				padding: '2rem',
				textAlign: 'center',
			}}
		>
			<h1>the mandalorian</h1>
			<p>Pick your favorite episodes</p>
			<section
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr [col-start])',
					gridAutoRows: 'grid-template-rows: 25% 100px auto',
					padding: '2rem',
				}}
			>
				{state.episodes.map((episode: any) => {
					return (
						<article key={episode.id}>
							<div style={{ textAlign: 'center' }}>
								<img
									src={episode.image.medium}
									alt={`The Mandalorian ${episode.name}`}
								/>
							</div>

							<h3
								style={{
									textAlign: 'center',
									marginTop: '5px',
								}}
							>
								{episode.name}
							</h3>
						</article>
					);
				})}
			</section>
		</main>
	);
}

export default App;
