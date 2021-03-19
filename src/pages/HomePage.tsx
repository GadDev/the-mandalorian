import React from 'react';
import { Store } from '../Store';
import {fetchDataAction, toggleFavAction} from '../Actions'

const EpisodesList = React.lazy<any>(
	() => import('../components/EpisodesList')
);

export default function HomePage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	
	React.useEffect(() => {
		state.episodes.length === 0 && fetchDataAction(dispatch);
	});

	return (
		<React.Fragment>
			<React.Suspense fallback={<div>Loading...</div>}>
				<section className='episode-wrapper'>
					<EpisodesList
						episodes={state.episodes}
						favourites={state.favourites}
						store={{state, dispatch}}
						toggleFavAction={toggleFavAction}
					/>
				</section>
			</React.Suspense>
		</React.Fragment>
	);
}
