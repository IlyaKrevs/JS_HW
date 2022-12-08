// // Task1
// const temp = document.querySelector('.block');

// const newDiv = document.createElement('div');
// newDiv.setAttribute('class', 'item1');
// newDiv.textContent = 'new element';
// newDiv.style.color = 'blue';
// newDiv.style.border = '1px solid black'
// newDiv.style.backgroundColor = '#f8f8f8';
// newDiv.style.padding = '16px';

// temp.appendChild(newDiv);

// newDiv.setAttribute('class', 'item_1');



// // Task2
// const temp = document.querySelector('.text');
// console.log(temp.previousElementSibling);
// console.log(temp.parentElement);
// console.log(temp.parentElement.previousElementSibling);
// console.log(temp.parentElement.parentElement);



// // Task3
// let temp = document.querySelector('.subtitle');
// while (temp) {
//     console.log(temp);
//     temp = temp.parentElement;
// }



// Task4
const hints = document.createElement('h2');
hints.textContent = 'You miss one point';

const myButton = document.querySelector('.btn');
myButton.textContent = 'Press me';

const inputText = document.querySelector('.btn').previousElementSibling;

myButton.addEventListener('click', function () {
    if (inputText.value == '') {
        inputText.parentElement.appendChild(hints);
        inputText.style.border = '3px solid red';
    }
});




