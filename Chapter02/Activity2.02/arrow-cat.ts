export const arrayToAnd = (words: string[]) => {
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

export const capitalize = (sentence: string) => {
  return `${sentence.charAt(0).toUpperCase()}${sentence
    .slice(1)
    .toLowerCase()}`;
};

export const sentence = (
  subject: string,
  verb: string,
  ...objects: string[]
): string => {
  return capitalize(`${subject} ${verb}${arrayToAnd(objects)}.`);
};
