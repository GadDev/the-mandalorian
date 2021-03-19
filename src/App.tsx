import React from 'react';
import './App.css';
import { Store } from './Store';

import { IAction, IEpisode } from './interfaces';

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

	const toggleFavAction = (episode: IEpisode): IAction => {
		const episodeInFavourite = state.favourites.includes(episode);
		let dispatchObj = {
			type: 'ADD_FAVOURITE',
			payload: episode,
		};

		if (episodeInFavourite) {
			const favouriteWithoutEpisode = state.favourites.filter(
				(fav: IEpisode) => fav.id !== episode.id
			);
			dispatchObj = {
				type: 'REMOVE_FAVOURITE',
				payload: favouriteWithoutEpisode,
			};
		}
		return dispatch(dispatchObj);
	};
	return (
		<main>
			<header>
				<div>
					<h1>The mandalorian</h1>
					<p>Pick your favorite episodes</p>
				</div>
				<div>Favourite(s) : {state.favourites.length}</div>
			</header>

			<section className='episode-wrapper'>
				{state.episodes.map((episode: IEpisode) => {
					return (
						<article key={episode.id} className='episode-box'>
							<img
								src={episode.image.medium}
								alt={`The Mandalorian ${episode.name}`}
							/>

							<h4>{episode.name}</h4>
							<section>
								<small
									dangerouslySetInnerHTML={{
										__html: episode.summary,
									}}
								/>
								<button
									type='button'
									onClick={() => toggleFavAction(episode)}
								>
									{state.favourites.find(
										(fav: IEpisode) => fav.id === episode.id
									)
										? 'Unfav'
										: 'Fav'}
								</button>
							</section>
						</article>
					);
				})}
			</section>
		</main>
	);
}

export default App;
