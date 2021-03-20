import { IAction, IEpisode, IState, EpisodesProps } from '../../interfaces';

type EpisodeProps = {
	episode: IEpisode;
	toggleFavAction: (state: any, dispatch: any, fav: IEpisode) => IAction;
	favourites: IEpisode[];
	store: { state: IState; dispatch: any };
};

const Episode = (props: EpisodeProps): JSX.Element => {
	const { id, name, image, summary } = props.episode;
	const { state, dispatch } = props.store;
	return (
		<article key={id} className='episode-box'>
			<img src={image.medium} alt={`The Mandalorian ${name}`} />

			<h4>{name}</h4>
			<section>
				<small
					dangerouslySetInnerHTML={{
						__html: summary,
					}}
				/>
				<button
					type='button'
					onClick={() =>
						props.toggleFavAction(state, dispatch, props.episode)
					}
				>
					{props.favourites.find((fav: IEpisode) => fav.id === id)
						? 'Unfav'
						: 'Fav'}
				</button>
			</section>
		</article>
	);
};

export default Episode;
