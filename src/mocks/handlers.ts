import { rest, RestHandler, MockedRequest, DefaultBodyType } from 'msw';
import * as data from '../data/data.json';

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get('/data', (req, res, ctx) => {
    const mathRandom = Math.random();

    if (mathRandom < 0.3) {
      return res(
        ctx.status(500),
        ctx.json({
          errorMessage: 'Something was wrong',
        })
      );
    }

    return res(ctx.status(200), ctx.json({ response: data }));
  }),
];
