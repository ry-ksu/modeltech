import { rest, RestHandler, MockedRequest, DefaultBodyType } from 'msw';
import * as data from '../data/data.json';

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get('/data', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ response: data }));
  }),
];
