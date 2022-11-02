//Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

//отримати від користувача через три prompt три числа
let firstNum = +prompt('Enter first digit');
let secNum = +prompt('Enter second digit');
let thirdNum = +prompt('Enter third digit');

// считаем среднее арифмитическое
let res = (firstNum + secNum + thirdNum)/3;
//показати через alert середнє арифметичне цих чисел
alert(`the arithmetic mean of your's numbers is ${res}`);