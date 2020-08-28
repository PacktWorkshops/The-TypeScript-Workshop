const kittens: { getName(): string }[] = [];
const kittenNames = ['Muffin', 'Squirt', 'Fuzzface', 'Pretzel'];
let kittenCount = 0;

export const kittenGenerator = (quantity: number) => {
  while (kittenCount < quantity) {
    ((kittenCount) => {
      kittens.push({
        getName: function () {
          return kittenNames[kittenCount];
        },
      });
    })(kittenCount++);
  }
};

kittenGenerator(4);
kittens.forEach((kitten) => {
  console.log(kitten.getName());
});
