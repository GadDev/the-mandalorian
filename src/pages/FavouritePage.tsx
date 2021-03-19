import React from 'react';
import { Store } from '../Store';
import { toggleFavAction } from '../Actions';
const EpisodesList = React.lazy<any>(
	() => import('../components/EpisodesList')
);

export default function FavouritePage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<section className='episode-wrapper'>
				<EpisodesList
					episodes={state.favourites}
					favourites={state.favourites}
					store={{ state, dispatch }}
					toggleFavAction={toggleFavAction}
				/>
			</section>
		</React.Suspense>
	);
}
