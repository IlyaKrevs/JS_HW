// // Task1
// for (let i = 0; i <= 10; i++) {
//     if (i == 0) {
//         console.log(`${i} - this is zero`);
//     }
//     else if (i % 2) {
//         console.log(`${i} this is odd number`);
//     }
//     else {
//         console.log(`${i} this is even number`);
//     }
// }



// // Task2
// const mainArray = [1, 2, 3, 4, 5, 6, 7];

// function DeleteDigit45(array) {
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] != 4 && array[i] != 5) {
//             tempArray.push(array[i]);
//         }
//     }
//     return tempArray;
// }

// console.log(mainArray);
// console.log(DeleteDigit45(mainArray));



// // Task3
// // create random int
// function GenerateRandInt() {
//     return Math.floor(Math.random() * 10);
// }

// // fill array
// const mainArray = [];
// for (let i = 0; i < 5; i++) {
//     mainArray.push(GenerateRandInt());
// }

// // find sum
// function SumByArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// // find min
// function FindMinInArray(arg) {
//     let min = arg[0];
//     for (let i = 1; i < arg.length; i++) {
//         if (min > arg[i]) {
//             min = arg[i];
//         }
//     }
//     return min;
// }

// // find any number
// function FindNumber(arg, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arg) {
//             console.log(`This array inqlude ${arg}`);
//             break;
//         }
//         else if (i == arr.length - 1) {
//             console.log(`This array not inqlude ${arg}`);
//             break
//         }
//     }
// }


// let userNumber = 3;
// console.log(mainArray);
// console.log(SumByArray(mainArray));
// console.log(FindMinInArray(mainArray));
// FindNumber(userNumber, mainArray);



// // Task4
// let item = 'x';
// for (let i = 0; i < 20; i++) {
//     console.log(item);
//     item += 'x';
// }