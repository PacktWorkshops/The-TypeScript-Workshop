const getTheValue = async (val: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * 100) + val;
        if (number % 10 === 0) {
          reject("Bad modulus!");
        } else {
          console.log(`The value is ${number}`);
          resolve(number);
        }
      }, 1000);
    });
  };
  
  getTheValue(0)
    .then((result: number) => getTheValue(result))
    .then((result: number) => getTheValue(result))
    .then((result: number) => getTheValue(result))
    .then((result: number) => getTheValue(result))
    .then((result: number) => getTheValue(result))
    .then((result: number) => getTheValue(result))
    .then((result: number) => getTheValue(result))
    .then((result: number) => getTheValue(result))
    .then((result: number) => getTheValue(result))
    .catch(err => console.error(err));
  