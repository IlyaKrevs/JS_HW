const myForm = document.querySelector('.myForm');
const myCheckBox = myForm.querySelector('.myCheckbox');

const myButton = myForm.querySelector('.myButton');
let newText = document.createElement('p');
newText.textContent = 'you should accept condition before next step';

myForm.addEventListener('submit', (e) => {
    if (myCheckBox.checked) {
        console.log('All fine');
    }
    else {
        e.preventDefault();
        console.log('not all');
        myForm.appendChild(newText);
    }
});



const myForm2 = document.querySelector('.myForm2');
const myTea = myForm2.querySelector('.tea');
const myCoffee = myForm2.querySelector('.coffee');

// myForm2.addEventListener('submit', (e) => {
//     if (myTea.checked) {
//         e.preventDefault();
//         console.log('Tea ended');
//     }
//     if (myCoffee.checked) {
//         e.preventDefault();
//         console.log('Coffee ended');
//     }
// });

const myDrinks = document.querySelectorAll('.drinks');

myForm2.addEventListener('submit', (e) => {
    for (let i = 0; i < myDrinks.length; i++) {
        if (myDrinks[i].checked) {
            e.preventDefault();
            console.log(`${myDrinks[i].nextElementSibling.textContent} ended `);
        }
    }
});

const formPass = document.querySelector('.formPass123');

const myPass = formPass.querySelector('.myPass');

formPass.addEventListener('change', (e) => {
    if (myPass.value == 'Password') {
        myPass.style.border = '5px solid green'
    }
    else {
        myPass.style.border = '5px solid red';
    }
});



const exampleText = document.querySelector('.exampleText');
const myText = exampleText.querySelector('.myText');
const myInputqwe = exampleText.querySelector('.myInputqwe');

exampleText.addEventListener('input', (e) => {
    myText.textContent = myInputqwe.value;
});
