// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.


let digitArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.
// Знайти добуток позитивних елементів.
// Сума
let sum = 0;
let total = 1;
let positiveDigits = digitArr
    .filter(function(digit) {
        return digit > 0;
    })
// console.log(positiveDigits);

// Кількість
positiveDigits.forEach(function(digit) {
    sum += digit;
})
// Добуток
positiveDigits.forEach(function(digit) {
    total *= digit;
})
console.log(`Кількість позитивних елементів массиву = ${positiveDigits.length}`);
console.log(`Сума позитивних елементів массиву = ${sum}`);
console.log(`Добуток позитивних елементів массиву = ${total}`);


// Знайти максимальний елемент масиву та його порядковий номер.
// Знайти мінімальний елемент масиву та його порядковий номер.
let maxNumber = (a, b) => {
    return a > b ? a : b;
};
let minNumber = (a, b) => {
        return a < b ? a : b
    };
let maxIn = digitArr.indexOf(digitArr.reduce(maxNumber));
let minIn = digitArr.indexOf(digitArr.reduce(minNumber));

console.log(`Максимальний елемент масиву ${digitArr.reduce(maxNumber)}, а його індекс ${maxIn}`);// Макс
console.log(`Мінімальний елемент масиву ${digitArr.reduce(minNumber)}, а його індекс ${minIn}`);// Мін

// Визначити кількість негативних елементів.
let negativeDigits = digitArr
    .filter(function(digit) {
        return digit < 0;
    })
// console.log(negativeDigits);
console.log(`Кількість негативних елементів массиву = ${negativeDigits.length}`);
