console.log("Hi.");

let myArray = [
    "choc",
    "coffee",
    "cake",
    "sweets",
    "burgers",
    "crisps",
    "biscuits",
    "toffee",
    "cheese",
    "water",
  ]
  console.log('myArray is', myArray);

  // For loops, if else statements, functions.

  // A basic for loop done in function to stop continuous loop.
function loop() {
    // let start position/index to search = 0 ; go through all of myArray;
    // i is short for index.
    for (let i = 0; i < myArray.length; i++) {
        //myArray item at position [i], i value (try with [i] to see what happens).
        console.log(myArray[i], i);

        if (myArray[i].indexOf('veg') !== -1) {
            console.log('I found veg. Yuck.')
        } else if (myArray[i].indexOf('veg') === -1) {
            console.log('I found no veg.')
        }

        /*

        // if statement.
        if (myArray[i].includes('sweets')) {
            console.log('Sweets. Yum.');
        }

        if (myArray[i].includes('brusselSprouts')) {
            console.log('I hate veg.');

            // else if statement.
        } else if (myArray[i].includes('veg')) {
            console.log('I told you I hate veg.');

        } else if (myArray[i].includes('cake')) {
            console.log('I found cake. Yum.');
        };

        */

    };
};
loop();

function numberSort () {
    let number = Math.floor(Math.random()*100)
    console.log(number);
    // If number is an even number / %2 === 0 console.log('even') else console.log('odd').

    if (number %2 === 0) {
        console.log(number, 'Even.');
    } else {
        console.log(number, 'Odd.')};
    
}
numberSort();