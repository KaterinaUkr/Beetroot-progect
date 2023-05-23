// // Базовий рівень

// class Obj {

// 	constructor(name, role) {
// 		this.name = name;
// 		this.role = role;

// 		if (this.role === 'admin' || this.role === 'user') {
// 			return;
// 		} else {
// 			alert(`You role is not true!`);
// 		}
// 	}

// 	// info() {
// 	// 	if (this.role === 'admin' || this.role === 'user') {
// 	// 		console.log( `name: ${this.name}, role: ${this.role}`);
// 	// 	} else {
// 	// 		alert(`You role is not true!`);
// 	// 	}
// 	// }
// }

// class User extends Obj {
// 	constructor(name, role) {
// 		super(name, role);
// 	}
// 	getName() {
// 		console.log( `Your name ${this.name}`);
// 	}
// 	getRole() {
// 		console.log( `You are ${this.role}`);
// 	}
// 	login() {
// 		console.log( `Hello, ${this.name}. Enter is sucessfull`);
// 	}
// 	logout() {
// 		console.log( `Bye-bye, ${this.name}.`);
// 	}
// 	сhangeName() {
// 		console.log( `You change your name ${this.name}`);
// 	}
// 	changePassword() {
// 		console.log( `You change your password ${this.name}`);
// 	}
// }

// class Admin  extends Obj {
// 	constructor(name, role) {
// 		super(name, role);
// 	}
// 	addUser() {
// 		console.log( `${this.name}, you can add users`);
// 	}
// 	removeUser() {
// 		console.log( `${this.name}, you can remove users`);
// 	}
// 	changeUserRole() {
// 		console.log( `${this.name}, you can change users`);
// 	}
// 	getAllUsers() {
// 		console.log( `${this.name}, you can get users.`);
// 	}
// 	removeAllUsers() {
// 		console.log( `${this.name}, you can remove all users`);
// 	}
// }

// const person = new User('Petro', 'user');
// const boss = new Admin('David', 'admin');
// // person.getName();
// // person.getRole();
// // person.login();
// // person.logout();
// // person.сhangeName();
// // person.changePassword();

// // boss.addUser();
// // boss.removeUser();
// // boss.changeUserRole();
// // boss.getAllUsers();
// // boss.removeAllUsers();




// Середній рівень

class WorldClock {
	constructor(template) {
		this.template = template;
		// this.date = date;
	}

	//час у текстовому варіанті
	getCurrentDate() {
		
		window.setInterval(function(){
			let date = new Date();
			let clock = document.getElementById("clock");
			clock.innerHTML = date.toLocaleTimeString();
		}, 1000);		
	}

	//поточна дата та час у текстовому варіанті
	getCurrentDateTime() {
		let date = new Date();
		console.log(date)
	}
	
	//видалення годинника
	deleteClock() {
		
	}
}

let clockKiev = new WorldClock('h:m:s');
let clock2 = new WorldClock('h:m:s');

let btnTime = document.querySelector('#time');
let btnTimeDate = document.querySelector('#timeDate');
let btnDelete = document.querySelector('#delete');

clockKiev.getCurrentDate();
clock2.getCurrentDate()

// btnTime.addEventListener("click", clock.getCurrentDate());
// btnTimeDate.addEventListener("click", clock.getCurrentDateTime());

// clock.getCurrentDateTime();


