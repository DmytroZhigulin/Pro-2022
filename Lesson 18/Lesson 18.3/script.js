// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.


//Создаем элементы
function phasteSlidesAndButtons() {

    let slides = ['slide_1','slide_2', 'slide_3', 'slide_4'];
    const container = document.querySelector('.container');
    
    slides.map(function(item, index) {
        let slide = document.createElement('div');
        slide.classList.add('slide');
        container.append(slide);
        slide.style.backgroundImage = `url(images/${item}.jpg)`;
        
        // if(index === 0) {
        //     slide.classList.add('active');
        // } else {
        //     slide.classList.add('inactive');
        // }
    });

    let buttonPrev = document.createElement('button');
    let buttonNext = document.createElement('button');

    buttonPrev.innerHTML = 'Prev';
    buttonNext.innerHTML = 'Next';

    buttonPrev.classList.add('slider__button', 'prev');
    buttonNext.classList.add('slider__button', 'next');

    container.append(buttonPrev);
    container.append(buttonNext);
    
}
phasteSlidesAndButtons();


//Получаем нужные элементы
const allSlides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slidesNum = allSlides.length;
let index = 0;


//Функция переключения слайдера
function slidesWork() {
    indexCheck(index);

    allSlides[index].classList.add('active');

    nextButton.addEventListener('click', () => {
        
        allSlides[index].classList.remove('active');
        index++;
        allSlides[index].classList.add('active');
        console.log(index);  
        indexCheck(index);
    });
    
    prevButton.addEventListener('click', () => {
        
        allSlides[index].classList.remove('active');
        index--;
        allSlides[index].classList.add('active');
        console.log(index); 
        if (index > slidesNum - 1){
            nextButton.style.display = 'none';
        }
        indexCheck(index);
    });
}
slidesWork();

//Функция проверки индекса элемента
function indexCheck(index) {
    if(index === 0) {
        prevButton.style.display = 'none';
    } else if (index === slidesNum - 1){
        nextButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }
}
