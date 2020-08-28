export const cat = {
  subject: 'the cat',
  verb: 'ate',
  objects: ['apples', 'cheese', 'pancakes'],
  arrayToAnd: function () {
    return this.objects.reduce((prev, curr, index) => {
      if (this.objects.length === 1) {
        return ` ${curr}`;
      }
      if (this.objects.length - 1 === index) {
        return `${prev} and ${curr}`;
      }
      return `${prev} ${curr},`;
    }, '');
  },
  capitalize: function (s: string) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()}`;
  },
  sentence: function (): string {
    return this.capitalize(`${this.subject} ${this.verb}${this.arrayToAnd()}.`);
  },
};

console.log(cat.sentence());
cat.objects = ['pizza'];
console.log(cat.sentence());
cat.subject = 'the dog';
console.log(cat.sentence());
