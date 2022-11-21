// // Task1
// function CubeOf(arg1) {
//     return arg1 ** 3;
// }
// console.log(CubeOf(2), CubeOf(3));

// // Task2
// let userNumber = Number(prompt("Enter your salary"));
// let stateTax = 0.87;
// if (isNaN(userNumber)) {
//     console.log("Wrong number");
// }
// else {
//     alert(`Your salary after state tax = ${SalaryMinusTax(userNumber, stateTax)}`);
// }

// function SalaryMinusTax(money, tax) {
//     return money * tax;
// }


// // Task3
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let c = Number(prompt("Enter third number"));

// function FindMax(arg1, arg2, arg3) {
//     let max = arg1;
//     if (max < arg2) {
//         max = arg2;
//     }
//     if (max < arg3) {
//         max = arg3;
//     }
//     return max;
// }
// console.log(FindMax(a, b, c));

// Task4
let a = 10;
let b = 50;

function Sum(arg1, arg2) {
    return arg1 + arg2;
}

function Difference(arg1, arg2) { // Can change arg1 with arg2 by use 1 variable, but this way no reason
    let max = arg1;
    let min = arg2;
    if (max < min) {
        max = arg2;
        min = arg1;
    }
    return max - min;
}

function Multiply(arg1, arg2) {
    return arg1 * arg2;
}

function Division(arg1, arg2) {
    return arg1 / arg2;
}
console.log(Sum(a, b));
console.log(Difference(a, b));
console.log(Multiply(a, b));
console.log(Division(a, b));