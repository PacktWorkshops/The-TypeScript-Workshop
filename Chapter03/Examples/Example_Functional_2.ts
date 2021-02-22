let importantNumber = 3;

const addFive = (num: number): number => {
    return num + 5;
};

importantNumber = addFive(importantNumber);

console.log(importantNumber);