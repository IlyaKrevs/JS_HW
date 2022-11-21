// Task1

// function HelloUser(firstName, lastName, age) {
//     alert(`Hello ${firstName} ${lastName}, your age ${age}`);
// }

// function SquareOf(arg) {
//     return console.log(arg ** 2);
// }

// function CheckForPositive(arg) {
//     if (arg > 0) {
//         console.log('+++');
//     }
//     else if (arg < 0) {
//         console.log('---');
//     }
//     else {
//         console.log('= 0');
//     }
// }



// Task2

// function Sum3Numb(arg1, arg2, arg3) {
//     return console.log(arg1 + arg2 + arg3);
// }

// let item1 = 1;
// let item2 = 2;
// let item3 = 3;

// Sum3Numb(item1, item2, item3);

// func(2) = 4;
// func(3) = 9;
// func() = 25;



// Task3
// function SqrtOf(arg1) {
//     return Math.sqrt(arg1);
// }
// console.log(SqrtOf(3) + SqrtOf(4));

// function FindMinNum(arg1, arg2) {
//     return (arg1 > arg2 ? arg2 : arg1);
// }

// console.log(FindMinNum(511, 114));



// Task4
function NameOfDay(arg1) {
    switch (arg1) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Wrong number");
    }
}
NameOfDay(5);

function HelloByTime(name, time) {
    if (time <= 6) {
        console.log(`Good morning ${name}`);
    }
    else if (time <= 12) {
        console.log(`Good afternoon ${name}`);
    }
    else if (time <= 18) {
        console.log(`Good evening ${name}`);
    }
    else {
        console.log(`Good night ${name}`);
    }
}

let userName = "Ilya";
let date = new Date();
let nowHour = date.getHours();
console.log(typeof date.getHours());

HelloByTime(userName, nowHour);