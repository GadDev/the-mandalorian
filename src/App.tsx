import React from 'react';
import { Link } from "react-router"
import { Store } from './Store';
import { IAction, IEpisode } from './interfaces';
import './App.css';

const EpisodesList = React.lazy<any>(() => import('./components/EpisodesList'));

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
			<React.Suspense fallback={<div>Loading...</div>}>
				<section className='episode-wrapper'>
					<EpisodesList
						episodes={state.episodes}
						favourites={state.favourites}
						toggleFavAction={toggleFavAction}
					/>
				</section>
			</React.Suspense>
		</main>
	);
}

export default App;
