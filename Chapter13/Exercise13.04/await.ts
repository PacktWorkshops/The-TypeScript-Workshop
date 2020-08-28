export const fn = async () => {
  return 'A Promise';
};

const resolveIt = async () => {
  const result = await fn();
  console.log(result);
};

resolveIt();
