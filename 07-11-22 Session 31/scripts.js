// F = (C × 9/5) + 32

function tempConverter(number) {
  let C = number;
  let F = 0;
  return (F = (C * 9) / 5 + 32);
}
console.log(tempConverter(65));

let numbers = ["10"];
for (let i = 0; i < numbers.length; i++) {
  if (numbers.length < 20) {
    let number = Math.floor(Math.random(numbers) * 100);
    numbers.push(number);
  } else if (numbers.length === 20) {
    console.log(numbers);
  }
}

/*
function multipleItems(itemIndex) {
  for (let i = 0; i < 10; i++) {
    let multiples = numbers[itemIndex] * i;
    console.log(multiples);
    return multiples
  }
}
console.log(multipleItems(2));
*/

numbers.forEach((num) => {
  for (let i = 0; i < 10; i++) {
    console.log(num * i);
  }
});
console.log(Math.min(...numbers));


/*
function sum(numbers) {
    return numbers.reduce((a, b) => a + b);
}

console.log(sum(numbers));
*/

const odds = [];
numbers.forEach((num) => {
  if (num % 2 === 1) {
    odds.push(num);
  }
});
console.log(odds);

const evens = [];
numbers.forEach((num) => {
  if (num % 2 === 0) {
    evens.push(num);
  }
});
console.log(evens);
