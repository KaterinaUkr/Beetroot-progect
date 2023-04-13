// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// while (i < 5) {
//     console.log(i);
//     i++;
//     if (i === 2) {
//         break;
//     }
// }

// while (i < 10) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;
// do {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// } while (i < 0);

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


    // IF ELSE

// const hour = prompt('Enter current hour');
// // 6am - 12pm - Good morning!
// // 12pm - 6pm - Good afternoon!
// // otherwise - Good evening!

// if (hour >= 6 && hour < 12) {
//     alert('Good morning!');
// } else if (hour >= 12 && hour < 18) {
//     alert('Good afternoon!');
// } else {
//     alert('Good evening!');
// }

// let accessAllowed;
// const age = prompt('How old are you?');
// if (age >= 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// condition ? statement1 : statement2;

// accessAllowed = age >= 18 ? true : false;

// const color = prompt('Choose color', '');

// switch (color) {
//     case 'red':
//         console.log('The color is set to red');
//         break;
//     case 'green':
//         console.log('The color is set to green');
//         break;
//     case 'blue':
//         console.log('The color is set to blue');
//         break;
//     default:
//         console.log('The color is not recognized');
//         break;
// }




// let count = 0;
// let arr = [4, 'some', true, 4, 6, 7, false];

// console.log(arr)

// while (count < arr.length) {
//     console.log(arr[count]);
//     count++
// }

// let array = [4, 'some', true, 4, 6, 7, false];

// for (let index = array.length - 1; index > 0; index--) {
//     console.log(array[index])
// }

// let array = [4, 'some', true, 4, 6, 7, false, 60, 70, 50, 60, 'zxdvdv'];
// let count = array[8];

// for (let index = 0; index <= count; index++) {
    
//     if (index === 6) {
//         continue;
//     }
    
//     console.log(index);

//     if (index === 10) {
//         break;
//     }
// }


// let array = [4, 'some', true, 4, 6, 7, false, 60, 70, 50, 60, 'khfv', 'zxdvdv', ['hgdgtd', 2]];
// let count = 30;

// for (let index = 0; index <= count; index++) {

//   for (let index = 0; index <= count; index++) {
//         for (let j = 0; j < index; j++) {
//             console.log(`First index: ${index}, Second: ${j}`);
//             if (index === 5) {
//                 break ;
//             }
//         }
//     }
//     console.log(index);
// }

// let array = [2, 5, 7, 9, 'first', 'second', ['third', 'wtf', 7]];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     if (Array.isArray(element)) {
//         for (let i = 0; i < element.length; i++){
//             console.log(element[i]);
//         }
//     }
//     else {
//         console.log(element);
//     }
// };

// const fruit = 'avocado';
// let amount = +prompt('Введіть кількість');
// let i = 1;

// while (i <= amount) {
//     console.log(fruit);
//     i++;
// }

// const amount = +prompt('Введіть кількість');

// for (let index = 0; index < amount; index++) {
//     console.log(index);
// }

// /*якщо умова від'ємне/невідємне
//     - взяти число, прогнати в циклі, результ, затем итерацию1



// let sheep = prompt('Введіть кількість овець');
// let lamb = '';
// for (let i = 1; i <= sheep; i++) {
//     lamb += `${i} вівця...`;
// }
// console.log(lamb);


// const number = prompt('Введіть число');
// for (let i = number; i > 0; i--) {
//     console.log(i);
// }


// const number = prompt('Введіть число');
// let star = ' ';
// for (let i = 1; i <= number; i++) {
//     star += '*'
//     console.log(star);       
// }
