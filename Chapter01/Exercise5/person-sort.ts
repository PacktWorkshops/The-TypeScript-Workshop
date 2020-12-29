// The interface for the person objects
interface Person {
    firstName: string;
    lastName: string;
}

// we use this variable to count calls
let count = 0;

// Gets the full name of a given person
function getFullName (person: Person) {
    count += 1;
    return `${person.firstName} ${person.lastName}`;
}

// array of persons that we need to sort
const programmers: Person[] = [
    { firstName: 'Donald', lastName: 'Knuth'},
    { firstName: 'Barbara', lastName: 'Liskow'},
    { firstName: 'Lars', lastName: 'Bak'},
    { firstName: 'Guido', lastName: 'Van Rossum'},
    { firstName: 'Anders', lastName: 'Hejslberg'},
    { firstName: 'Edsger', lastName: 'Dijkstra'},
    { firstName: 'Brandon', lastName: 'Eich'},
    // feel free to add as many as you want
];


// a naive and straightforward sorting function
function naiveSortPersons (persons: Person[]): Person[] {
    return persons.slice().sort((first, second) => {
        const firstFullName = getFullName(first);
        const secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    })
}

// Takes an array of persons, and return (a sorted) array of persons
// Uses a Schwartzian transform
function schwartzSortPersons (persons: Person[]): Person[] {
    // Use the array's `map` function to transform each element into a tuple
    const tuples: [Person, string][] = persons.map(person => [person, getFullName(person)]);
    // Sort the `tuples` array of tuples, using the standard `sort` method, on the second element of the tuple
    tuples.sort((first, second) => first[1].localeCompare(second[1]));
    // Transform the sorted array of tuples into the format we want - just an array of `person` objects
    // by taking the first element of each tuple, discarding the schwartz.
    const result = tuples.map(tuple => tuple[0]);
    // Return the new array from the function
    return result;
}

// Call the naive `sortPersons` function on our defined array
count = 0;
const sortedNaive = naiveSortPersons(programmers);

// Output both the sorted array, and the count variable.
console.log(sortedNaive);
console.log(`When called using the naive approach, the function was called ${count} times`);

// Call the Schwartzian `sortPersons` function on our defined array
count = 0;
const sortedSchwartz = schwartzSortPersons(programmers);

// Output both the sorted array, and the count variable.
console.log(sortedSchwartz);
console.log(`When called using the Schwartzian transform approach, the function was called ${count} times`);
