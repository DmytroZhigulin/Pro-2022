//Створити масив, довжину та елементи якого задає користувач.
//У міру змін виводити вміст масиву на сторінку.

// debugger;
let userArr = [];
let arrLength;
let arrLengthCheck = false;


while(!arrLengthCheck) {

    arrLength = parseInt(prompt(`Введите кол-во элементов массива данных`));
    alert(`<p>Ваш массив будет содержать ${arrLength} элементов</p>`);

    if ( !arrLength ) {
            alert('Вы должны ввести значение');
    } else if( arrLength < 4 ) {
        alert('Массив должен содержать не менее 4х элементов');
    } else {
        arrLengthCheck = true;
    }
    
}


do {

    let arrElement = prompt(`Введите елемент`);
    userArr.push(arrElement);
    
} while ( userArr.length !== arrLength );
alert(`<p>Ваш массив теперь выглядит так - ${userArr}`);

//Відсортувати масив за зростанням.
userArr.sort();
alert(`<p>Ваш массив отсортирован по возрастанию ${userArr}`);
//Видалити елементи з масиву з 2 по 4 (включно!).
userArr.splice(1, 3);
alert(`<p>Из массива удалены элементы с 2 по 4й включительно. Массив выглядит вот так - ${userArr}`);

