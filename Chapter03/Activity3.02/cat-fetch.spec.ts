const spy = jest.fn();
jest.mock('cross-fetch', () => spy);

import { catFetch } from './cat-fetch';

const api = catFetch('http://localhost:8080');

describe('cat resource unit tests', () => {
  const resource = api('cat');
  test('fetch cats', () => {
    fail('Meow implement me!');
  });
  test('save cats', () => {
    fail('Meow implement me!');
  });
});
