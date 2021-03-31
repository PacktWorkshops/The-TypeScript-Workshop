const numbers = ["One", "Two", "Three", "Four", "Five"];

const delay = (ms: number) => {
    const result = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
    return result;
}

async function countNumbers() {
    // await delay(1000);
    // console.log(numbers[0]);
    // await delay(1000);
    // console.log(numbers[1]);
    // await delay(1000);
    // console.log(numbers[2]);
    // await delay(1000);
    // console.log(numbers[3]);
    // await delay(1000);
    // console.log(numbers[4]);

    for (const number of numbers) {
        await delay(1000);
        console.log(number);
    };
}

countNumbers();
