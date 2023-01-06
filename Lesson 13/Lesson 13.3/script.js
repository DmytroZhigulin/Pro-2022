const roles = {
	admin: "img/admin.png",
	student: "img/student.png",
	lector: "img/lector.png"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "img/user.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 85
			},
			{
				"title": "React",
				"mark": 50
			},
			{
				"title": "Java Elementary",
				"mark": 90
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "img/user.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "img/user.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "img/user.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "img/user.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "img/user.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 20,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 20
			}
		]
	}
]

// Исходный код проекта находится в архиве code.zip



// Файл script.js содержит данные:

// users – массив юзеров системы.
// roles – объект ролей юзера.
// gradation – объект с диапазоном оценок.


// Что нужно сделать: отрендерить для каждого юзера с массива users соответствующего вида блок.

// Для каждого юзера в блоке выводим:

// Картинку юзера – свойство img
// Имя юзера – свойство name
// Возраст юзера – свойство age
// Роль юзера – свойство role.


// Если у юзера свойство courses есть, то выводим перечень пройденных курсов.

// Делаем основной класс User, в котором будет созданы метод render и renderCourses.
class User {
	constructor(arg) {
		this.name = arg.name;
		this.age = arg.age;
		this.img = arg.img;
		this.role = arg.role;
		this.courses = arg.courses;
	}

	render() {
		return `
			<div class="user">
				<div class="user__info">
					<div class="user__info--data">
						<img src=${this.img} alt=${this.name} height="50">
						<div class="user__naming">
							<p>Name: <b>${this.name}</b></p>
							<p>Age: <b>${this.age}</b></p>
						</div>
					</div>
					<div class="user__info--role student">
						<img src="img/${this.role}.png" alt="${this.role}" height="25">
						<p>${this.role}</p>
					</div>
				</div>
				${this.courses ? this.renderCourses() : ''}
			</div>`;

	}

	renderCourses() {
		let userCourses = [];
		this.courses.forEach((course) => {
			userCourses.push(`
				<p class="user__courses--course ${this.role}">
					${course.title} <span class="${userMark(course.mark, gradation)}">${upFirst(userMark(course.mark, gradation))}</span>
				</p>`)
			})
		return `<div class="user__courses">${userCourses.join('')}</div>`
		
	}
}

// Выводим оценку текстом на основе цифрового значения
let userMark = (mark, markList) => {
	let finalMark;
	for (key in markList) {
		if (mark <= key) {
			finalMark = markList[key];
			return finalMark;
		}
	}
};

// делаем первую букву оценки заглавной
let upFirst = (finalMark) => {
	if (!finalMark) return finalMark;
  
	return finalMark[0].toUpperCase() + finalMark.slice(1);
  }

  
  


// Для каждой роли делаем свой класс Student, Lector, Admin, который наследует класс User.
// В классах Lector, Admin переопределяем метод renderCourses для того, что бы в нужном виде отобразить список курсов.
class Student extends User{
	constructor(arg) {
		super(arg);
	};
}

class Lector extends User{
	constructor(arg) {
		super(arg);
	};

	renderCourses() {
		let lectorCourses = [];
		this.courses.forEach((course) => {
			lectorCourses.push(`
				<div class="user__courses--course ${this.role}">
                    <p>Title: <b>${course.title}</b></p>
                    <p>Lector's score: <span class="${userMark(course.score, gradation)}">${upFirst(userMark(course.score, gradation))}</span></p>
                    <p>Average student's score: <span class="${userMark(course.studentsScore, gradation)}">${upFirst(userMark(course.studentsScore, gradation))}</span></p>
                </div>
				`)
			})
		return `<div class="user__courses admin--info">${lectorCourses.join('')}</div>`
	}
}

class Admin extends User{
	constructor(arg) {
		super(arg);
	};

	renderCourses() {
		let adminCourses = [];
		this.courses.forEach((course) => {
			adminCourses.push(`
				<div class="user__courses--course ${this.role}">
				    <p>Title: <b>${course.title}</b></p>
				    <p>Lector's score: <span class="${userMark(course.score, gradation)}">${upFirst(userMark(course.score, gradation))}</span></p>
				    <p>Lector: <span class="${course.lector}">${course.lector}</span></p>
				</div>
				`)
			})
		return `<div class="user__courses admin--info">${adminCourses.join('')}</div>`
	}
}

// Выводим все на страницу
let createUsers = (users) => {
	const allUsers = [];
	users
		.map(function(user) {
			if (user.role === "student") return new Student(user);
			if (user.role === "lector") return new Lector(user);
			if (user.role === "admin") return new Admin(user);
		})
		.map(function(user) {
			allUsers.push(user.render());
		})
		document.write(`<div class="users">${allUsers.join("")}</div>`);
}
createUsers(users);



// Заданную html-разметку и css-классы для каждого блока можете править как хотите) Главное – визуально отобразить так, как на картинке.
