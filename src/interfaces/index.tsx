import { Image } from '../types'

export interface IState {
	episodes: Array<any>;
	favourites: Array<any>;
}

export interface IAction {
	type: string;
	payload: any;
}

export interface IEpisode {
	id: number;
	name: string;
	summary: string;
	image: Image;
}
