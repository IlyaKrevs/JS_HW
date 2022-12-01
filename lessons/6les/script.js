// // Task1

// const linkFirst = document.querySelector('#block');
// console.log(linkFirst);


// const linkSecond = document.querySelector('.www');
// console.log(linkSecond);



// // Task2

// const linkFirst = document.querySelector('.link');
// linkFirst.textContent = 'link text js';
// linkFirst.href = 'https://developer.mozilla.org/ru/';


// const linkSecond = document.querySelector('.photo');
// linkSecond.src = 'newphoto.jpg';



// // Task3
// const linkFirst = document.querySelector('.content');
// const newElement = document.createElement('p');
// newElement.textContent = 'New text';
// linkFirst.appendChild(newElement);
// linkFirst.removeChild(newElement);

// const linkFirst = document.querySelector('.item');
// const newImg = document.createElement('img');
// const newTitle = document.createElement('p');
// const newSubTitle = document.createElement('p');

// newImg.src = 'hellloooo.jpg';
// newImg.alt = 'ZDOROVA';
// newTitle.textContent = 'lorem5';
// newSubTitle.textContent = "lorem10";

// linkFirst.append(newImg);
// linkFirst.append(newTitle);
// linkFirst.append(newSubTitle);



// // Task4

// const linkFirst = document.querySelector('.item');
// const newElement = document.createElement('button');
// newElement.textContent = 'PRESS';
// let count = 1;
// linkFirst.appendChild(newElement);

// newElement.addEventListener('click', function (e) {
//     console.log(`You press on button ${count++} times`);
// });


// Task5
const linkFirst = document.querySelector('.item');
const newElement = document.createElement('button');
newElement.textContent = 'Press for SEND';
linkFirst.appendChild(newElement);
let count = 0;


newElement.addEventListener('click', function (e) {
    if (count < 1) {
        newElement.textContent = 'SENDED';
        count++;
        console.log(count);
    }
    if (count > 0) {
        newElement.setAttribute("disabled", "disabled");
    }
});



