import { FetchHttpClient } from './fetch-http-client';
import { faker } from '@faker-js/faker';

const makeSubject = (): FetchHttpClient => new FetchHttpClient();

describe('FetchHttpClient', () => {
  test('should call FetchHttpClient with correct values', async () => {
    const subject = makeSubject();

    const url = faker.internet.url();

    subject.request({
      method: 'post',
      url,
    });

    expect(global.window.fetch).toHaveBeenCalledWith(url, {
      method: 'post',
      body: undefined,
      headers: new Headers({
        Accept: 'application/json',
      }),
    });
  });
});
