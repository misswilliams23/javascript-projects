//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language[0] + language[4]);
console.log(language.toUpperCase().slice(0,1) + language.toUpperCase().slice(4,5));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let initials = (language.slice(0,1) + language.slice(4,5));
console.log(`The abbreviation for '${language}' is ${initials}.`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.replace('t', 'T').replace('c', 'C'));
console.log(notTitleCase[0].toUpperCase() + notTitleCase.slice(1,6) + "" + notTitleCase[6].toUpperCase() + notTitleCase.slice(7,10));
console.log((notTitleCase.toUpperCase().slice(0,1)) + notTitleCase.toLowerCase().slice(1,6) + ((notTitleCase.toUpperCase().slice(6,7)) + notTitleCase.toLowerCase().slice(7,10)));
