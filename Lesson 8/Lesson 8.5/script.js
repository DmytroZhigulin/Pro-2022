// Реализовать функцию copy(list) по копированию массива.

// Предусмотреть возможность передачи вторым аргументом функции. При копировании массива – функция применяется к каждому элементу копируемого массива.



// newList = copy(list, function(value){ return value*10; })
let someArr = [44, 15, 'Asus', false, function someFunc() {}, 10, 'Hator', true, 20];


function copyArr(arr, func) {

    let myArrCopy = arr.slice();
    
    if( typeof func === 'function'){

        for ( let i = 0; i < myArrCopy.length; i++) {

            if ( typeof myArrCopy[i] === 'number') {

                myArrCopy[i] = multiplyValue(myArrCopy[i]);
                
                
            }
        }
    }
    return myArrCopy;
}

function multiplyValue(value){
    return value *= 10;
}
console.log(copyArr(someArr, multiplyValue));
