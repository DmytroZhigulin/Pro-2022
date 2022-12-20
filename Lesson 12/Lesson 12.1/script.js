// 1. Створити клас Людина.

function Human(name, age){
    this.name = name;
    this.age = age;

    this.showInfo = function() {
        return `${this.name}. He is ${this.age} years old`;
    };
}

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.


// 2. Створити клас Автомобіль.
function Auto(brand, model, yearOfIssue, carLicensePlate){
    this.brand = brand;
    this.model = model;
    this.yearOfIssue = yearOfIssue;
    this.carLicensePlate = carLicensePlate;

    this.carOwner = function (owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`You can't drive car yet!`);
        }
    };

    this.carInfo = function () {

        let info = `This is ${this.brand} ${this.model} of ${this.yearOfIssue} year of issue with ${this.carLicensePlate} license plates`;

        if (this.owner !== undefined) {
            return `${info}. It's owner is ${this.owner.showInfo()}`;
        } else {
            return info;
        }   
    };
}
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
const human1 = new Human('Damien', 25);
console.log(human1.showInfo());
const human2 = new Human('Edgar - Allan', 83);
console.log(human2.showInfo());
const human3 = new Human('Joshua', 12);
console.log(human3.showInfo());

// декілька екземплярів класу Автомобіль;
const mazda = new Auto('Mazda', 3, 2009, 'ВН2506ОД');
const ford = new Auto('Ford', 'F-150', 2021, 'TX2215');
const dodge = new Auto('Dodge', 'Charger', 2022, '-F&F-');

// присвоїти власників автомобілям.
mazda.carOwner(human1);
console.log(mazda.carInfo());
ford.carOwner(human2);
console.log(ford.carInfo());
dodge.carOwner(human3);
console.log(dodge.carInfo());
