console.log("hi");

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
/**
  pop  = removes  last item from the end of an array
  push = add to the end

  unshift = add to the start of array
  shift =  which removes 1st item 

  length = returns the length of an array




 */

/** An array's items  are always indexed starting from 0
 *                 ['fruit', 'chocolate',' beans' , 'coffee']
 * index number   i    0          1          2          3
 *using .length        1          2          3          4
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
  "water",
];
console.log("myarray is ", myArray);

/**2 ---   ok lets check the index of a few items in your array  */
//(this item)
let myFoodIndexOne = myArray.indexOf("cake");

//   ( item to find , from index number)

let myFoodIndex = myArray.indexOf("cake", 3);
console.log(myFoodIndex);

/**3 ---- oh you got peckish and ate the last
 *        food on your list we need to remove it
 *        which array built in method can we use
 *         to remove it  ------ */

let IAte = myArray.pop();

console.log(IAte, myArray);

/**4---- you went to the shop  and replaced the item
 *      which array built in method can we use to put
 *        the item back on your list
 */

let iBought = myArray.push("liquid");

console.log(iBought, myArray);

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
console.log(IateAgain, myArray);

/** 7---- ok can you guess how to put it back in the 1st position */

let iAte = myArray.unshift("chocolate");

console.log(iAte, myArray);

/** ok we are fed up of eating the food in the same order
 *
 * which  two ways can change an arrays order?
 */

let myArraySort = myArray.sort();

console.log("sorted array", myArraySort);

let myArrayReverse = myArray.reverse();

console.log("reversed array", myArrayReverse);

/** function  */

/**my maths function */
function myFunction(a, b) {
  //console.log(a+b)
  return a - b;
  // this won't run
  console, log("hi");
}

//  a  ,  b
//myFunction('hi','all')
myFunction(5, 10);

console(myFunction(15, 5));