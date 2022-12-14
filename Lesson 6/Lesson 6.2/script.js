let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
let winterSports = sports.slice(0, 5); // c skier по ice skate;

// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
let summerSports = sports.slice(5, 11); // c swimmer по bicyclist;

// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
let fruit = winterSports.splice(2, 1); // яблоко из winterSports
let fruits = fruit.concat(summerSports.splice(2, 2)); // 2 фрукта из summerSports и объединение в один массив fruits
// console.log(winterSports);
// console.log(summerSports);
// console.log(fruits);

// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.
let arrays = [winterSports, summerSports, fruits];
let arraysNames = ['*** Winter sports ***', '*** Sumer sports ***', '*** Fruits ***'];
// console.log(arrays);
// console.log(arraysNames);

for (let i = 0; i < arrays.length; i++) { // Получаем каждый вложенный массив массива
    console.log(arraysNames[i]);         // При каждой итерации из массива имен выводим название = номеру итерации;
    // console.log(arrays[i]);   
    for ( let j = 0; j < arrays[i].length; j++) { // Перебираем каэдый массив вложенного массива;
        let elementOfArray = arrays[i][j]; // Каждый массив из вложенного массива при итерации записывается в переменную
        console.log(`${elementOfArray[0]}: ${elementOfArray[1]}`); // Т.к мы знаем что длинна каждого полученного массива = 2 - выводим элементы по индексам;
    }   
}
