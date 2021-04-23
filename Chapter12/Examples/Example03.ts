const getTheValue = async (val: number) => {
    return new Promise<number>((resolve, reject) => {
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
    .then(result => getTheValue(result))
    .then(result => getTheValue(result))
    .then(result => getTheValue(result))
    .then(result => getTheValue(result))
    .then(result => getTheValue(result))
    .then(result => getTheValue(result))
    .then(result => getTheValue(result))
    .then(result => getTheValue(result))
    .then(result => getTheValue(result))
    .catch(err => console.error(err))
    .finally(() => console.log("We are done!"));
  