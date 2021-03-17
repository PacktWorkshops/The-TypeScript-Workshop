type UnaryFunction<T, R> = T extends void ? () => R : (arg: T) => R;

export function pipe<R>(fn: UnaryFunction<void, R>): UnaryFunction<void, R>;
export function pipe<T, R = T>(fn: UnaryFunction<T, R>): UnaryFunction<T, R>;
export function pipe<T, A, R>(fn1: UnaryFunction<T, A>, fn2: UnaryFunction<A, R>): UnaryFunction<T, R>;
export function pipe<T, A, B, R>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, R>,
): UnaryFunction<T, R>;
export function pipe<T, A, B, C, R>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, R>,
): UnaryFunction<T, R>;
export function pipe<T, A, B, C, D, R>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, D>,
  fn5: UnaryFunction<D, R>,
): UnaryFunction<T, R>;
export function pipe<T>(...fns: UnaryFunction<any, any>[]): UnaryFunction<any, any> {
  return (arg: T) => {
    return fns.reduce((prev, fn) => fn(prev), arg);
  };
}
const composedFn = pipe(
  (x: string) => x.toUpperCase(),
  x => [x, x].join(','),
  x => x.length,
  x => x.toString(),
  x => Number(x),
);

console.log('result is:', composedFn('hello'))
