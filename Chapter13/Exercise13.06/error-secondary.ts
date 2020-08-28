const primaryFn = async () => {
  throw new Error('Primary System Offline!');
};

const secondaryFn = async () => {
  console.log('Aye aye!');
};

const asyncFn = async () => {
  try {
    await primaryFn();
  } catch (e) {
    console.warn(e);
    secondaryFn();
  }
};

asyncFn();
