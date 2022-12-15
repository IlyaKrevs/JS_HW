//     1. При изменении значения в input с id="from", значение содержащееся в нем
// должно моментально отображаться в span. То есть при печати в input'е тег span
// также должен меняться.

const myFrom = document.querySelector('#from');
const mySpan = document.querySelector('span');
console.log(myFrom);
console.log(mySpan);

myFrom.addEventListener('input', (e) => {
    mySpan.textContent = myFrom.value;
}
);



// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом
// message:
// 1) добавить два класса: animate_animated и animate_fadeInLeftBig
// 2) поставить данному элементу стиль visibility в значение 'visible'.
// 

const myButton = document.querySelector('.messageBtn');
const myMessage = document.querySelector('.message');
console.log(myButton);
console.log(myMessage);

myButton.addEventListener('click', (e) => {
    myMessage.classList.add('animate_animated', 'animate_fadeInLeftBig');
    myMessage.style.visibility = 'visible';
});



// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
// форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
// должны быть подсвечены незаполненные поля (необходимо поставить класс error
// незаполненным полям).
// Как только пользователь начинает заполнять какое-либо поле, необходимо,
// при вводе в данное поле, произвести проверку:
// Если поле пустое, необходимо данное поле подсветить (поставить класс error
// данному полю).
// Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const myForm = document.querySelector('form');
console.log(myForm);

const myInputs = myForm.querySelectorAll('.form-control');
console.log(myInputs);

myInputs.forEach(element => {
    element.addEventListener('input', (e) => {
        if (element.value == '') {
            element.classList.add('error');
        }
        else {
            element.classList.remove('error');
        }
    });
});

myForm.addEventListener('submit', (e) => {
    if (myForm.querySelector('.error')) {
        e.preventDefault();
    }
});


