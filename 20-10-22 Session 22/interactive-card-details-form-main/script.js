// TO DO: change the identifying names to fit your code

// Update the deatils on the card as the user fills in the fields.
const form = document.getElementById('checkout-form');
const cardholderNameInput = document.getelementbyid('cname');



// Console log the cardholder name when you type in the input.
// When input changes update teh card text on the card display using innerhtml.
function updateCardDetails() {
   // console.log(cardholderNameInput.value);
   document.getElementById('card_cname').innerHTML = cardholderNameInput.value;
}
cardholderNameInput.addEventListener('change', updateCardDetails);

