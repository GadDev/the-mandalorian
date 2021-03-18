import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "The mandalorian" title', () => {
	render(<App />);
	const title = screen.getByText(/The mandalorian/i);
	expect(title).toBeInTheDocument();
});
