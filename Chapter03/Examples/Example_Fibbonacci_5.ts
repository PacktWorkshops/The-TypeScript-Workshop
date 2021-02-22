const fibonacci = () => {
    let next = 0;
    let inc = 1;
    let current = 0;
    return () => {
        [current, next, inc] = [next, inc, next + inc];
        return current;
    };
};

const getNext = fibonacci();
const getMoreFib = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(getNext());
}

for (let i = 0; i < 10; i++) {
    console.log(getMoreFib());
}
