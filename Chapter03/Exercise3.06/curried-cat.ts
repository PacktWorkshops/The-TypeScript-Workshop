import { sentence } from './curried-cat-lib';

console.log(sentence('THE cat')('ate')('apples', 'cheese', 'pancakes'));
console.log(sentence('the cat')('SLEPT')('all day'));
console.log(sentence('the cat')('sneezed')());

const theCat = sentence('the cat');
console.log(theCat('ate')('apples', 'cheese', 'pancakes'));
console.log(theCat('SLEPT')('all day'));
console.log(theCat('sneezed')());
