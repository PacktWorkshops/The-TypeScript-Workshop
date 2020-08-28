export const resolveIt = async () => {
  const result = await Promise.resolve('A Promise');
  console.log(result);
};

resolveIt();
