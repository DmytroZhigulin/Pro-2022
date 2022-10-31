//Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
//Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
//Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
//Користувач ввів 2 і 2:
//2+2=4
//2-2=0
//2*2=4
//2/2=1

//Получаем 2 числа от пользлвателя
let firstNuber = +prompt('Enter first digit');
let secondNuber = +prompt('Enter second digit');

//Проводим вычисления
let plus = firstNuber + secondNuber;
//console.log(plus);
let minus = firstNuber - secondNuber;
//console.log(minus);
let multiplication = firstNuber * secondNuber;
//console.log(multiplication);
let division = firstNuber / secondNuber;
//console.log(division);

//Вывод результата операций
alert( `
    ${firstNuber} + ${secondNuber} = ${plus}
    ${firstNuber} - ${secondNuber} = ${minus}
    ${firstNuber} * ${secondNuber} = ${multiplication}
    ${firstNuber} / ${secondNuber} = ${division}
    ` );