//Minimum 

let carInfo = {
    manufacturer: "Renault",
    model: "Espace",
    "production year": 2020,
    "average speed": 70,
    "fuel tank": 65,
    "fuel consumption": 6.5,    
}

let methods = {
    infoAbout: function () {
        return (`${this.manufacturer} ${this.model}, ${this["production year"]} production year, average speed - ${this["average speed"]}km, fuel tank - ${this["fuel tank"]} l, average fuel consuption - ${this["fuel consumption"]} l/100km`);
    },
    addDriver: function (name = '') {
        carInfo.driver = name;
        return carInfo;
    },
    checkDriver: function () {
        if (!!carInfo.driver === true) {
            return `You have driver, his name is ${carInfo.driver}`;  //this - показує undefined - ?
        } else {
            return "No, you haven't driver";
        };                       
    },
    amountFuel: function (distance) {
        return `You need ${(distance / carInfo["fuel consumption"]).toFixed(2)} litres for your trip`;
    },
    amountHour: function (distance) {

        let hour = +Math.floor(distance / carInfo["average speed"]).toFixed(2);
        stopBreak = Math.floor(hour / 4);
        console.log(stopBreak)
        return `You need ${hour + stopBreak} hours for road`;

    },
}   

let distance = 900;
let fullInfoCar = { ...carInfo, ...methods };

// alert(fullInfoCar.infoAbout());
console.log(fullInfoCar.infoAbout());  //інформація про автомобіль
// console.log(fullInfoCar.addDriver('Petro'));  //додавання водія

// console.log(fullInfoCar.carInfo); //видає undefined
// console.log(carInfo);
// console.log(fullInfoCar.checkDriver());

console.log(fullInfoCar.amountFuel(distance));
console.log(fullInfoCar.amountHour(distance));   //розрахунок часу на подолання дистанції

















    //Training
/* let user = {
  name: "Іван",
  surname: "Сміт"
};
user.name = "Петро";
delete user.name;
console.log(user.name);


в циклі перебираємо властивості об’єкта і повертаємо false, як тільки зустрічаємо властивість.
function isEmpty(obj) {
  for (let key in obj) {
    // якщо цикл розпочався, властивість є
    return false;
  }
  return true;
}


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    
console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu)
 */