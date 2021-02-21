const numbers = ["One", "Two", "Three", "Four", "Five"];

const delay = (ms: number) => {
    const result = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
    return result;
}

// delay(1000)
// .then(() => console.log(numbers[0]))
// .then(() => delay(1000))
// .then(() => console.log(numbers[1]))
// .then(() => delay(1000))
// .then(() => console.log(numbers[2]))
// .then(() => delay(1000))
// .then(() => console.log(numbers[3]))
// .then(() => delay(1000))
// .then(() => console.log(numbers[4]));

let promise = Promise.resolve();

for (const number of numbers) {
    promise = promise
        .then(() => delay(1000))
        .then(() => console.log(number))
};