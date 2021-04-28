export class El {
  constructor(private name: string) {}
  render = () => {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(`${this.name} is resolved`),
        Math.random() * 1000
      )
    );
  };
}

const e1 = new El('header');
const e2 = new El('body');
const e3 = new El('footer');

const renderAll = () => {
  e1.render().then((msg1) => {
    console.log(msg1);
    e2.render().then((msg2) => {
      console.log(msg2);
      e3.render().then((msg3) => {
        console.log(msg3);
      });
    });
  });
};

renderAll();
