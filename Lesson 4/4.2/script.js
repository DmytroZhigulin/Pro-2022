//Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). 
let firstNum;

do {
    firstNum = +prompt('Первое число');
} while(isNaN(firstNum) || firstNum < 1); 

let secNum;
do {
    secNum = +prompt('Введите второе число');
} while( isNaN(secNum) || firstNum >= secNum );


//Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры).
let step; 
do {
    step = +prompt('Введите шаг');
} while( isNaN(step) || step > secNum - firstNum );

//Посчитать сумму факториалов чисел которые попадаются во время перебора.
let sum = 0;
for ( firstNum; firstNum <= secNum; firstNum += step) {
    factorial = 1;
    console.log(`Факториал числа ${firstNum}`);
    for ( i = 1; i <= firstNum; i++){
        factorial *= i;
    }
    console.log(`Равно ${factorial}`);
    sum += factorial;
}
console.log(`Сумма факториалов = ${sum}`);  