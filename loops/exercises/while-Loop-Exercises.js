//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let shuttleFuelLevel;
let amtOfAstronauts;
let shuttleAltitude;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
shuttleFuelLevel = input.question `Please enter current fuel level:  `;



while (shuttleFuelLevel <= 5000 || shuttleFuelLevel > 30000 || isNaN(shuttleFuelLevel) ) {
  shuttleFuelLevel = input.question `Invalid input. Please enter a number between 5,000 & 30,000: `;
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
 amtOfAstronauts = input.question `Please enter the number of Astronauts on board: `;
 
 while (amtOfAstronauts < 1 || amtOfAstronauts > 7 || isNaN(amtOfAstronauts)) {
  amtOfAstronauts = input.question `Please enter a number 1 - 7: `;
 }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
//shuttleAltitude = input.question `What is the current altitude level?`;
shuttleAltitude = 0

while (shuttleFuelLevel >= 0) {
  // console.log(shuttleAltitude);
  // console.log(shuttleFuelLevel);
  shuttleAltitude = shuttleAltitude + 50; 
  shuttleFuelLevel = shuttleFuelLevel - amtOfAstronauts*100;

 
}



// while (shuttleFuelLevel-100*amtOfAstronauts >= 0) {
//   shuttleAltitude += 50;
//   shuttleFuelLevel -= 100*amtOfAstronauts;
//   console.log(shuttleAltitude);
//   console.log(shuttleFuelLevel);
//   }

console.log( `The shuttle gained an altidude of ${shuttleAltitude} km. `)

if (shuttleAltitude >= 2000 ) {
  console.log (`Orbit Achieved! `)
} else {
  console.log (`Failed to reach orbit. `)
}
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
