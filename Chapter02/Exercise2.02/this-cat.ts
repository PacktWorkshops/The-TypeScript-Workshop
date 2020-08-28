export const cat = {
  subject: 'the cat',
  verb: 'ate',
  objects: ['apples', 'cheese', 'pancakes'],
  sentence: function (): string {
    return 'Meow, implement me!';
  },
};

console.log(cat.sentence());
cat.objects = ['pizza'];
console.log(cat.sentence());
cat.subject = 'the dog';
console.log(cat.sentence());
