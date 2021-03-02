import { pipe } from './pipe';

describe('pipe', () => {
  it('should work for a function that accepts no arguments', () => {
    const returnTwo = pipe(() => 2);

    expect(returnTwo()).toBe(2);
  });
  describe('1 function', () => {
    it('should work for the same input and output type', () => {
      const multiplier = pipe((x: number) => x * 2);

      expect(multiplier(3)).toBe(6);
    });

    it('should work for different input and output types', () => {
      const toString = pipe((x: number) => x.toString());

      expect(toString(12)).toBe('12');
    });
  });

  describe('2 functions', () => {
    it('should work for functions that operate on a single type', () => {
      const add1AndMultiply = pipe(
        (x: number) => x + 1,
        x => x * 2,
      );

      expect(add1AndMultiply(2)).toBe(6);
    });

    it('should work for functions that operate on a different types', () => {
      const add1AndStringify = pipe(
        (x: number) => x + 1,
        x => x.toString(),
      );

      expect(add1AndStringify(2)).toBe('3');
    });
  });

  describe('3 functions', () => {
    it('should work for functions that operate on a single type', () => {
      const func = pipe(
        (x: string) => x.toUpperCase(),
        x => [x, x].reduce((acc, curr) => `${acc} ${curr}`, ''),
        x => x.trim(),
      );

      expect(func('hello')).toBe('HELLO HELLO');
    });

    it('should work for functions that operate on a different types', () => {
      const func = pipe(
        (x: string) => x.toUpperCase(),
        x => [x, x].join(','),
        x => x.length,
      );

      expect(func('hello')).toBe(11);
    });
  });

  describe('4 functions', () => {
    it('should work for functions that operate on a single type', () => {
      const func = pipe(
        (x: string) => x.toUpperCase(),
        x => [x, x].reduce((acc, curr) => `${acc} ${curr}`, ''),
        x => x.trim(),
        x => x.toLowerCase(),
      );

      expect(func('hello')).toBe('hello hello');
    });

    it('should work for functions that operate on a different types', () => {
      const func = pipe(
        (x: string) => x.toUpperCase(),
        x => [x, x].join(','),
        x => x.length,
        x => x.toString(),
      );

      expect(func('hello')).toBe('11');
    });
  });

  describe('5 functions', () => {
    it('should work for functions that operate on a single type', () => {
      const func = pipe(
        (x: string) => x.toUpperCase(),
        x => [x, x].reduce((acc, curr) => `${acc} ${curr}`, ''),
        x => x.trim(),
        x => x.toLowerCase(),
        x => `${x} world`,
      );

      expect(func('hello')).toBe('hello hello world');
    });

    it('should work for functions that operate on a different types', () => {
      const func = pipe(
        (x: string) => x.toUpperCase(),
        x => [x, x].join(','),
        x => x.length,
        x => x.toString(),
        x => Number(x),
      );

      expect(func('hello')).toBe(11);
    });
  });
});
