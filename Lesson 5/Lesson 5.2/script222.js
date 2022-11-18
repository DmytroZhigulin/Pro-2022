let vegePics = ['cabbage', 'avocado', 'tomato'];
let fruttyPics = ['grapes', 'rasberry', 'coconut'];
let pics = vegePics.concat(fruttyPics); 
console.log(pics);
product = prompt("7");
console.log(vegePics.indexOf(product));
let productImage;
;

for ( let value of vegePics) {
    if ( product === value) {
        let productImage = value;
        document.write(`<img src="images/vegetables/${value}.svg" alt=${productImage} width="100" height="100">`);
        
    }
}