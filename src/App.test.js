import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { episodes } from './mocks/data/episodes';

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
	realUseContext = React.useContext;
	useContextMock = React.useContext = jest.fn();
	useContextMock.mockReturnValue(
		{ state: { episodes, favourites: [] } },
		() => {}
	);
});
// Cleanup mock
afterEach(() => {
	React.useContext = realUseContext;
});

test('renders "The mandalorian" title', () => {
	render(<App />);
	const title = screen.getByRole('heading', { name: /The mandalorian/i });
	expect(title).toBeInTheDocument();
});

describe('renders articles', () => {
	test('renders 2 articles', () => {
		render(<App />);
		const articles = screen.getAllByRole('article');
		expect(articles).toHaveLength(2);
	});

	test('renders 2 article titles', () => {
		render(<App />);
		const titleArticles = screen.getAllByRole('heading', { level: 4 });
		expect(titleArticles).toHaveLength(2);
	});
	test('articles should render correctly the title content', () => {
		render(<App />);
		const titleArticles = screen.getAllByRole('heading', { level: 4 });
		const innerHtmlTitleArticles = titleArticles.map(
			(art) => art.innerHTML
		);
		expect(innerHtmlTitleArticles).toEqual([
			'Chapter 5: The Gunslinger',
			'Chapter 8: Redemption',
		]);
	});
});
