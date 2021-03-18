import { render, screen } from '@testing-library/react';
import App from './App';
import { StoreProvider } from './Store';

test('renders "The mandalorian" title', () => {
	render(<App />, { wrapper: StoreProvider });
	const title = screen.getByText(/The mandalorian/i);
	screen.debug();
	expect(title).toBeInTheDocument();
});
