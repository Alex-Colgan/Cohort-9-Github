console.log("hi");
/**------Session 1 ------ */
/**
 variables,
    let     ( this variable can have it values changed)
    const    (this variable will have  
           a CONSTant value which stays the same)
 */
/**  THESE WORK FOR STRINGS NUMBERS AND MORE--
   =     change the value  to this
   ==    if the values are roughly the same 
             (will most likely be same value but possible different type)
   ===   the values must match
   !==    the values are not equal

 */

/** Array  
  can contain mixed properties/values.
  an array always has [] , square brackets  , array brackets 
  items in Array will normally  be seperated by  a ,
   
  an   Array has several built in methods.
        ---- name some here ---- */
//
/**
  pop  = removes  last item from the end of an array
  push = add to the end

  unshift = add to the start of array
  shift =  which removes 1st item 

  length = returns the length of an array

  includes =  if the Array has  this value in it


 */

/** An array's items  are always indexed starting from 0
 *                 ['choc', 'coffee',' cake' , 'sweets']
 * index number   i    0        1       2          3
 *using .length        1        2       3          4
 *
 */

/** 1----- ok now we are going to construct an array of
 *                      10 off your favourite foods----- */

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
  "liquid",
];
console.log("my array is ", myArray);

/**2 ---   ok lets check the index of a few items in your array  */

let myFoodIndexOne = myArray.indexOf("cake");

console.log(myFoodIndexOne);

// indexOf always returns a number  index position

//   ( item to find , from index number)

let myFoodIndex = myArray.indexOf("cake", 3);
console.log(myFoodIndex);

/**3 ---- oh you got peckish and ate the last
 *        food on your list we need to remove it
 *        which array built in method can we use
 *         to remove it  ------ */

let IAte = myArray.pop();

// a variable that is assigned to a pop  method will return the value that you removed
// pop mutates my original array

//console.log(IAte, myArray);

/**4---- you went to the shop  and replaced the item
 *      which array built in method can we use to put
 *        the item back on your list
 */

let iBought = myArray.push("liquid");

//when using push the variable saved to this will show length array

console.log(iBought, "ibought");
console.log(myArray, "myarray");
//push will always mutate    my array
console.log(myArray.length);

/**5 --- hmmm your cupboard is pretty full you you need to check
 *      if you have an item in there before you buy another one
 *       which array built in method can we use to check
 */

//will give a true or false value
let findItem = myArray.includes("cake");
let findNonItem = myArray.includes("veg");

console.log("found item", findItem);
console.log("not in my array", findNonItem);

// this will gave us  either positive number if found  or
// negative -1 when not found
let findIndexTrue = myArray.indexOf("cake");
let nonIndexFalse = myArray.indexOf("veg");

console.log("found item", findIndexTrue);
console.log("not in my array", nonIndexFalse);

/**6 --- oh someone ate  the first thing in your list
 *      how can we remove it
 *       which array built in method can we use
 */

let IateAgain = myArray.shift();
console.log(IateAgain, myArray, "i ate again");

/** 7---- ok can you guess how to put it back in the 1st position */

let iAte = myArray.unshift("chocolate");

console.log(iAte, myArray, "i put back");

/** ok we are fed up of eating the food in the same order
 *
 * which  two ways can change an arrays order?
 */
let mySort = myArray.sort();

let myReverse = myArray.reverse();

//let myArraySort = myArray.sort();

//console.log("sorted array", myArraySort);

//let myArrayReverse = myArray.reverse();

//console.log("reversed array", myArrayReverse);

/** function  */

/**my maths function */
function myFunction(a, b) {
  return a + b;
}

//console.log(myFunction());
let sum1 = myFunction(10, 20);
console.log(sum1, "sum1");

let sum = myFunction("hi", "all");

console.log(sum, "sum");

/** creating two seperate buttons */

let myButton = document.createElement("button");
myButton.id = "button1";

let myButton2 = document.createElement("button");
myButton2.id = "button2";

let spacefill = document.getElementById("fillMeIn");
/**this will add item to your document from its id */
spacefill.append(myButton);

spacefill.append(myButton2);
/**my button from the html */
let butt1 = document.getElementById("button1");
/**my 2nd button from the html */
let butt2 = document.getElementById("button2");

// here we are  listening for the user to click on the button

/**-------Session 2 -------- */

//  a  ,  b
//myFunction('hi','all')
myFunction(5, 10);

console.log(myFunction(15, 5));

//we will be using myArray from part 1 which was an array with 10 of our favourite foods
/* 
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
];*/

/** for loops ,  if else statements,  functions  */

/** A basic for loop done in function to stop continuos loop */

