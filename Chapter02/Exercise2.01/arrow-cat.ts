export const sentence = (
  subject: string,
  verb: string,
  ...objects: string[]
): string => {
  return 'Meow, implement me!';
};

console.log(sentence('the cat', 'ate', 'apples', 'cheese', 'pancakes'));
console.log(sentence('the cat', 'slept', 'all day'));
console.log(sentence('the cat', 'sneezed'));
