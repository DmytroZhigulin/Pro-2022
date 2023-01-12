//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

// Создаем случайное число;
// раскоментить для заполнения случайными числами
// function randomNum() { 
//     let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//     return num;
// }

// Создаем точное число;
function constantNum() {
    let cell = document.querySelectorAll("td");

    let num = 1;
    cell.forEach(element => {
        element.innerHTML = `${num}`;
        num++;
    });
} 


// Создаем 10 элементов tr;
function createRow(body) {
    let tableRow;
    for( let i = 0; i < 10; i++){
        tableRow = document.createElement("tr"); 
        createCell(tableRow);
        body.append(tableRow);  
    } 
}

// // Создаем 10 элементов td и ставляем в каждый из 10 элементов tr;
function createCell(cell) {
    let tableCell;
    for( let i = 0; i < 10; i++){
        tableCell = document.createElement("td"); 
        tableCell.classList.add("cell");
        cell.append(tableCell); 
        // tableCell.innerHTML = `${randomNum()}`; //раскоментить для заполнения случайными числами
    }
}

//создаем тело таблицы и вставляем туда созданные и заполненные 10 элементов tr;
function pushTable(tableParts) {
    let tableBody = document.createElement("tbody");
    tableParts.append(tableBody);

    createRow(tableBody);
    constantNum(); //закоментить для заполнения случайными числами
}

// создаем обертку для таблицы и вставляем таблицу в обертку
// не обязательно. таблу можно вывести немного переписав функцию pushTable();
function createTable() {
    let pageBody = document.querySelector("body");
    let tableWrap = document.createElement("div");
    tableWrap.classList.add("wrap");
    pageBody.append(tableWrap);

    pushTable(tableWrap);
}
createTable();
