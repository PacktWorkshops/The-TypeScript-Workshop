const arrayone = [7, 6, 8, 9, 2, 25];

const arraytwo = [6, 8, 9, 2, 25];

const arraythree = [6, 8, 9, 2, 25, 7];

function arrayCompare(a1: number[], a2: number[]): boolean {
  return true;
}

console.log(
  `Are ${arrayone} and ${arraytwo} equal?`,
  arrayCompare(arrayone, arraytwo)
);
console.log(
  `Are ${arrayone} and ${arraythree} equal?`,
  arrayCompare(arrayone, arraythree)
);
console.log(
  `Are ${arraytwo} and ${arraythree} equal?`,
  arrayCompare(arraytwo, arraythree)
);

export {};
