/**What do we need JS to do

submit button to call a function

need to get values from the radio buttons

need it to show the thankyou card and value checked */

/** Variable that contains our user's number selection. */
let submitHandler = document.getElementById('submitHandler');

/** Funtion which activates when our user hits the submit button. */
/** This is my event listener. */
submitHandler.addEventListener('click', (e)=> { 
    /**preventDefault stops some browsers from refreshing our page before we finished. */
    e.preventDefault();
    console.log('I linked it');
// Find the first input called numbers and return is value to radioButtons.
    let radioButtons = document.querySelector(
        "input[name='numbers']:checked"
    ).value;
    console.log(radioButtons);

        /** Producing the 2nd html card. Creating HTML elements using javascript.*/    
        let outerTwoCard = document.createElement('div');
        let topImage = document.createElement('img');
        let userInputvalue = document.createElement('h3');
        let text = document.createElement('h2');
        let paraText = document.createElement('p');
        const lineBreak = document.createElement('br');

        /** Card container div. */
        outerTwoCard.className = 'outerCard';
        text.className = 'subHeader';
        paraText.className = 'mainText';
        
        
        /** Source link to thank you image and an alternative text. */
        topImage.src = './images/illustration-thank-you.svg';
        topImage.alt = 'thank you';
        topImage.className = 'topImage';
        /** Concatenating our text with radioButtons variable which contains the value our user has selected. */
        userInputvalue.innerText =  'You selected ' + radioButtons + ' out of 5';

        /** h2 text element. */
        text.innerText = 'Thank you!';
        

        /** Paragragh text element. */
        paraText.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';

        let result = document.getElementById('result');

        outerTwoCard.append(topImage);
        outerTwoCard.append(userInputvalue);
        // userInputvalue.append(lineBreak);
        outerTwoCard.append(text);
        outerTwoCard.append(paraText);

        let outerCard = document.getElementById('outerCard');
        outerCard.style.display = 'none';

        result.append(outerTwoCard);

        /*
        const myFunction = (x, y, z) => {
            return x;
        };


        const myFunction = (x, y, z) => x ;
        */
});




