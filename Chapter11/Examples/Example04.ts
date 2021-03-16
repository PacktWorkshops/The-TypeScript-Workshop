
const favoriteGreetings: Record<string, string> = {
   John: 'Hey',
   Jane: 'Hello',
   Doug: 'Howdy',
   Sally: 'Hey there',
};
  
  function greet(name: string, getGreeting: (name: string) => string) {
    const greeting = getGreeting(name);
    console.log(`${greeting} ${name}`);
  }
  
  function getGreeting(name: string) {
    const greeting = favoriteGreetings[name];
    return greeting || 'Hello';
  }
  
  greet('John', getGreeting); // prints 'Hey John'
  greet('Doug', getGreeting); // prints 'Howdy Doug'
