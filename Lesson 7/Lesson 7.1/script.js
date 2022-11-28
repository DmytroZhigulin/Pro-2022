// Рисуем колоду карт, которая состоит из:

// карт номиналом 2-10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей


// В макете используется:

// Шрифт https://fonts.google.com/specimen/Nerko+One
// Зеленый цвет доски #55aa55
// Черный цвет текста #353c4d
// Иконки 4-x мастей и jack, queen, king в архиве images.zip


// Все теги рендерим с помощью js.

// Внешний вид задания НЕ важен, важен только JS-код))

let cards = [];
let olderCards = 'JQKT';
let suits = ['clubs', 'spades', 'diamonds', 'hearts'];
let pics = ['jack', 'queen', 'king'];

for ( let i = 2; i <= 10; i++) { // Цикл от 2 до 10
    
    for ( let j = 0; j < suits.length; j++) { // Цикл подставляет каждую из 4х мастей в каждой итерации цикла с цифрами
        cards.push(`                          
            <div class="card">
                <div class="card__info">${i}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                <div class="card__info">${i}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
            </div>
        `); // пушим в массив карт - карты от 2 до 10
    }
}


for ( let h = 0; h < olderCards.length; h++) { // Цикл проходит по буквам старших карт
    
    for ( let f = 0; f < suits.length; f++) { // Цикл подставляет масти в каждой итерации букв

            h < 3 ? // Тернарным оператором подставляем картинки и масти в карты с индексом меньше 3x
                cards.push(`
                <div class="card card--person">
                    <div class="card__info">${olderCards[h]}<img src="images/${suits[f]}.svg" alt="${suits[f]}"></div>
                    <img class="person" src="images/${pics[h]}.svg" alt="${pics[h]}">
                    <div class="card__info">${olderCards[h]}<img src="images/${suits[f]}.svg" alt="${suits[f]}"></div>
                </div>
                `) :  // Т.к на 3м индексе лежит туз то подставляем картинки мастей вместо картинок из массива PICS
                cards.push(`
                <div class="card card--person">
                    <div class="card__info">${olderCards[h]}<img src="images/${suits[f]}.svg" alt="${suits[f]}"></div>
                    <img class="person" src="images/${suits[f]}.svg" alt="${suits[f]}">
                    <div class="card__info">${olderCards[h]}<img src="images/${suits[f]}.svg" alt="${suits[f]}"></div>
                </div>
                `);
    }
}
document.write(`
    <div class="wrapper">${cards.join('')}</div>
    `);