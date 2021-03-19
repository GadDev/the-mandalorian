import { IAction, IEpisode, IState } from './interfaces';

export const fetchDataAction = async (dispatch: any) => {
	const URL =
		'https://api.tvmaze.com/singlesearch/shows?q=the-mandalorian&embed=episodes';
	const data = await fetch(URL);
	const dataJSON = await data.json();
	return dispatch({
		type: 'FETCH_DATA',
		payload: dataJSON._embedded.episodes,
	});
};

export const toggleFavAction = (
	state: IState,
	episode: any,
	dispatch: any
): IAction => {
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
