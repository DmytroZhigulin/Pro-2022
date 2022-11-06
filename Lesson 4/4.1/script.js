// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). 
//Спрашиваем до тех пор, пока он не введет допустимое значение;

let operation;
do {  
    operation = prompt('Какое действие вы хотите выполнить?', '+ - * /');
    
  }
  while (operation != '+' && operation != '-' && operation != '*' && operation != '/');
// console.log(operation);

// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. 
//Спрашиваем пока пользователь не введет допустимое значение;



let numOfOperands;
do {
  numOfOperands = parseInt(prompt(`Сколько операндов вы хотите использовать? (Более 1, но менее 7)`));
  
} while ( isNaN(numOfOperands) || numOfOperands < 2 || numOfOperands > 6);
// console.log(numOfOperands);


// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. 
//Запрашиваем пока пользователь не введет допустимое значение;

let operand;
let steps = 0;
let counter = 1;
let result;

do {
  
  do {
    operand = parseInt(prompt(`Enter ${counter} operand`));
    

    if (steps == 0) {
      result = operand;
    } else {

      switch (operation) {
        case "+":
            result += operand;
            break;

        case "-":
          result -= operand;
            break;

        case "*":
          result *= operand;
            break;

        case "/":
          result /= operand;
            break;
      }
    }
    // console.log(result);

  } while (isNaN(operand));

  
  
  steps += 1;
  counter += 1;  
    
  
  
} while ( steps !== numOfOperands);



// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).
console.log(`Результат ${operation} всех чисел = ${result}`);