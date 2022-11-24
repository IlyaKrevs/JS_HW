// // Task1
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


// // let arr2 = [Math.random(), Math.random(), Math.random()];
// // console.log(arr2.length);
// // console.log(arr2);

// const arr2 = [];

// function FillArr(numberLetngh, arr) {
//     for (let i = 0; i < numberLetngh; i++) {
//         arr[i] = Math.random();
//     }
// }

// FillArr(3, arr2);
// console.log(arr2);


// // function genArr(elem) {
// //     const arr = [];
// //     for (let i = 0; i < elem; i++) {
// //         arr[i] = Math.round((Math.random() * 10));
// //     }
// //     return arr;
// // }


// let a;
// let b;
// let c;
// let delta = 1;
// const arr3 = [a, b, c];
// for (let i = 0; i < arr3.length; i++) {
//     arr3[i] = 0 + delta;
//     delta++;
//     console.log(arr3);
// }



// // Task2
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
// }
// console.log(arr);


// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(typeof arr[4]);
// console.log(arr.length);


// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);


// const arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.pop();
// console.log(arr.length);



// // Task3
// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 99; i += 2) {
//     console.log(i);
// }


// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// let count = 0;
// for (let num = 5; num <= 1000; num *= 3) {
//     console.log(num);
//     count++;
// }
// console.log(count);



// // Task4
// const arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//     sum += i;
//     console.log(i, sum);
// }
// console.log(sum);

// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// let item = '-';
// for (let i = 0; i <= 9; i++) {
//     item += `${i}-`;
// }
// console.log(item);

const arr = [2, 5, 9, 0, 3, 1, 4];
let i = 0;
while (arr[i] !== 0) {
    console.log(arr[i]);
    i++;
}