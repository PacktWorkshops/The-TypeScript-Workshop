function myFunction(name: string = 'world'): string {
    return `Hello ${name}!`;
  }
  //const message = myFunction();
  // console.log(message);
const message = myFunction('reader');
console.log(message);