function loop() {
  //let start position/index to search = 0 ;go through all of myArray;
  // i is short for index

  for (let i = 0; i < myArray.length; i++) {
    //myArray item at postion [i] , i value [try with [i] to see what happens)

    console.log(myArray[i], i);
    if (myArray[i].indexOf("veg") !== -1) {
      console.log("i found veg yuck");
    } else if (myArray[i].indexOf("veg") === -1) {
      console.log("i found no veg");
    }
  }
}

//loop()

function numberSort() {
  let number = Math.floor(Math.random() * 100);

  console.log(number);
  // if number is a even number  %2  === 0  console.log('even')   else console.log('odd)

  if (number % 2 === 0) {
    console.log(number, "even");
  } else {
    console.log("odd", number);
  }
}

numberSort();

/*  if(myArray[i].includes('sweets')){
      console.log('i found sweets yum yum')
    } 
   if(myArray[i].includes('cake') || myArray[i].includes('sweets')){
      console.log('i found yummy food')
    } 
   else if(myArray[i].includes('veg')) {
      console.log('i hate veg')
 }  else if(myArray[i].includes('cake')) {
    console.log('i told u I  hate veg')
}*/

/**empty if */
// possible usage if(user not signed in ) {go to sign in page}
// if this is met do this
//
//   if () {}

/** empty if ,else */
//possible usage if(user signed in){go to this page} else {go to this page}
// if this condition is met do this  else do that

//if () {} else {}

/**empty if  ,  else-if */
//poss usage if(user signed in and validated ){go here }else if(user signed in and not validated )[go here ]else {go here}
// if this condition is met do this  else if this condition is met do this
//

//if () {} else if () {}

/**-------SESSION 3 ------- */

/**using JS to manipulate the dom (the HTML page) */

// there are many ways to get elements from HTML  so we can manipulate
//   them/change them using JS
// Get your elements
// can you name some

/**getElementById
 * getElementsByClassName
 * querySelector
 *
 * */

//once we have the elements we can then use js to change them
//Change your elements
// can you name some key properties that are used to change your elements

//lets put our knowledge from previous sessions to use

/** innerHTML 
    inerText
    textContent 
    style

*/

// Task 1
/**
 * Before you begin create an empty div in HTML and give it an id
  *1 create an empty function  
  *2 inside the function
  *3 create an array of 6 different colours assign it to a variable 
     called colors
  *4 insert this line into your function 
    let colourPicker =  colors[Math.floor(Math.random() * colors.length)]
 
  *6 now create a new varible and use it to hold the backgroundChange
       div from  the html document
       let myDiv = document.getElementById('backgroundChange')
  *7 using the above variable can you use properties to change it's 
      background colour you will need  to use 
         the varible from step 4  also 
         variable6.style.backgroundColor = colourPicker
  *8 you may want to add a little css to size the div from above 
  *9 Call your function  below this function to see it work
  *10  refresh your page to watch it change colour 
  * 
  * 
  */

let userInput = document.getElementById("age").value;
console.log(userInput);

/** now if we wanted the user to be able to click a button  to use the above function what options do we have to do this 
    
    */

/** lets use both options to do so  */

// onclick  || addEventListener

//option 1
//use the onclick way to run the function with a button in HTML

//option 2
//use the addEventListener to run the function
//with a button created in js

function color() {
  let box = document.getElementById("backgroundChange");
  //  console.log(box)
  //index      0      1        2        3          4           5
  const colors = ["red", "blue", "green", "yellow", "orange", "blueviolet"];
  //length     1       2       3
  // console.log(colors[4])
  console.log(
    colors.map((item, i) => {
      //  console.log(item) // give full string value  (colour)
      //  console.log(i) // gives us the index position
      // console.log(item[3]) // gives us  the letter in item index position
    })
  );
  let number = Math.floor(Math.random() * colors.length);
  //console.log(number)
  /**get random color from colors */
  let randomColor = colors[number];
  //console.log(randomColor)
  // colors[2]
  box.style.backgroundColor = randomColor;
}

color();

function createMyButton() {
  let button = document.createElement("button");
  button.id = "myButton";
  let box = document.getElementById("backgroundChange");
  box.append(button);
  button.style.width = "10rem";
  button.style.height = "3rem";
  button.textContent = "change colours";
}

createMyButton();

let button = document.getElementById("myButton");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  color();
});

//.trim()
let buttons = document.getElementById("ageconverter");

buttons.addEventListener("click", (e) => {
  console.log(e);
  let userInput = document.getElementById("age").value;
  console.log(userInput);
});

butt1.addEventListener("click", (e) => {
  console.log(e);
  // this adds text to the button
  butt1.innerHTML = " I am button one";
  color();
});

butt2.addEventListener("click", (e) => {
  console.log(e);
  butt2.innerHTML = " I am button two";
  color();
});