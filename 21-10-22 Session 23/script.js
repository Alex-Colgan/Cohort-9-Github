console.log("Hi.");

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




/** 1. Declaring an array variable and filling it with objects. */
let myArray = [
  "eggs",
  "pancakes",
  "bananas",
  "kedgeree",
  "cheese",
  "pizza",
  "burgers",
  "apples",
  "coffee",
  "pasta",
];
console.log('myArray is', myArray);

/** 2 .indexOf returns the index of the first instance of an object in an array. */
let myFoodIndex = myArray.indexOf('coffee');
console.log(myFoodIndex);

/** 3. Pop deletes the final object of an array and adds it to the new variable. */
let iAte = myArray.pop();
console.log(iAte, myArray);
/** .length returns the number of objects in an array. */
console.log(myArray.length);

/** 4. Push adds an object or variable to the end of an array. Used very often. */
let iBought = myArray.push('pasta');
console.log(iBought, myArray);
console.log(myArray.length);

/** 5. Checking the contents of an array. */
/**  .includes returns a true or false value. */
let findItem = myArray.includes('apples');
let findNonItem = myArray.includes('cabbage');
console.log('Found item', findItem);
console.log('Not in my array', findNonItem);

/**  This will give us either a positive number if found or a -1 when not found.  */
let findIndexTrue = myArray.indexOf('pancakes');
let nonIndexFlase = myArray.indexOf('cabbage');
console.log('Found item', findIndexTrue);
console.log('Not in my array', nonIndexFlase);

/** 6. Shift removes the first object in an array. */
let iAteAgain = myArray.shift();
console.log(iAteAgain, myArray);

/** 7. .unshift adds to the beginning of an array. */
let iBoughtAgain = myArray.unshift("eggs");
console.log(iBoughtAgain, myArray);

/** 8. Two ways to change an array's order. */
/** Sort arranges alphabetically. */
let myArraySort = myArray.sort();
console.log('Sorted array', myArraySort);
/** Reverse reverses the current order of the array. */
let myArrayReverse = myArray.reverse();
console.log('Reversed array', myArrayReverse);

/** Functions. */
function myFunction() {
    /** Locally declared variables. */
    let a = 1;
    let b = 2;
    console.log(a+b);
};
/** You need to call the function to use it. */
myFunction();

/** Variables declared as parameters (i.e. in the brackets of the function) are empty. */
function myFunction2(a,b) {
    console.log(a+b);
};
/** When we call the function we declare values for the variables. */
myFunction2(3, 4);
myFunction2('Hi', ' all');

/** Return finishes the function. */
function myFunction3() {
    let a = 5;
    let b = 6;
    return a + b;
};
/** Prints the literal function. */
console.log(myFunction3);
/** Prints the function results. */
console.log(myFunction3());
/** Use to generate an alert message on page load. */
alert(myFunction3());