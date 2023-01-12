//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. 
//При пропажі фокусу - <div> так само пропадає

// let textField = document.getElementById("textfield");
// let imgBlock = document.querySelector("img");

// console.log(imgBlock);
// textField.onfocus = function() {
//     imgBlock.classList.add('visible');
//     imgBlock.classList.remove('invisible');
// };
// textField.onblur = function() {
//     imgBlock.classList.add('invisible');
//     imgBlock.classList.remove('visible');
// };


//2 вариант - когда элемента нет на странице
let wrap = document.querySelector(".wrap");
let textField = document.getElementById("textfield");
let imgBlock = document.createElement("div");
let img = document.createElement("img");


textField.onfocus = function() {
    img.src = "hello-Mr-Bean.jpg";
    img.alt = "Bean";
    imgBlock.append(img);
    wrap.append(imgBlock);
    
};
textField.onblur = function() {
    img.remove();
    imgBlock.remove();
};