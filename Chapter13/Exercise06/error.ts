export const errorFn = async () => {
  throw new Error('An error has occurred!');
};

const asyncFn = async () => {
  await errorFn();
};

asyncFn();
