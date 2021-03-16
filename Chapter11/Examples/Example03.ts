
  const favoriteGreetings: Record<string, string> = {
    John: 'Hey',
    Jane: 'Hello',
    Doug: 'Howdy',
    Sally: 'Hey there',
  };
  

function greet(name: string, mapper: Record<string, string>) {
    const greeting = mapper[name] || 'Hello';
    console.log(`${greeting} ${name}`);
  }

  greet('John', favoriteGreetings); 
  greet('Doug', favoriteGreetings);   