// Три товара с категории vegetables:
let vegetables = ['cabbage', {price: 8}, 'avocado', {price: 30}, 'tomato', {price: 10}];
let vegePics = ['cabbage', 'avocado', 'tomato'];


// Три товара с категории fruits:
let fruits = ['grapes', {price: 20}, 'raspberry', {price: 25}, 'coconut', {price: 50}];
let fruttyPics = ['grapes', 'rasberry', 'coconut'];

// Задача: в зависимости от выбранного пользователем периода (winter или summer), категории (vegetables или fruits), товара с выбранной категории (vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), и количества единиц выбранного товара – посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.
// Порядок действий:

// Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
// Важно: 
// Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 
let season;
let coefficient;
do {  
    season = prompt('In what season you do shopping, winter or summer?').replaceAll(" ", "").toLowerCase();

    // Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
    // Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
    if (season === 'winter') {
      coefficient = 2;
    } else if (season === 'summer') {
      coefficient = 0.8;
    }

  }
  while ( season !== 'winter' && season !== 'summer' );
  // console.log(season);

// Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
// Важно: 
// Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.
let category; 
do {  
  category = prompt('Are you buying vegetables or fruits?').replaceAll(" ", "").toLowerCase();
}
while ( category !== 'vegetables' && category !== 'fruits' );
// console.log(category);

// Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
let product;
let chosenProduct;
let productPrice;
if( category === 'vegetables') {

  do {  
    product = prompt('What vegetable you whant to buy? Cabbage, avocado or tomato?').replaceAll(" ", "").toLowerCase();
    chosenProduct = vegetables.indexOf(product);
    productPrice = vegetables[chosenProduct + 1].price;
  }
  while ( product !== 'сabbage' && product !== 'avocado' && product !== 'tomato' );

} else {

  do {  

    product = prompt('What fruit you whant to buy? grapes, rasberry or coconut?').replaceAll(" ", "").toLowerCase();
    chosenProduct = fruits.indexOf(product);
    productPrice = fruits[chosenProduct + 1].price;
  }
  while ( product !== 'grapes' && product !== 'rasberry' && product !== 'coconut' );

}
// console.log(product);
// console.log(chosenProduct);
// console.log(productPrice);

// Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
// Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
// Важно: 
// Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.
// Запрашиваем у пользователя количество единиц ранее выбранного товара.
// Важно:
// Введенное значение должно быть числом и не меньше 1.
let countOfProducts; 
do {  
  countOfProducts = parseInt(prompt(`How many ${product} you want to buy`));
}
while ( countOfProducts <= 1 || isNaN(countOfProducts) );
// console.log(countOfProducts);
let finalPrice = productPrice * countOfProducts * coefficient;


//Подбор картинки из объединенного массива с изображениями
let productImage;
let pics = vegePics.concat(fruttyPics); 

for ( let value of pics) {
  if ( product === value) {
      productImage = value;
  }
}

// Выводим в html информацию о выбранном товаре с финальной стоимостью покупки.
document.write
  (`
    <div class="product" align="center">
      <img src="images/${category}/${productImage}.svg" alt=${productImage} width="100" height="100">
      <p>Selected product: <b>${product}</b></p>
      <p>Count of ${product}: <b>${countOfProducts}</b></p>
      <p>Selected period: <b>${season}</b></p>
      <p>Selected category: <b>${category}</b></p>
      <p>Final sum: <b>${finalPrice} UAH</b></p>
    </div>
  `);