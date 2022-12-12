
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
//   теги будут созданы браузером.


document.addEventListener('DOMContentLoaded', console.log('DomContentLoaded 123'));



// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
// ресурсы страницы будут загружены.
// 

document.addEventListener('load', console.log('All fine'));



// 3. При клике на какой - либо тег на странице в консоль должно выводиться
// сообщение наподобие:
// Класс "super_element" присутствует в элементе "div".
// сообщение должно определять присутствует или отсутствует класс "super_element"
// у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// которому был совершен клик.
// Необходимо использовать делегирование.

addEventListener('click', function (e) {
    if (e.target.parentElement.querySelector('.super_element')) {
        console.log('Yes inqlude');
        console.log(e.target);
    }
    else {
        console.log('Not inqlude');
    }
})
// Тут нехватает ещё проверок на то, ткнул ли пользователь вне тега body



// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение:
// "Вы навели на textarea."

const item4 = document.querySelector('textarea');
item4.addEventListener('mouseover', function (e) {
    console.log('You hover on area');
});



// 5. Необходимо повесить событие клика на тег ul.В обработчике события в
// консоль необходимо выводить текст, который записан внутри элемента кнопки,
//     по которой был произведен клик.
// Если клик был не по кнопке, то ничего выводить не нужно.
// Необходимо использовать делегирование.

const item5 = document.querySelector('ul');
const item6 = item5.querySelectorAll('button');

item6.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log(element.textContent);
    })
});



// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только
// потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul ?
//     Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Предполагаю, что из-за иерархии уровней древа DOM, т.е. эвент на "кнопке" находится уровнем ниже, и обрабатывается раньше. на самом деле незнаю



// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const item7 = document.querySelectorAll('li');

for (let i = 0; i < item7.length; i++) {
    if (i % 2)
        item7[i].style.backgroundColor = 'black';
}