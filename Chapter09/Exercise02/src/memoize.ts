type AnyFunction = (...args: any[]) => any;
type KeyGetter<Fn extends AnyFunction> = (...args: Parameters<Fn>) => string;

function memoize<Fn extends AnyFunction>(fn: Fn, keyGetter?: KeyGetter<Fn>) {
  const cache: Record<string, ReturnType<Fn>> = {};

  return (...args: Parameters<Fn>) => {
    const key = (keyGetter || JSON.stringify)(args);

    if (!(key in cache)) {
      cache[key] = fn(...args);
    }

    return cache[key];
  };
}

function expensiveCalculation(a: number, b: number) {
  const timeout = 10000;
  const start = Date.now();
  while (Date.now() <= start + timeout);

  return a + b;
}

const memoizedExpensiveCalculation = memoize(expensiveCalculation);

expensiveCalculation("not-a-number", 1); // ✅ Argument of type '"not-a-number"' is not assignable to parameter of type 'number'.
memoizedExpensiveCalculation("not-a-number", 1); // ❌ compiles without errors, when it shouldn't.
