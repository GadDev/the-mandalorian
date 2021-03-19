import { render, screen } from '@testing-library/react';
import App from './App';
import { StoreProvider } from './Store';
import { episodes } from './mocks/data/episodes';
test('renders "The mandalorian" title', () => {
	const value = {
		state: {
			episodes,
			favourites: [],
		},
		dispatch: jest.fn(),
	};

	render(<App />, { wrapper: StoreProvider, ...value });
	const title = screen.getByText(/The mandalorian/i);
	screen.debug();
	expect(title).toBeInTheDocument();
	// const articles = screen.getAllByRole('article');
	// expect(articles).toHaveLength(2);
	screen.debug();
});
