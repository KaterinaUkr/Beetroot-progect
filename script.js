// // 1) Реалізуй клас, що описує коло.

// class Circle {

// 	constructor(radius) {
// 		this.radius = radius;
// 	}

// 	get data() {
// 		return `radius = ${this.radius}`;
// 	}

// 	get diam() {
// 		return `diametr = ` + this.radius * 2 ;
// 	}

// 	set data(data) {
// 		this.radius = data;
// 	}

// 	square() {
// 		console.log(`the area of the circle is ` + (3.14 * (this.radius ** 2)));
// 	}

// 	long() {
// 		console.log(`the circumference of the circle is ` + (3.14 * (this.radius*2)));
// 	}
// }

// const number = new Circle(5);
// console.log(number)
// console.log(number.data);
// console.log(number.diam);
// number.square();
// number.long();

// number.data = 4;
// console.log(number)
// console.log(number.data);
// console.log(number.diam);
// number.square()
// number.long()


// // 2)Реалізуй клас, що описує канцелярський маркер

// class Marker {

// 	constructor(color, quantity) {
// 		this.color = color;
// 		this.quantity = quantity;
// 	}

// 	render() {
// 		let lenght
// 		let div = document.querySelector('div');
// 		div.innerHTML = 'Here must be a new text'
// 		lenght = (100 % - this.quantity * 2)
// 		div.style.color = this.color
// 		div.style.fontSize = 40 + 'px';
// 		// div.lenght = 8
// 		// div.substr(0, 5)
// 	}

// 	// start() {
// 	// 	this.render();
// 	// }

// }

// const red = new Marker('red', '5%');
// console.log(red)
// red.render();



// 3)Реалізуй клас Employee, що описує працівника

class EmpTable {

	constructor(name, lastname) {
		this.name = name
		this.lastname = lastname
	}

}