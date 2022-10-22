// TO DO: change the identifying names to fit your code

// Update the deatils on the card as the user fills in the fields.
//const form = document.getElementById('checkout-form');
//const cardholderNameInput = document.getElementByid('cname');



// Console log the cardholder name when you type in the input.
// When input changes update teh card text on the card display using innerhtml.
//function updateCardDetails() {
   // console.log(cardholderNameInput.value);
   //document.getElementById('card_cname').innerHTML = cardholderNameInput.value;
//}
//cardholderNameInput.addEventListener('change', updateCardDetails);



let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
   console.log(e);
   let name = e.path[1][0].value;
   console.log(name);
   let number = e.path[1][1].value;
   console.log(number);
   let mm = e.path[1][2].value;
   let yy = e.path[1][3].value;
   let cvc = e.path[1][4].value;

   if(  name === '' 
  || number=== ''
  || mm === ''
  || yy ===  ''
  || cvc === ''
  
  ){
    alert('please fill in all sections')
  } else {


   let cardNumberEg = document.getElementById('cardNumberEg');
   let cardNameEg = document.getElementById('cardNameEg');
   let cardDateEg = document.getElementById('cardDateEg');
   let cardCVCEg = document.getElementById('cardCVCEg');

   cardNumberEg.innerHTML = number;
   cardNameEg.innerHTML = name;
   cardDateEg.innerHTML = mm + "/" + yy;
   cardCVCEg.innerHTML = cvc;
}
});

