    //Array

    //вибір конкретного елемента
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // const first = fruits.at(2);
// const [first, seccond, , fourth ] = fruits  //деструктуризіція
// console.log(fourth)


    //об'єднання масивів
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const cars = ["Saab", "Volvo", "BMW"];
// const arr = [...fruits, ...cars];
// console.log(arr);
// console.log(arr.toString());
// console.log(arr.join('*'));
// console.log(fruits[fruits.length-1]);
// console.log(cars.pop()); //виводить та видаляє останній елемент, модифікує
// fruits.push('some'); console.log(fruits);
// краще заміняти:
// fruits = [...fruits, 'newItem'];

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus  = fruits.slice(1, 3);
// console.log(citrus);



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     document.write(`<div>${element} </div>`);
// }

// let arr = fruits.forEach((element, index, arr) => {
//     console.log(element, index, arr);
//     document.write(`<div>${element} </div>`);
// });
// console.log(arr);

// let arr = fruits.map((element, index, arr) => {
//     console.log(element, index, arr);
//     document.write(`<div>${element} </div>`);
//     // return `1s';
//     return `${element} some`;
// });
// console.log(arr);

// let arr = fruits.reduce((acc, element, index, arr) => {
//     console.log(element, index, arr);
//     document.write(`<div>${element} </div>`);
//     // return `1s';
//     return [...acc, `${element} some`];
// }, []);
// console.log(arr);


// const numbers = [45, 4, 9, 16, 25];
// const arr = numbers.reduce((acc, element, index, arr) => {
//     return acc + element;
// }, 0);
// console.log(arr);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const arr = fruits.reduce((acc, element, index, arr) => {
//     console.log(element, index, arr);
//     document.write(`<div>${element} </div>`);
//     acc[element] = 0;
//     return acc;
// }, {});
// console.log(arr);

// const arr = fruits.filter((element, index, arr) => element != "Orange");
//     console.log(arr);
    
// const fruits = [
//     {
//         name: "Banana",
//         count: 10,
//         price: 200,
//     },
//     {
//         name: "Orange",
//         count: 13,
//         price: 150,
//     },
//     {
//         name: "Lemon",
//         count: 20,
//         price: 300,
//     },
//     {
//         name: "Mango",
//         count: 5,
//         price: 90,
//     }
// ];
// const arr = fruits.some((element, index, arr) => element.price > 100);
// console.log(arr);

// const arr = fruits.every((element, index, arr) => element.price > 100);
// console.log(arr);
// const arr = fruits.find((value, index) => value.name === 'Mango');
// console.log(arr);
// arr.price = 30;
// console.log(fruits);







// функція, яка приймає массив як аргумент і виводить на сторінку


// const arr = ['car', 'bus', 'once more'];

    // arr.forEach(arr => {
    //     console.log(arr);
    // });

// arr.forEach((values, index, array) => {
//   console.log(values);
// });

// function showArr(arr) => arr.forEach( {
//     console.log(arr);
// });

// const arr = [5, 9, 11, 35, 15];

// const sumArr = (arr) => arr.reduce((total, value) => total + value);

// console.log(sumArr(arr));

 
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let maxNum = (numbers) => numbers.reduce((max, item) => max < item ? item : max);

// console.log(maxNum(numbers));


//функція, яка буде додавати елемент в масив за індексом

// const array = [5, 9, 11, 35, 15];
// console.log(array);

// const addNumber = (array, index, element) => array.splice(index, 0,  element);
// console.log(addNumber(array, 4, 25));
// console.log(array);

    //функція, яка буде видаляє елемент в масив за індексом
// const deleteNumber = (array, index) => array.splice(index, 1);
// console.log(deleteNumber(array, 2));
// console.log(array);


//функція, приймає 2 масива і виводить, але однакові елементи не дублює

// let colorOne = ['red', 'green', 'blue', 'black', 'yellow'];
// let colorTwo = ['violet', 'green', 'grey', 'beige'];

// let mergeColor = (arr1, arr2) => arr1.concat(arr2);

// console.log(mergeColor(colorOne, colorTwo));
// // console.log(mergeColor);
