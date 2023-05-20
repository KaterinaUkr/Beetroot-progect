// class Employee {
//     constructor(name, position, experience, salary) {
//         this.name = name;
//         this.position = position;
//         this.experience = experience;
//         this.salary = salary;
// 	}
	
// 	sayHi() {
// 		const hi = `${this.name} work in position ${this.position} with salary ${this.salary} for ${this.experience} year`
// 		console.log(hi)
// 	}

// 	const data = [
// 		{
// 			name: 'Lynne Stokes',
// 			position: 'The Bank Teller',
// 			experience: 2,
// 			salary: 1500,
// 		},
// 		{
// 			name: 'Dana Whitney',
// 			position: 'The Loan Officer',
// 			experience: 2,
// 			salary: 1550,
// 		},
// 		{
// 			name: 'Hallie Brandt',
// 			position: 'The Investment Banker',
// 			experience: 4,
// 			salary: 2300,
// 		},

// 	].map(({ name, position, exoerience, salary }) => new Employee( name, position, exoerience, salary ).forEach(worker => worker.sayHi());
	
// 	)
// console.log(data)
	


// }

// const workers = [
//     new Employee('Lynne Stokes', 'The Bank Teller', '3', '1500'),
//     new Employee('Dana Whitney', 'The Loan Officer', '2', '1550'),
//     new Employee('Hallie Brandt', 'The Investment Banker', '4', '2300'),
//     new Employee('Juliet Berger', 'The Loan Officer', '5', '2300'),
//     new Employee('Rosemary Flowers', 'The Bank Teller', '1', '1000'),
//     new Employee('Rosa Holmes', 'The Financial Manager', '3', '3000'),
//     new Employee('Janis David', 'The Financial Analyst', '6', '3250'),
//     new Employee('Morton Lawson', 'The Bank Manager', '8', '3500'),
//     new Employee('Phil Holden', 'The Branch Administrator', '7', '4500'),
//     new Employee('Nigel Mccarthy', 'The Bank Teller', '1', '1000'),
// ];


//  Example 2
class Animal {
	
	constructor(name, color, wight) { 
		this.name = name;
		this.legs = 4;
		this.color = color;
		this.wight = wight;
	}
	
	say() {
		throw new Error('Not implemented');
	}

	eat() {
		console.log('eating');
	}
}

class Dog extends Animal {
	#someDogProperty;
	constructor(name, color, wight, someDogProperty) {
		super(name, color, wight);
		this.someDogProperty = someDogProperty;
	}

	say() {
		console.log('Bark');
	}
 }

class Cat extends Animal  { 
	someCatProperty;

	static catPro = 'bababa';
	constructor(someCatProperty, name, color, wight) {
		super(name, color, wight);
		this.someCatProperty = someCatProperty;
	}

	say() {
		console.log('Meow', Cat.catPro);
	}

	static someFn() {
		console.log(this.catPro)
	}
}

const dog = new Dog('Barsik', 'Red', 20, 'dog value');
const cat = new Cat('cat value', 'Mushka', 'Green', 5);
// cat.eat()
// dog.eat()
// dog.say()
// cat.say()

Cat.someFn()

// console.log(dog)
console.log(cat)

console.log(dog instanceof Animal)  //перевіряє належність до батьківського класа