/*let number = document.querySelector(".number");
let multiply = document.querySelector(".multiply");
let result = document.querySelector(".result");

function multiplyfunction() {
    document.getElementById("result").innerHTML = number * multiply;    
    console.log(result);
    console.log(number);
    console.log(multiply);
}*/



/*var itemInput = document.getElementById("item");
var submit = document.getElementById("submit");
var list = document.getElementById("list");

function addItem() {
    var currentItem = itemInput.value;
    var listItem =document.createElement("li");
    listItem.innerHTML = currentItem;

    list.appendChild(listItem);

    itemInput.value = "";
}

submit.onclick = addItem;*/



/*function validationForm() {
    console.log("I am in the validation")
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        console.log("I am in the validation")
        return false
    } else {
        alert("Name was filled out and would go to post!")
        }
}*/

//Creating variables for our HTML tags and an empty array that will be our final list.
let list = [];
let shoppingList = document.getElementById("shoppingList");
let input = document.getElementById("item");
let add = document.getElementById("add");

//Creating javascript for our HTML button that runs the addItem function when it is clicked.
const btn = document.getElementById('add')
btn.addEventListener('click', addItem)

function addItem() {

    //New local variable for our new items. Variables added in a function are local to that function.
    let newItem = input.value;

    //If else statements give info to user if input field is used incorrectly.
    if (list.includes(newItem)) {
        alert("That has already been added.");
    } else if (newItem == "") {
        alert ("Field cannot be left blank.");
    } else {

        //Push puts our new item at the end of our list.
        list.push(newItem);

        //Empties our input variable for it's next use.
        input.value = "";

        //Console log for testing.
        console.log(list);

        /**This is creating a new variable called newLine and 
         * asigning it to the element with the id of li from the html page.
         */
        let newLine = document.getElementById("li");

        /**The following lines of code take the text from our new item and 
         * place them into our list element and create a new line
         * so that our text appears in a column.
         */
        let item = document.createElement("p");

        //Puts the text content of newItem into item.
        item.textContent = newItem;

        //Puts our text from item into our newLine shopping list format.
        //Adds a new line to the end of our item so our list items don't all appear on the same line.
        newLine.append(item);

        //Failed coding attempts trying to get the list items to appear on a new line.
        //newLine.append("\n");
        //'-'+ newItem + '<br/>'
        //shoppingList.append(newLine);
        //`Already added'${items[i]}`
    }
}