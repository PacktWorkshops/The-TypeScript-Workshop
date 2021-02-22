let next = 0;
let inc = 1;
let current = 0;

const getNext = (): number => {
    [current, next, inc] = [next, inc, next + inc];
    return current;
};

for (let i = 0; i < 10; i++) {
    console.log(getNext());
}