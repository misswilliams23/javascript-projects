const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
 
let firstThreeLetters = str.slice(0,3);
let remainingLetters= str.slice(3,10);
let modStr = remainingLetters + firstThreeLetters;


console.log (firstThreeLetters);
console.log (remainingLetters);
console.log (modStr);
console.log(`${str} was changed using the slice method to return ${modStr}`);


//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = Number(input.question(`How many letters would you like to remove from the beginning of the word ${str} to place on the end?: `));
//numOfLetters = Number(numOfLetters);
firstThreeLetters = str.slice(0,numOfLetters);
remainingLetters = str.slice(numOfLetters, 10);
modStr = remainingLetters + firstThreeLetters;


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numOfLetters <= str.length ) {
    console.log(modStr)
} else {
    let newNumOfLetters = Number(input.question(`${numOfLetters} is more than the amount of letters in ${str}. Please enter a number less than ${str.length}: `))
    firstThreeLetters = str.slice(0, newNumOfLetters);
    remainingLetters = str.slice(newNumOfLetters, 10);
    modStr = remainingLetters + firstThreeLetters;
    console.log(modStr)
   
}