import { IAction, IEpisode } from '../../interfaces';
import Episode from '../Episode';

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
	return episodes.map(
		(episode: IEpisode): JSX.Element => {
			return (
				<Episode
					episode={episode}
					favourites={favorites}
					toggleFavAction={toggleFavAction}
				/>
			);
		}
	);
};

export default EpisodesList;
