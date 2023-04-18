
// const count = 7;
// let res = '';

// for (let index = 1; index <= count; index++) {
//     res = `${res} ${index} вівця...`;
// }

    //     рекурсія
// const getSheepString = (count, res = '', index = 1) => {
//     if (count) {
//         res = `${res} ${index} вівця...`;
//         return getSheepString(count - 1, res, index + 1);
//     } else {
//         return res;
//     }
// }
// console.log(getSheepString(7));

// //скорочена версія
// const getSheepString = (count, res = '', index = 1) => return count ? getSheepString(count - 1, `${res} ${index} вівця...`, index + 1) : res;


    //замкнення

/* const greetings = (text) => {
    return (name) => `${text} ${name}`;
}
const sayHi = greetings('Hi,')('Ivan');
const sayGreeting = greetings('Hello my dear friend,');

console.log(sayGreeting('Ivan'))
console.log(sayHi('Dmytro')) */


/* const increment = (step) => {
    return (number) => number + step;
}
const incToFive = increment(5)(2);
const incToOne = increment(1);
console.log(incToOne(4)); */





// const randomIntegrer = (min = 0, max = 100) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// const punch = (strange) => {
//     return (point) => strange * point;
// }

// const subzero = punch(12);
// const jackson = punch(13);

// console.log(subzero(randomIntegrer()));
// console.log(jackson(randomIntegrer()));





// const randomIntegrer = (min = 0, max = 100) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// const punch = (strange) => {
//     return (point) => strange * point;
// }

// const printName = function (text) {
//     console.log(this);
//     return `This is ${this.name}. Strange = ${ this.strange }.${text ?? ''}`
// }

// const subzero = {
//     name: "subzero",
//     strange: 12,
// };
// const jackson = {
//     name: "jackson",
//     strange: 7,
// };

// // console.log(subzero);
// // console.log(printName());
// console.log(printName.apply(subzero, ['Some']));
// console.log(printName.call(jackson, 'some not an array'));
// console.log(printName.bind(jackson));


function name(params) {
    
}