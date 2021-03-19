import React from 'react';
import { IAction, IEpisode } from '../../interfaces';
type EpisodesProps = {
	episodes: IEpisode[];
	toggleFavAction: IAction;
	favorites: IEpisode[];
};

const EpisodesList = ({
	episodes,
	toggleFavAction,
	favorites,
}: EpisodesProps): Array<JSX.Element> => {
	return <div></div>;
};

export default EpisodesList