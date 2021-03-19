import React from 'react'
import { Store } from '../Store';
import { IAction, IEpisode } from '../interfaces';

const EpisodesList = React.lazy<any>(() => import('../components/EpisodesList'));

export default function HomePage(): JSX.Element {
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
		<React.Suspense fallback={<div>Loading...</div>}>
			<section className='episode-wrapper'>
				<EpisodesList
					episodes={state.episodes}
					favourites={state.favourites}
					toggleFavAction={toggleFavAction}
				/>
			</section>
		</React.Suspense>
	);
}