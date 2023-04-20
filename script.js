// //Minimum

// let carInfo = {
//     manufacturer: "Renault",
//     model: "Espace",
//     "production year": 2020,
//     "average speed": 70,
//     "fuel tank": 65,
//     "fuel consumption": 6.5,
// }

// let methods = {
//     infoAbout: function () {
//         return (`${this.manufacturer} ${this.model}, ${this["production year"]} production year, average speed - ${this["average speed"]}km, fuel tank - ${this["fuel tank"]} l, average fuel consuption - ${this["fuel consumption"]} l/100km`);
//     },

//     addDriver: function (name = '') {
//         carInfo.driver = name;
//         return carInfo;
//     },

//     checkDriver: function () {
//         if (!!carInfo.driver === true) {
//             return `You have driver, his name is ${carInfo.driver}`;  //this - показує undefined - ?
//         } else {
//             return "No, you haven't driver";
//         };
//     },

//     amountFuel: function (distance) {
//         return `You need ${(distance / carInfo["fuel consumption"]).toFixed(2)} litres for your trip`;
//     },

//     amountHour: function (distance) {
//         let hour = +Math.floor(distance / carInfo["average speed"]).toFixed(2);
//         stopBreak = Math.floor(hour / 4);
//         console.log(stopBreak)
//         return `You need ${hour + stopBreak} hours for road`;
//     },
// }

// let distance = 900;
// let fullInfoCar = { ...carInfo, ...methods };

// // alert(fullInfoCar.infoAbout());
// console.log(fullInfoCar.infoAbout());  //інформація про автомобіль
// // console.log(fullInfoCar.addDriver('Petro'));  //додавання водія

// // console.log(fullInfoCar.carInfo); //видає undefined
// // console.log(carInfo);
// // console.log(fullInfoCar.checkDriver());

// console.log(fullInfoCar.amountFuel(distance));
// console.log(fullInfoCar.amountHour(distance));   //розрахунок часу на подолання дистанції




//Norma. Створити об'єкт, що описує час (години, хвилини, секунди)

let time = {
    hour: 5,
    minutes: 59,
    seconds: 57,
};
    
let methods = {
    showTime: function () {
        // if (this.hour < 10) {        
        //     this.hour = `0` + this.hour;
        // };
        // if (this.minutes < 10) {
        //     this.minutes = "0" + this.minutes
        // };        
        // if (this.seconds < 10) {
        //     this.seconds = "0" + this.seconds
        // };
        return (`${this.hour}:${this.minutes}:${this.seconds}`);
    },

    changeSeconds: function (s) {
        for (let index = 1; index <= s; index++) {
            this.seconds += 1;          
            
            if (this.seconds > 59) {
                this.seconds = 0;
                this.minutes += 1;
            }            
            if (this.minutes > 59) {
                this.minutes = 0;
                this.hour += 1;
            }            
        }
        if (this.seconds < 10) {
            this.seconds = "0" + this.seconds
        };   
        if (this.minutes < 10) {
            this.minutes = "0" + this.minutes
        };   
        return `${this.hour}:${this.minutes}:${this.seconds}`;        
    },

    changeMinutes: function (s) {
        for (let index = 1; index <= s; index++) {
            this.minutes += 1;          
            
            if (this.minutes > 59) {
                this.minutes = 0;
                this.hour += 1;
            }            
        }
        if (this.minutes < 10) {
            this.minutes = "0" + this.minutes
        };   
        return `${this.hour}:${this.minutes}:${this.seconds}`;        
    },

    changeHours: function (s) {        
        for (let index = 1; index <= s; index++) {
            this.hour += 1;       
        }
        if (this.hour < 10) {
            this.hour = "0" + this.hour
        };   
        return `${this.hour}:${this.minutes}:${this.seconds}`;            
    },
}

let fullProperties = { ...time, ...methods }

console.log(fullProperties.showTime());
// console.log(fullProperties.changeSeconds(3));
// console.log(fullProperties.changeMinutes(1));
// console.log(fullProperties.changeHours(3));





//Maximum 















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