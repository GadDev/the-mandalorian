import { Image } from '../types';

/**
 * INTERFACES APPLICATION
 */

export type Dispatch = React.Dispatch<IAction>;

export interface IState {
	episodes: Array<IEpisode>;
	favourites: Array<IEpisode>;
}

export interface IAction {
	type: string;
	payload: Array<IEpisode>;
}
export interface IEpisode {
	airdate: string;
	airstamp: string;
	airtime: string;
	id: number;
	name: string;
	summary: string;
	image: Image;
	number: number;
	runtime: number;
	season: string;
	url: string;
}

export interface EpisodesProps {
	episodes: Array<IEpisode> | [];
	toggleFavAction: (state: any, dispatch: Dispatch, fav: IEpisode) => IAction;
	favourites: Array<IEpisode>;
	store: { state: IState; dispatch: any };
}

export interface EpisodeProps {
	episode: IEpisode;
	toggleFavAction: (state: any, dispatch: Dispatch, fav: IEpisode) => IAction;
	favourites: IEpisode[];
	store: { state: IState; dispatch: any };
}
