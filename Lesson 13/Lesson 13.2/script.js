// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. 
// Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. 
// Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.



// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.



// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

class SuperMath{

	constructor() {
		this.input();
	}

	input() {
		do{
			this.x = +prompt(`Enter x`);
		} while(isNaN(this.x));

		do{
			this.y = +prompt(`Enter y`);
		} while(isNaN(this.y));

		do{
			this.sign = prompt(`Enter sign: ${this.getOperations()}`);
		} while(!mathOperation[this.sign]);

		return this;
	}

    check() {
		let userApproved = confirm(`Do you want make operation ${this.x} ${this.sign} ${this.y}?`);

		return userApproved ?  this.calc() : this.input().check();
	}

    calc() {
        let calculate = mathOperation[this.sign];

        return calculate(this.x, this.y);
    }

	getOperations() {
		let mathSigns = [];
		for(let key in mathOperation){
			mathSigns.push(key);
		}

		return mathSigns.join(`, `);
	}
}

let mathOperation = {
	'+': ((x,y) =>  { return x+y }),
	'-': ((x,y) => { return x-y }),
	'/': ((x,y) => { return x/y }),
    '*': ((x,y) => { return x*y }),
    '%': ((x,y) => { return x%y }),
}


let superMathAction = new SuperMath();
console.log(superMathAction.check());
