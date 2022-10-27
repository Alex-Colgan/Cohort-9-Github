function randomColour() {
  const colours = ["red", "orange", "yellow", "green", "blue", "indigo"];
  console.log(colours);
  let colourPicker = colours[Math.floor(Math.random() * colours.length)];
  let backgroundChange = document.getElementById("wrap");
  console.log(colourPicker);
  backgroundChange.style.backgroundColor = colourPicker;
}
randomColour();

function createMyButton() {
  let button = document.createElement("button");
  button.id = "myButton";
  let backgroundChange = document.getElementById("wrap");
  backgroundChange.append(button);
  button.style.width = "10rem";
  button.style.height = "3rem";
  button.textContent = "Change Colour";
}
createMyButton();

let button = document.getElementById("myButton");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  randomColour();
});

// .trim() is used to delete all whitespace. Can be helpful to prevent whitespace bugs.
/** To keep track of your brackets create your brackets empty first, and then populate them.
That is a clear way to indicate you have the correct number of brackets. */

document.getElementById("calculate").addEventListener("click", (e) => {
  e.preventDefault();
  let ageInput = document.getElementById("ageInput").value;
  let dogAge = ageInput * 7;
  let humanAge = ageInput / 7;
  resultText.innerHTML =
    "Your age in dog years is: " +
    dogAge +
    ". Your age in human years is: " +
    humanAge +
    ".";
});
