//Напишіть скрипт, який переводить години в секунди і має робити насутпне:

//запитати у користувача кількість годин;
let hours = +prompt('How many hours is it now?');
//порахувати, скільки секунд у цій кількості годин;
//записати обчислене значення у змінну;
const oneHourSeconds = 3600;
let secInHours = hours * oneHourSeconds;
//console.log(secInHours);
//вивести цю змінну користувачеві через alert.
//alert(secInHours);
alert(`There is ${secInHours} seconds in ${hours} hours!`);

