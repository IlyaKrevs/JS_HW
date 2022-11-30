// // Task1

// const item = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday",
// }
// console.log(item[3]);


// const user = {
//     name: "Ilya",
//     surname: "Krevs",
//     age: 28,
// }

// console.log(`${user.name}-${user.surname}-${user.age}`);

// user.lastname = prompt("Enter your lastname");
// console.log(user);

// delete user.surname;
// console.log(user);



// // Task2

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',];
// const arr2 = [1, 2, 3, 4, 5, 6, 7,];

// const weekDays = {};

// for (let i = 0; i < arr1.length; i++) {
//     weekDays[arr1[i]] = arr2[i];
// }
// console.log(weekDays);


// const obj = {
//     x: 1,
//     y: 2,
//     z: 3,
//     qwe: 5,
// }
// console.log(obj);

// for (const key in obj) {
//     obj[key] **= 2;
// }
// console.log(obj);



// Task3

const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};

// // Option1
// function FindSumInsideObj(objName) {
//     let sum = 0;
//     for (const key in objName) {
//         sum += objName[key];
//     }
//     return sum;
// }

// console.log(FindSumInsideObj(obj.key1));

// function FindSumAllObj(objName) {
//     let allSum = 0;
//     for (const key in objName) {
//         allSum += FindSumInsideObj(objName[key]);
//     }
//     return allSum;
// }

// console.log(FindSumAllObj(obj));



// Option2

// let sum = 0;
// for (const key in obj) {
//     for (const keyIN in obj[key]) {
//         sum+=obj[key][keyIN];
//     }
// }

// console.log(sum);



// Task4

const riddles = {
    question: "5<10? (Yes/No)",
    answer: "Yes",
    hitns: ["First", "Second", "Hints ended"],
}

function askQuestion(arg1, arg2, arg3) {
    let i = 0;
    do {
        userAnswer = prompt(arg1);
        console.log(`You lose hints = ${arg3[i++]}`);
        if (i >= arg3.length)
            i--;
    } while (userAnswer != arg2) {
        console.log(`Congratulation`);
    }
}


askQuestion(riddles.question, riddles.answer, riddles.hitns);
