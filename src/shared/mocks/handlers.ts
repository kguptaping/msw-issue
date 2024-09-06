import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://github.com/octocat', ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        message: 'Mocked response',
      },
      {
        status: 202,
        statusText: 'Mocked status',
      },
    );
  }),
];
