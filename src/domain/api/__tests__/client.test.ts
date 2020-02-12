import client from '../client';
import { childrenQuery } from '../../child/queries/ChildQueries';

jest.mock('../../auth/state/AuthenticationSelectors', () => ({
  apiTokenSelector: () => 'foo',
}));

describe('graphql client', () => {
  beforeAll(() => {
    global.fetch.resetMocks();
  });

  it('sets Authorization-header to requests from currently authenticated user', async () => {
    global.fetch.mockResponse(
      JSON.stringify({
        data: {
          children: { __typename: 'ChildNodeConnection' },
        },
      })
    );

    try {
      await client.query({
        query: childrenQuery,
      });
    } catch (e) {}

    const fetchOptions = global.fetch.mock.calls[0][1];
    expect(fetchOptions.headers).toHaveProperty('authorization', 'Bearer foo');
  });
});
