const arrayToAnd = (words: string[]) => {
  return words.reduce((prev, curr, index) => {
    if (words.length === 1) {
      return ` ${curr}`;
    }
    if (words.length - 1 === index) {
      return `${prev} and ${curr}`;
    }
    return `${prev} ${curr},`;
  }, '');
};

const capitalize = (sentence: string) => {
  return `${sentence.charAt(0).toUpperCase()}${sentence
    .slice(1)
    .toLowerCase()}`;
};

export const sentence = (subject: string) => (verb: string) => (
  ...objects: string[]
): string => {
  return capitalize(`${subject} ${verb}${arrayToAnd(objects)}.`);
};

console.log(sentence('THE cat')('ate')('apples', 'cheese', 'pancakes'));
console.log(sentence('the cat')('SLEPT')('all day'));
console.log(sentence('the cat')('sneezed')());

const theCat = sentence('the cat');
console.log(theCat('ate')('apples', 'cheese', 'pancakes'));
console.log(theCat('SLEPT')('all day'));
console.log(theCat('sneezed')());
