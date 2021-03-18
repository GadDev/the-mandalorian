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
	airdate: string
	airstamp: string
	airtime: string
	id: number;
	name: string;
	summary: string;
	image: Image;
	number: number
	runtime: number
	season: string
	url: string
}
