import { IAction, IEpisode } from '../../interfaces';
import Episode from '../Episode';

type EpisodesProps = {
	episodes: IEpisode[] | [];
	toggleFavAction: (fav: IEpisode) => IAction;
	favourites: IEpisode[];
};

const EpisodesList = ({
	episodes,
	toggleFavAction,
	favourites,
}: EpisodesProps): JSX.Element => {
	return (
		<>
			{episodes.map(
				(episode: IEpisode): JSX.Element => {
					return (
						<Episode
							key={episode.id}
							episode={episode}
							favourites={favourites}
							toggleFavAction={toggleFavAction}
						/>
					);
				}
			)}
		</>
	);
};

export default EpisodesList;
