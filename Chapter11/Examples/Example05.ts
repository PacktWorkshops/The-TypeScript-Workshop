function greet(name: string, getGreeting: (name: string) => string) {
    const greeting = getGreeting(name);
    console.log(`${greeting} ${name}`);
  }
  
function getGreeting(name: string) {
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
  }
  
  greet('John', getGreeting); // prints 'Good morning John' if it's morning
  greet('Doug', getGreeting); // prints 'Good morning Doug' if it's morning
  