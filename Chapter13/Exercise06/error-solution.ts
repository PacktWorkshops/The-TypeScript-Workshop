export const errorFn = async () => {
  throw new Error('An error has occurred!');
};

const asyncFn = async () => {
  try {
    await errorFn();
  } catch (e) {
    console.error(e);
  }
};

asyncFn();
