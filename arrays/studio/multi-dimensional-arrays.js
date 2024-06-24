const { captureRejectionSymbol } = require("events");
const { syncBuiltinESMExports } = require("module");

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
console.log(food.split(',' ).sort());
console.log(equipment.split(",").sort());
console.log(pets.split(',').sort());
console.log(sleepAids.split(',').sort());
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food.split(',' ).sort(), equipment.split(',' ).sort(), pets.split(',' ).sort(), sleepAids.split(',' ).sort()];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cabinetSelected = Number(input.question(`Please select a cabinet (0 - 3): `));
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetSelected === 0) {
    console.log(`The contents of your cabinet are ${cargoHold[0]}!`)
} else if (cabinetSelected === 1 ) {
    console.log(`The contents of your cabinet are ${cargoHold[1]}!`)
} else if (cabinetSelected === 2) {
    console.log(`The contents of your cabinet are ${cargoHold[2]}!`)
} else if (cabinetSelected === 3) {
    console.log(`The contents of your cabinet are ${cargoHold[3]}!`)
} else {
    let newCabinetSelected = input.question(` Invalid entry. Please select a cabinet (0 - 3): `)
    console.log(`The contents of your cabinet are ${cargoHold[newCabinetSelected]}!`)

}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”


cabinetContents = cargoHold.join();
let selectACabinet = Number(input.question ("Please select a cabinet using number 0 - 3: "));
let itemSelected = input.question (`Please select an item from the following list, once selected, we will inform you if your item is in your selected Cabinet.
Items to choose from: 
${cabinetContents}. `);

if ((selectACabinet === 0 && cargoHold[0,0].includes(itemSelected)) || (selectACabinet === 1 && cargoHold[1,1].includes(itemSelected)) || (selectACabinet === 2 && cargoHold[2,2].includes(itemSelected)) || (selectACabinet === 3 && cargoHold[3,3].includes(itemSelected))) {
    console.log(`Cabinet ${selectACabinet} DOES contain ${itemSelected}.`)
} else {
    console.log(`Cabinet ${selectACabinet} DOES NOT contain ${itemSelected}. `)
}