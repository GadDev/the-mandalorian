import { IAction, IEpisode, IState } from '../../interfaces';
import Episode from '../Episode';

type EpisodesProps = {
	episodes: Array<IEpisode> | [];
	toggleFavAction: (fav: IEpisode) => IAction;
	favourites: Array<IEpisode>;
	store: { state: IState, dispatch: any}
};

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
