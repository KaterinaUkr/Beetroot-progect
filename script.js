
/*
let userName;
let $age;
let age5;
let name_;
*/

/*Неправильні імена для змінних:
    1. let 4name - ім'я змінної не може починатися з цифри
    2. let another-name - дефіс використовувати не можна
    3. let class - "class" - зарезервоване слово, його не можна використовувати як ім'я змінної
    4. let wrong name - ім'я не може використовувати пробіл
    5. let .name - ім'я не повинно починатися або закінчуватися крапкою

*/

//Варіанти коментування коду - одностроковий

/*Варіанти коментування коду:
 - багатостроковий*\
 - ще одна строка коменту*/
 

/* Основні стилі написання імен змінних:
? kebab-case — частини змінної розділяються дефісом. Наприклад: my-super-var. - вже не використовується
? snake_case — для розділення використовується підкреслення. Наприклад: my_super_var.
CamelCase — кожне слово в змінній пишеться з великої букви. Наприклад: MySuperVar.
сamelCase — кожне слово в змінній пишеться з великої букви, окрім першого. Наприклад: mySuperVar.*/

//Norma
let userName = prompt('What is your name?');
alert(`Hello, ${userName}!`);


let yearBirth = prompt('what is your year of birth?');
const yearNow = 2023;
const yourOld = yearNow - Number(yearBirth);

alert(`You are ${yourOld} years old`);


const lengthSquare = prompt('Скільки сантиметрів довжина сторони квадрата?');
const result = 4 * Number(lengthSquare);
alert(`Периметр квадрату дорівнює ${result}см`);

//Maximum
const radius = prompt('Введіть радіус кола в см');
const pi = 3.14;
const squareCircle = pi * (Number(radius) * Number(radius));
alert(`Площа окружності дорівнює ${squareCircle}см2`);


const distance = prompt('Скільки кілометрів необхідно подолати?');
const time = prompt('За скільки годин треба подолати відстань?');
const speed = Number(distance) / Number(time);
alert (`Швидкість з якою треба рухатись - ${speed}км/год`);


const dollar = prompt('Введіть суму долларів?');
const kurs = 0.91;
const euro = Number(dollar) * kurs;
alert (`${dollar} USD дорівнює ${euro} EUR`);