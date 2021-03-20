import { IEpisode, EpisodesProps } from '../../interfaces';
import Episode from '../Episode';


const EpisodesList = ({
	episodes,
	toggleFavAction,
	favourites,
	store
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
							store={store}
						/>
					);
				}
			)}
		</>
	);
};

export default EpisodesList;
