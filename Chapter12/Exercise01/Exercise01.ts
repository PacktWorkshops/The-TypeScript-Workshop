const getTheValue = async (val: number): Promise<number> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * 100) + val;
        console.log(`The value is ${number}`);
        resolve(number);
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
    .then((result: number) => getTheValue(result));
  