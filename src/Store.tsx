import React from 'react';

import { IAction, IState } from './interfaces';

const initialState: IState = {
	episodes: [],
	favourites: [],
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case 'FETCH_DATA':
			return { ...state, episodes: action.payload };
		case 'ADD_FAVOURITE':
			return {
				...state,
				favourites: [...state.favourites, action.payload],
			};
		case 'REMOVE_FAVOURITE':
			return {
				...state,
				favourites: action.payload,
			};
		default:
			return state;
	}
}

export function StoreProvider({
	children,
}: JSX.ElementChildrenAttribute): JSX.Element {
	const [state, dispatch] = React.useReducer<any>(reducer, initialState);

	return (
		<Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
	);
}
