import { rest, RestHandler, MockedRequest, DefaultBodyType } from 'msw';

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get('/data', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
