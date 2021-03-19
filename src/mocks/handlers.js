// src/mocks/handlers.js
import { rest } from 'msw';
import { episodes } from './data/episodes'



export const handlers = [
	rest.get('/singlesearch/shows', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(episodes));
	}),
];
