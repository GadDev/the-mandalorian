// src/mocks/handlers.js
import { rest } from 'msw';
import { episodes } from './data/episodes'

const URL =
	'https://api.tvmaze.com/singlesearch/shows?q=the-mandalorian&embed=episodes'; 

export const handlers = [rest.get(URL,(req,res,ctx) => {
	return res(
		ctx.status(200),
		ctx.json(episodes)
	)
})];
