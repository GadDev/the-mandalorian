import React from 'react';
import { IAction, IEpisode } from '../interfaces';
type EpisodesProps = {
	episodes: IEpisode[];
	toggleFavAction: IAction;
	favorites: IEpisode[];
};

const Episodes = ({
	episodes,
	toggleFavAction,
	favorites,
}: EpisodesProps): JSX.Element => {
	return <div></div>;
};

export default Episodes