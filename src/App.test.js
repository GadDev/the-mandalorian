import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hello world" title', () => {
	render(<App />);
	const title = screen.getByText(/Marvel collection/i);
	expect(title).toBeInTheDocument();
});
