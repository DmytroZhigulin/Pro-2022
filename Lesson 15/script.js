// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (5$, 20 калорий)
// большой (10$, 40 калорий)


// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 1$, + 20 калорий)
// салатом (+ 2$, + 5 калорий)
// картофелем (+ 1,5$ , + 10 калорий)


// Можно добавить добавки:

// посыпать приправой (+ 1,5$, 0 калорий)
// полить майонезом (+ 2$, + 5 калорий).


// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.

// Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик) и методы для выбора опций и расчета нужных величин.




class Hamburger {
    constructor() {
        this.price = 0;
        this.calories = 0;
    }

    calcPrice(price) {
        this.price += price;
        return this.price;
    }

    calcCalories(calories) {
        this.calories += calories;
        return this.calories;
    }

    totalInfo() {
        this.myBurgerSize();
        this.moreOptions('filling');
        this.moreOptions('additives');
    }

    myBurgerSize() {
        do {
            this.size = prompt(`Whoud you like ${getKeys(HAMBURGER.size)} burger?`);
        } while (!HAMBURGER.size[this.size]);

        myBurger.calcPrice(HAMBURGER.size[this.size].price);
        myBurger.calcCalories(HAMBURGER.size[this.size].calories);
    }

    moreOptions(option) {
        let moreIngridients = `Do you want any ${option}?`;

        while (confirm(moreIngridients)) {
            do {
                this.ingridient = prompt(`You can add come ${option} - ${getKeys(HAMBURGER[option])} to burger`);
            } while (!HAMBURGER[option][this.ingridient]);

            myBurger.calcPrice(HAMBURGER[option][this.ingridient].price);
            myBurger.calcCalories(HAMBURGER[option][this.ingridient].calories);

            moreIngridients = 'Add something else?';
        }
    }
   

    finalInfo() {
        return `Your burger price: ${this.price}$ and ${this.calories} calories`;
    }


}

function getKeys(obj) {
    let keys = [];

    for (let key in obj) {
        keys.push(key);
    }
    console.log(keys);
    return keys.join(', ');
}


let HAMBURGER = {
    size: {
        small: {
            price: 5,
            calories: 20
        },

        big: {
            price: 10,
            calories: 40
        }
    },

    filling: {
        cheese: {
            price: 1,
            calories: 20
        },

        salad: {
            price: 2,
            calories: 5
        },

        potatos: {
            price: 1.5,
            calories: 10
        }
    },

    additives: {
        spice: {
            price: 1.5,
            calories: 0
        },

        mayonnaise: {
            price: 2,
            calories: 5
        }
    }
};

let myBurger = new Hamburger();
myBurger.totalInfo();
console.log(myBurger.finalInfo());
console.log(myBurger);

