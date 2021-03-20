import { Image } from '../types';

/**
 * INTERFACES APPLICATION
 */

export interface IState {
	episodes: Array<IEpisode>;
	favourites: Array<IEpisode>;
}

export interface IAction {
	type: string;
	payload: any;
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
	toggleFavAction: (fav: IEpisode) => IAction;
	favourites: Array<IEpisode>;
	store: { state: IState; dispatch: any };
};

export interface EpisodeProps {
	episode: IEpisode;
	toggleFavAction: (state: any, dispatch: any, fav: IEpisode) => IAction;
	favourites: IEpisode[];
	store: { state: IState; dispatch: any };
};

