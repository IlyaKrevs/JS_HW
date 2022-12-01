// // Task1

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// for (const key in numbers) {
//     if (numbers[key] > 3)
//         console.log(numbers[key]);
// }



// // Task2

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };
// console.log(`1 = ${post.author}, 2 = ${post.comments[0].rating.dislikes}, 3 = ${post.comments[1].userId}, 4 = ${post.comments[1].text}`);



// // Task3

// // Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
// // метод forEach.

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];


// function Discount(obj) {
//     for (const key in obj) {
//         if (key === 'price') {
//             obj[key] *= 0.85;
//         }
//     }
// }

// products.forEach(Discount);

// console.log(products);



// Task4
// 1) Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2) Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];

// // 1)

// function CheckPhotos(obj) {
//     for (const key in obj) {
//         if (key === "photos") {
//             const item = obj[key];
//             return item.length > 0;
//         }
//     }
// }


// let result = products.filter(CheckPhotos);
// console.log(result);

// 2) option1

// function Compare(arr) {
//     for (let i = 0; i < arr.length; i++)
//         for (let j = i + 1; j < arr.length; j++) {
//             {
//                 if (arr[i].price > arr[j].price) {
//                     let temp1 = arr[i];
//                     arr[i] = arr[j];
//                     arr[j] = temp1;
//                 }
//             }
//         }
// }

// console.log(products);
// let result = Compare(products);

// // 2) option2

// let result = products.sort(function Compare(a, b) {
//     if (a.price > b.price)
//         return 1;
//     if (a.price < b.price)
//         return -1;
// });
// console.log(result);



// // Task5
// // Дано 2 массива
// // Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// const result = {};
// for (let i = 0; i < en.length; i++) {
//     result[en[i]] = ru[i];
// }
// console.log(result);

