function greet(getGreeting: (name: string) => string) {
  return function(name: string) {
    const greeting = getGreeting(name);
    console.log(`${greeting} ${name}`);
  };
}

const greetWithTime = greet(function(name: string) {
  const hours = new Date().getHours();
  if (hours < 12) {
    return 'Good morning';
  }

  if (hours === 12) {
    return 'Good noon';
  }

  if (hours < 18) {
    return 'Good afternoon';
  }

  return 'Good night';
});
const names = ['John', 'Jane', 'Doug', 'Sally'];
names.forEach(greetWithTime);
