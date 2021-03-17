import React from 'react';
import './App.css';
import { Store } from './Store';

interface IEpisode {
	id: number;
	name: string;
	summary: string;
	image: Image;
}

type Image = {
	medium: string;
	original: string;
};

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
		<main>
			{console.log(state.episodes)}
			<header>
				<h1>The mandalorian</h1>
				<p>Pick your favorite episodes</p>
			</header>

			<section className='episode-wrapper'>
				{state.episodes.map((episode: IEpisode) => {
					return (
						<article key={episode.id} className='episode-box'>
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
							<p
								dangerouslySetInnerHTML={{
									__html: episode.summary,
								}}
							/>
						</article>
					);
				})}
			</section>
		</main>
	);
}

export default App;
