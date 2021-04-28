export const fn = async () => {
  return 'A Promise';
};

const result = fn();

result.then((message) => console.log(message));
