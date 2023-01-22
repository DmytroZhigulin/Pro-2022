// Створити програму для відображення результатів голосування. З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

// Вставляем везде 0 значение по умолчанию
let counterField = document.querySelectorAll('.vote__count');
counterField.forEach(item => {
    item.innerHTML = 0;
});

//Функция подсчета
function vouteCounter() {
    let emoji = document.querySelectorAll('.emoji');
    
    emoji.forEach((item, index) => {
        let count = 0;
        item.addEventListener('click', (item) => {
            item.preventDefault();
            counterField[index].innerHTML = ++count;
        });
    });
}
vouteCounter();  