import { render } from '@testing-library/react';
import { StoreProvider } from './Store';

const Wrapper = ({ children }) => {
	return (
		<StoreProvider>
			{children}
		</StoreProvider>
	);
};

const customRender = (ui, options) =>
	render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
