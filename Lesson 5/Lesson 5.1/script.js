//Створити масив, довжину та елементи якого задає користувач.
//У міру змін виводити вміст масиву на сторінку.

// debugger;
let userArr = [];
let arrLength;

//Получаем длинну массива
do {

    arrLength = parseInt(prompt(`Введите кол-во элементов массива данных`));
    
    if ( !arrLength ) {
            alert('Вы должны ввести значение');
    } else if( arrLength < 4 ) {
        alert('Массив должен содержать не менее 4х элементов');
    } else {
        alert(`Ваш массив будет содержать ${arrLength} элементов`);
    }
    
} while( (arrLength < 4) || !arrLength );

//Получаем каждый элемент
let arrElement;
do {

    arrElement = parseInt(prompt(`Введите чиловой элемент`));

    if(!arrElement) {
        alert('Вы должны ввести числовое значение');
    } else {
        userArr.push(arrElement);
    }
    
} while ( userArr.length !== arrLength );
alert(`Ваш массив теперь выглядит так - [${userArr}]`);

//Відсортувати масив за зростанням.
for( let i=0, count; i<userArr.length-1; i++){

    for( let j=0; j<userArr.length-1; j++){

        if(userArr[j]>userArr[j+1]){
            count=userArr[j];
            userArr[j]=userArr[j+1];
            userArr[j+1]=count;
        }
    }
}
alert(`Ваш массив отсортирован по возрастанию [${userArr}]`);
//Видалити елементи з масиву з 2 по 4 (включно!).
userArr.splice(1, 3);
alert(`Из массива удалены элементы с 2 по 4й включительно. Массив выглядит вот так - [${userArr}]`);

