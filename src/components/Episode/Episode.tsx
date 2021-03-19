import { IEpisode } from '../../interfaces';

type EpisodeProps = {
	episode: IEpisode;
	toggleFavAction: any;
	favourites: IEpisode[];
};
const Episode = (props: EpisodeProps): JSX.Element => {
	const { id, name, image, summary } = props.episode;
	return (
		<div>
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
						onClick={() => props.toggleFavAction(props.episode)}
					>
						{props.favourites.find((fav: IEpisode) => fav.id === id)
							? 'Unfav'
							: 'Fav'}
					</button>
				</section>
			</article>
		</div>
	);
};

export default Episode;
