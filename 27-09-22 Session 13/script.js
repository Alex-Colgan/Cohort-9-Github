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

var item = document.getElementById("item").value;
var list = document.createElement("ul");
function addItemFunction() {
list.innerHTML = item;
list.appendChild(list);
item.value ="";
}