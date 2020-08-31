const spy = jest.fn();
jest.mock('cross-fetch', () => spy);

import { catFetch } from './cat-fetch';

const api = catFetch('http://localhost:8080');

describe('cat resource unit tests', () => {
  const resource = api('cat');
  test('fetch cats', () => {
    const getCat = resource('get');
    getCat();
    expect(spy).toHaveBeenCalledWith('http://localhost:8080/cat', {
      body: undefined,
      headers: { 'content-type': 'application/json' },
      method: 'get',
    });
  });
  test('save cats', () => {
    const saveCat = resource('post');
    const cat = { color: 'gray', name: 'Robert' };
    saveCat(cat);
    expect(spy).toHaveBeenCalledWith('http://localhost:8080/cat', {
      body: JSON.stringify(cat),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    });
  });
});
