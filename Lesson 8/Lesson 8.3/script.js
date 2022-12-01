// function main (a, b, c) { 
  
// }

// function sum (a, b) { 
//     return a + b; 
// }
// Перепишите функцию main следующим образом:

// Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, и в качестве входящего значение принимает результат работы функции sum.
// Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.

function main (a = 2, b = 3, c) { 
    
    let summary = sum(a, b); // Записываем результат функции в переменную;
  
    return typeof c === 'function' ? c(summary) : summary; //Проверка с на функцию и вывод результата

}


function sum (a, b) { // Возвращается если с не функция
    return a + b; 
}
function sum2 (value) { //функция для передачи в аргумент c
    return value + 100; 
}
console.log(main(4, 4, sum2));
