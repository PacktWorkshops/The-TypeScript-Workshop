/** ---------- toTitleCase ---------- **/

function toTitleCase (input:string) : string {
    // split the string into an array on every occurence of the space character
    const words = input.split(" ");
    const titleWords = [];
    // loop through each word
    for (const word of words) {
        // take the first character using `slice` and convert it to uppercase
        const initial = word.slice(0, 1).toLocaleUpperCase();
        // take the rest of the character using `slice` and convert them to lowercase
        const rest = word.slice(1).toLocaleLowerCase();
        // join the initial and the rest and add them to the resulting array
        titleWords.push(`${initial}${rest}`);
    }
    // join all the processed words
    const result = titleWords.join(" ");
    return result;
}


console.log(`toTitleCase("war AND peace"):`);
console.log(toTitleCase("war AND peace"));
 
console.log(`toTitleCase("Catcher in the Rye"):`);
console.log(toTitleCase("Catcher in the Rye"));

console.log(`toTitleCase("tO kILL A mOCKINGBIRD"):`);
console.log(toTitleCase("tO kILL A mOCKINGBIRD"));

/** ---------- countWords ---------- **/

function countWords (input: string): number {
    // split the words using a regex that will match any occurence of
    // a space, underscore or dash characters
    const words = input.split(/[ _-]/);
    // return the lenght of the array that is the result of the split
    return words.length;
}

console.log(`countWords("War and Peace"):`);
console.log(countWords("War and Peace"));
 
console.log(`countWords("catcher-in-the-rye"):`);
console.log(countWords("catcher-in-the-rye"));

console.log(`countWords("for_whom the-bell-tolls"):`);
console.log(countWords("for_whom the-bell-tolls"));

/** ---------- toWords ---------- **/

function toWords (input: string): string[] {
    // split the words using a regex that will match any occurence of
    // a space, underscore or dash characters
    const words = input.split(/[ _-]/);
    return words;
}

console.log(`toWords("War and Peace"):`);
console.log(toWords("War and Peace"));
 
console.log(`toWords("catcher-in-the-rye"):`);
console.log(toWords("catcher-in-the-rye"));

console.log(`toWords("for_whom the-bell-tolls"):`);
console.log(toWords("for_whom the-bell-tolls"));

/** ---------- repeat ---------- **/

function repeat (input: string, times: number): string {
    // create a new array that with length of `times`
    // and set each element to the value of the `input` string
    const instances = new Array(times).fill(input);
    // join the elements of the array together
    const result = instances.join("");
    return result;
}

console.log(`repeat("War", 3 ):`);
console.log(repeat("War", 3 ));
 
console.log(`repeat("rye", 1):`);
console.log(repeat("rye", 1));

console.log(`repeat("bell", 0):`);
console.log(repeat("bell", 0));

/** ---------- isAlpha ---------- **/

function isAlpha (input: string): boolean {
    // regex that will match any string that only has upper and lowercase letters 
    const alphaRegex = /^[a-z]*$/i
    // test our input using the regex
    const result = alphaRegex.test(input);
    return result;
}

console.log(`isAlpha("War and Peace"):`);
console.log(isAlpha("War and Peace"));
 
console.log(`isAlpha("Atonement"):`);
console.log(isAlpha("Atonement"));

console.log(`isAlpha("1Q84"):`);
console.log(isAlpha("1Q84"));


/** ---------- isBlank ---------- **/

function isBlank (input: string): boolean {
    // test if the first character of our input is an empty space
    while (input[0] === " ") {
        // successively slice off the first character of the input
        input = input.slice(1);
    }
    // the loop will stop on the first character that is not a space.
    // if we're left with an empty string, we only have spaces in the input
    const result = input === "";
    return result;
}

console.log(`isBlank("War and Peace"):`);
console.log(isBlank("War and Peace"));
 
console.log(`isBlank("       "):`);
console.log(isBlank("       "));

console.log(`isBlank(""):`);
console.log(isBlank(""));
