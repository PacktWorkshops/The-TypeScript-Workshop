let next = 0;
let inc = 1;
let current = 0;

for (let i = 0; i < 10; i++) {
    [current, next, inc] = [next, inc, next + inc];
    console.log(current);
}
