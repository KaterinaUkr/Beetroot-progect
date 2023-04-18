// let user = {
//   name: "Іван",
//   surname: "Сміт"
// };
// user.name = "Петро";
// delete user.name;
// console.log(user.name);


//в циклі перебираємо властивості об’єкта і повертаємо false, як тільки зустрічаємо властивість.
// function isEmpty(obj) {
//   for (let key in obj) {
//     // якщо цикл розпочався, властивість є
//     return false;
//   }
//   return true;
// }


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
//     for (let key in salaries) {
//         sum += salaries[key];
//     }
    
// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu)



//Norma 

let carInfo = {
    manufacturer: "Renault",
    model: "Espace",
    "year of production": 2020,
    "average speed": 70,
    "fuel tank": 65,
    "fuel consumption": 6,                                                                                                                                                                           
    drivers: 'Ivan',
}

    function info() {
        alert(this.manufacturer + ' ' + this.model + ', ' + this["year of production"] + 'y., ' + this["average speed"] + 'km/h, ' + this["fuel tank"] + 'l, ' + this["fuel consumption"] + 'l/100km');
    }
carInfo.f = info; 
carInfo.f();