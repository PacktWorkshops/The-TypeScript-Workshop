const sayHello = async () => {
  await new Promise((resolve) =>
    setTimeout(() => resolve(console.log('Hello')))
  );
};

sayHello();
console.log('World!');
