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

const renderAll = async () => {
  console.log(await e1.render());
  console.log(await e2.render());
  console.log(await e3.render());
};

renderAll();
