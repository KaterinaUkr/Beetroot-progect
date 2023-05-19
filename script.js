// Example 1
// class User {
	
// 	constructor(name, lastname) {
// 		this.name = name
// 		this.lastname = lastname
// 	}

// 	hello() {
// 		console.log(this.name + ' ' + this.lastname)
// 	}

// }

// const someUser = new User('David', 'Lastname');
// const onceUser = new User('Iren', 'Lastname');

// console.log(someUser);
// someUser.hello()
// onceUser.hello()

// Example 2
class User {
	
	constructor(first, last) {
		this.first = first
		this.last = last
	}

	hello() {
		console.log(this.name)
	}

	get name() {
		return `${this.first} ${this.last}`;
	}
	
	set name(name) {
		this.first = name;		
	}
}

const someUser = new User('David', 'Davidlastname');
const onceUser = new User('Iren', 'Irenlastname');

console.log(someUser);
someUser.name = 'Dmytro'
someUser.hello();








// class Comp {
	
// 	constructor(os, proc, ozp) {
// 		this.os = os;
// 		this.proc = proc;
// 		this.ozp = ozp;
// 	}

// 	About() {
// 		console.log(this.0);
// 	}


// 	get os() {
// 		return this.os
// 	}
	
// }

// const First = new Comp('Windows 8', 'Intel(R) Core(TM) i5-2450M', '8,00');
// const Second = new Comp('Windows 10', 'Intel(R) Core(TM) i9-2450M', '16,00'); 
// const Third = new Comp('macOS Big Sur', 'Apple M1', '8,00'); 


// console.log(First);
// console.log(Third.os);
// console.log(Second.proc);
