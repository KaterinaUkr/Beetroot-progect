
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


// const person = {
//     first: 'David',
//     last: 'Habridze',
//     age: 45,
// }

    // New object
/* cons obj = {
}
    
const obj = new Object {
    name: 'ss',
}

const obj = Object.create({}, {
    name: {
        value: 'ss'
        writable: true,
    }
}); */

    // Copy
/* const person = Object.assign({}, person);

const person3 = { ...person }
person.age = 555
console.log(person3)

const { age, first } = person;
console.log(age, first);*/


// const address = {
//     city: 'Rivne',
//     country: 'UA',
// };
// const fullPersonInfo = { ...person, ...address };
// const { age, first ...anyName } = fullPersonInfo;
/*console.log(fullPersonInfo);
console.log(anyName);
 */

    //Перевірити чи є значення
// console.log(!!person.first);   //більш частий варіант

// console.log(person.hasOwnProperty('first'));   //old variant

// console.log('first' in person);


    //як пройти по об'єкту
// for (const key in fullPersonInfo) {
//     console.log(key, fullPersonInfo[key]);
// }


    //Перетворення на масив
// console.log(Object.keys(fullPersonInfo));
// console.log(Object.values(fullPersonInfo));
// console.log(Object.entries(fullPersonInfo));

 
    //Перевірити, чи об'єкт не пустий
// const obj = {};  // пустий - false
// console.log(!!Object.keys(obj).length)
// console.log(!!obj)



// const model = {
//     marka: 'Renault',
//     model: 'Espace',
//     color: 'black',
// }
// const characteristic = {
//     speed: 224,
//     fuel: 8,
//     tank: 62,
// }
// const methods = {
//     fullInfo: function() {
//         console.log(full);
//     },
//     modelInfo: function () {
//         console.log(`This car is ${this.marka} ${this.model},  color ${this.color}`)
//     },
//     characteristicInfo: function () {
//         return characteristic;
//     }
// };
 
// const full = { ...model, ...characteristic, ...methods };

// const { color, ...another} = full;
// // alert(full.modelInfo());   //спрацює з return
// console.log(full);
// full.fullInfo();
// full.modelInfo();
// console.log(another);




    // 20.04.2023
// const date = new Date(2020, 3, 19);
// const date = new Date("2020-3-19");

// const date = new Date();
// const utc = date.toUTCString();
// const simple = date.toDateString();
// const iso = date.toISOString();
// console.log(date);
// console.log(utc);
// console.log(simple);
// console.log(iso);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

// 01 квітня 2023 15:00 (день)


let date = (

)
    
console.log(date.toUTCString())

// function getUserTime() {
//     console.log(date.toUTCString())
// }
// getUserTime();