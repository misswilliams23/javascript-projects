let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
console.log(str.split ('e'));
console.log(str.split (' '));
console.log(str.split (''));
str.split('');
console.log(str);
//The purpose behind the parameter is to show where to split the string and return the remaining string. 

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
console.log(arr.join (","));
console.log(arr.join (''));
console.log(arr.join (' '));
arr.join('');
console.log(arr);
console.log(str.split(',').sort().join(','));
//3) Do split or join change the original string/array?
//No

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join());
console.log(cargoHold.split(',').sort().join(','));
