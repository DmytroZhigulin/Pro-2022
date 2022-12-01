// Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая – должен вернутся функцией.



// Пример:

// a = [1,2,3, 'hello',4,5] => summA = 15

// b = [1,2,3, true, 4, undefined, 6] => summB = 16

// if(summA < summB) => return b

let firstArr = [1,2,3, 'hello',4,5];
let secArr = [1,2,3, true, 4, undefined, 6];

function wichSumIsBigger (arr1, arr2) { // Функция сравнивающая результат суммы чисел массивов

    let firstSum = arrayElemSum(firstArr); // Результат вызова функции суммирования чисел 1 массива
    let secSum = arrayElemSum(secArr);  //Результат вызова функции суммирования чисел 2 массива

    return firstSum < secSum ? arr2 : arr1; // Сравнение. Если 1 меньше 2го - возвращаем 2й, в ином случае вернет 1й

}

function arrayElemSum(arr) { // Функция суммы цисел в массиве
    let elemSum = 0;         // Переменная для общей суммы

    for( let i = 0; i < arr.length; i++) { 
        
        if( typeof arr[i] === 'number') { // Если элемент массива число - то прибавляем к значению переменной eleSum
            elemSum += arr[i];
        }
    }
    return elemSum; // Возвращаем общую сумму
}
console.log(wichSumIsBigger(firstArr, secArr));
