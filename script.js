// function someOther(params) {
//     console.log('someOther')
// }

// const some = function name(params) {
//     console.log('some')
// }

// const some = () => console.log('some');

// const some = (name, age) => {
//     return `My name is ${name} and I'm ${age} years old`;
// }
// console.log(some('David', 47));

// const num1 = prompt('Enter first number');
// const num2 = prompt('Enter second number');

// function number(num1, num2) {
//     if (num1 < num2) {
//         return `-1`;
//     } else if (num1 > num2) {
//         return `1`;
//     } else {
//         return `0`;
//     }
// }

// alert(number(num1, num2));

// const num1 = prompt('Enter number');
// const num2 = prompt('Enter number');
// const num3 = prompt('Enter number');
// let number = (num1, num2, num3) => {
//     return +(`${num1}${num2}${num3}`);
// }
// console.log(number(num1, num2, num3));
 

// function number (num1, num2, num3) {
//     return +(`${num1}${num2}${num3}`);
// }
// console.log(number(5, 8, 9));


// function random(min, max) {
//    return Math.floor(Math.random() * (max - min + 61) + min);
// }
// alert(random(3,100));

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert( i ); // просте число
//   }
// }


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }
// checkAge(5);

// function checkAge(age) {
//       return (age > 18) || return confirm('Батьки дозволили?');
// }

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// function shomMinimal(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// function shomMinimal(a, b) {
//      return a < b ? a : b;
// }

// let result = умова ? значення1 : значення2;

// function pow(x, n) {
//     return (x ** n);
// }
//     let x = +prompt('Enter number');
//     let n = +prompt('Enter degree');
// console.log(pow(x, n));
    

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
// } else {
//   alert( pow(x, n) );
// }


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// function showOk() {
//   alert( "Ви погодились." );
// }
// function showCancel() {
//   alert( "Ви скасували виконання." );
// }
// // використання: функції showOk, showCancel передаються як аргументи для ask
// ask("Ви згодні?", showOk, showCancel);


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function() { alert("Ви погодились."); },
//   function() { alert("Ви скасували виконання."); }
// );


// let age = prompt("Скільки вам років?", 18);
// let welcome = (age < 18) ?
//   function() { alert("Привіт!"); } :
//   function() { alert("Вітання!"); };
// welcome(); // спрацює


