const favoriteGreetings: Record<string, string> = {
    John: 'Hey',
    Jane: 'Hello',
    Doug: 'Howdy',
    Sally: 'Hey there',
  };
  function greet(name: string) {
    const greeting = favoriteGreetings[name] || 'Hello';
    console.log(`${greeting} ${name}`);
  }
  
  greet('John'); 
    