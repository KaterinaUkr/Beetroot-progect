/*const random = Math.random() * 10;

console.log(random)*/

/*let result = 5;

console.log(result++);
console.log(result)


let integer = 2;
let somSting = '2';

let result = integer == somSting

// next
let integer = 2;
let somSting = '2';

let secondInteger = 4;
let secondSomSting = '2';

let result = integer == somSting;
let result2 = secondInteger == secondSomSting

let*/


/* const name = prompt('Name');

if (name === "Ivan") {
    console.log("Man");
} else if (name === "Marta" || "Inna") {
    console.log("Female");
} else {
    console.log("Not a name");
}*/

/*name === "Ivan" ? console.log("Man") : console.log("Not a name");*/

/*switch (name) {
    case "Ivan":
        console.log("Man");
        break;
    case "Marta":
        console.log("Female");
        break;
    
    default:
        console.log("Not a name");
        break;
}*/

/*const firstValue = prompt('Enter first value');
const operation = prompt('What do tou want to do');
const secondValue = prompt('Enter second value');
const plusOperation = Number(firstValue) + Number(secondValue);
const subtractionOperation = Number(firstValue) - Number(secondValue);
const multiplyOperation = Number(firstValue) * Number(secondValue);
const divisionOperation = Number(firstValue) / Number(secondValue);



switch (operation) {
    case "+":
        alert(plusOperation);
        break;
    case "-":
        alert(subtractionOperation);
        break;
    case "*":
        alert(multiplyOperation);
        break;
    case "/":
        alert(divisionOperation);
        break;
    default:
        console.log("Wrong datas")
    
} */

/*const firstValue = Number(prompt('Enter first value'));
const operation = prompt('What do tou want to do');
const secondValue = prompt('Enter second value');

let result;
switch (operation) {
    case "+":
        result = firstValue + Number(secondValue);
        break;
    case "-":
        result = firstValue - Number(secondValue);
        break;
    case "*":
        result = firstValue * Number(secondValue);
        break;
    case "/":
        result = firstValue / Number(secondValue);
        break;
    default:
        result = "Wrong datas";
        break;
}
alert(result);*/

/*let shoppingSum = Number(prompt('Яка сума покупки ?'));
let result;


if (shoppingSum >= 200 && shoppingSum <= 300) {
    result = shoppingSum - (shoppingSum * 0.03);
} else if (shoppingSum > 300 && shoppingSum <= 500) {
    result = shoppingSum - (shoppingSum * 0.05);
} else if (shoppingSum > 500) {
    result = shoppingSum - (shoppingSum * 0.07);
} else {
    result = "Wrong data!";
};

alert(result);*/

let result = 0;

let questionFirst = prompt('Який зараз рік? 1.2018 / 2.2020 / 3.2023');
if (questionFirst === '3') {
    result += 2;
};
    
let questionSecond = prompt('В якому році ухвалена Коснтитуція України? 1.1990 / 2.1996 / 3.1986');
if (questionSecond === '2') {
    result += 2;
};

let questionThird = prompt('Якого числа день незалежності? 1.01 / 2.15 / 3.24');
if (questionThird === '3') {
    result += 2;
};

alert(result);






