// Скасування функції setTimeout відбувається за допомогою clearTimeout(назва функції)
// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }

// setTimeout(sayHi, 1000, "Привіт", "Джон");


    /* 1. Варіанти створення функцій -
    - оголошення функції
        function name(parametr1, parametr 2,...) {
         alert('Hello!')
        }
        name();

    - функціональний вираз
        let name = function (parametr1, parametr 2,...) {
         alert('Hello!')
        }
        name();*/


    // 2.
// const calcArg = function () {
    
//     console.log(arguments);
//     return arguments;
// }
// console.log(calcArg(25, 'once', 36, 'ghnjmcg'));


    // 3.
// function number(num1, num2) {
//     if (num1 < num2) {
//         return `-1`;
//     } else if (num1 > num2) {
//         return `1`;
//     } else {
//         return `0`;
//     }
// }


    //4. Factorial

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
let n = +prompt('Enter number', '');

if (n > 0 && Number.isInteger(n)) {
    alert(factorial(n));
    alert("Enter a number > 0");

} else {
    alert("It's wrong number");
}


    // 5.
// function number (num1, num2, num3) {
//     return +(`${num1}${num2}${num3}`);
// }
// console.log(number(5, 8, 9));


    // // 6.
    // function calcSquare(x, y) {
        
    // }
    // let x = +prompt('Enter  number', '');

    // Norma 
    // 1.
    // 2.
    
    

