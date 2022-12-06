// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:



// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:

// Используем только методы concat/forEach/map/filter/join (по надобности, все не нужно).


let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];

let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

let tasks = monday.concat(tuesday);

const taskBoard = tasks
    .filter(function(task) {
        task[1] /= 60;
        return task;
    })
    .map(function(task) {
        task.push(task[1] * amount);
        return task;
    })
    .map(function(item) {
        console.log(item);
        return `<tr>
                    <td>Task name:${item[0]}</td>
                    <td>Taks duration: ${item[1]} hours</td>
                    <td>Task amount: $${item[2]}</td>
                </tr>
                `
    })
    .join('');

document.write(`<table>${taskBoard}</table>`);



// {/* <tr>
//   <td>Task name: Write a tutorial</td>
//   <td>Taks duration: 3 hours</td>
//   <td>Task amount: $300</td>
// </tr> */}
