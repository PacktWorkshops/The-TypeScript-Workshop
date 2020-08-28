const getTheValue = async (val: number = 0) => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      const number = Math.floor(Math.random() * 100) + val;
      if (number % 10 === 0) {
        reject('Bad modulus!');
      } else {
        console.log(`The value is ${number}`);
        resolve(number);
      }
    }, 1000);
  });
};

Promise.all([
  getTheValue(),
  getTheValue(),
  getTheValue(),
  getTheValue(),
  getTheValue(),
  getTheValue(),
  getTheValue(),
  getTheValue(),
  getTheValue(),
  getTheValue(),
])
  .then((values) =>
    console.log(
      `The total is ${values.reduce((prev, current) => prev + current, 0)}`
    )
  )
  .catch((err) => console.error(err))
  .finally(() => console.log('We are done!'));
