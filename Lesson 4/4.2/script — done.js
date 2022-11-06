//Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). 

var firstNum = +prompt('Первое число');
while(isNaN(firstNum)) {
    firstNum = +prompt('Неверное число, повторите попытку');
}
var secNum = +prompt('Второе число');
while(isNaN(firstNum) && firstNum < secNum) {
    secNum = +prompt('Неверное число, повторите попытку');
}


//Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). 
let step = +prompt('Введите шаг:');
while(isNaN(step)) {
    step = +prompt('Неверное число, повторите попытку', 0);
}


//Посчитать сумму факториалов чисел которые попадаются во время перебора.
for (var i = firstNum, sum = 0; i <=  secNum; i += step) {
    for (var j = 1, factorial = 1; j <= i; j++){
        factorial = factorial * j;
    }
    console.log('Факториал первого числа ' + i + '! = ' + factorial);
    sum = sum + factorial;
}
console.log('Сумма факториалов = ' + sum);