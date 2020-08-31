import { capitalize, arrayToAnd, sentence } from './arrow-cat';

describe('test suite for `sentence`', () => {
  test('arrayToAnd', () => {
    expect(arrayToAnd(['turnips', 'cabbage', 'mustard'])).toBe(
      ' turnips, cabbage, and mustard'
    );
  });
  test('capitalize', () => {
    expect(capitalize('HELLO')).toBe('Hello');
  });
  test('sentence', () => {
    expect(sentence('the cat', 'danced', 'on the table', 'on the floor')).toBe(
      'The cat danced on the table, and on the floor.'
    );
  });
});
