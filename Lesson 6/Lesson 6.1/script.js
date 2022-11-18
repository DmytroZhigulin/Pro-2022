let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

// Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join():

// 1. Объединить массивы destination, native, hero в общий массив rainbow.
let rainbow = destination.concat(native, hero); //['Poltava', 'In', 'York', 'Of', 'Ivan']

// 2. Сделать реверс элементов полученного массива rainbow.
rainbow.reverse(); //['Ivan', 'Of', 'York', 'In', 'Poltava']

// 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];
rainbow[0] = 'Richard'; //['Richard', 'Of', 'York', 'In', 'Poltava']

rainbow.splice(3, 0, "Gave", "Battle"); //['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Poltava']

rainbow[rainbow.length - 1] = 'Vain'; //['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain']

// 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.