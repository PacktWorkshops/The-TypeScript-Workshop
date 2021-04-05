### Exercise 1.01 - Using `tsconfig.json`

1. Install dependencies with `npm i`.
2. Execute the tsc initialization

```bash
tsc --init
```
3. Verify that a new `tsconfig.json` file is created within the folder, and that it's target value is "es5".

4. Compile the `squares.ts` file using 

```bash
tsc squares.ts
```

5. Compile the `squares.ts` file using ES6 targets
```bash
tsc --target es6 squares.ts
```
