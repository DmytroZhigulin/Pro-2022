// на странице находятся элементы:

// div - фигура, которая может принимать какие-то формы

// select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура

// input для выбора цвета. При его изменении меняется цвет фигуры

//создаем все элементы на странице
function createAllElements() {
    const allWrap = document.querySelector('.wrap');
    const figureWrap = document.createElement('div');
    const figure = document.createElement('div');
    const options = document.createElement('div');
    const select = document.createElement('select');

    let figures = ['square', 'rectangle', 'circle'];
    figures.forEach((item, index) => {
        const selectOption = document.createElement('option');
        selectOption.setAttribute('id', `${index + 1}`);
        selectOption.innerHTML = `${item}`;
        select.append(selectOption);
    });

    const inputColor = document.createElement('input');
    

    figureWrap.classList.add('figure-wrap');
    figureWrap.setAttribute('id', 'figure-wrap');
    options.classList.add('options');
    select.setAttribute('id', 'select-color');
    inputColor.setAttribute('type', 'color');

    allWrap.append(figureWrap);
    figureWrap.append(figure);
    allWrap.append(options);
    options.append(select);
    options.append(inputColor);
    changeFigure();
}
createAllElements();

//отлавливаем изменение значения input
function changeFigure() {
    let myFigure = document.getElementById('figure-wrap').firstChild;
    let defFugure = document.getElementById('select-color');
    myFigure.id = defFugure.value;
    document.querySelector("select").addEventListener('change', function (e) {
        myFigure.id = `${e.target.value}`;
      });
    changeColor(myFigure);  
}


//меняем цвет
function changeColor(figure) {
    document.querySelector("input").addEventListener('change', function (e) {
        figure.style.background = e.target.value;
        console.log(figure);
        console.log(e.target.value);
    });
}
