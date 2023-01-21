// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

let firstBtn = document.querySelector('.first__button');
let secBtn = document.querySelector('.sec__button');


function linkCheck(link) {
    if (link.indexOf('https://') != -1 || link.indexOf('http://') != -1) {
        return true;
    }
    return false;
}

firstBtn.addEventListener('click', () => {
    let input1 = document.getElementById('1_link');
    linkCheck(input1.value) ? window.open(input1.value) : window.open(`https://${input1.value}`);
});

secBtn.addEventListener('click', () => {
    let input2 = document.getElementById('2_link');
    linkCheck(input2.value) ? window.open(input2.value) : window.open(`https://${input2.value}`);
});
