//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
//Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

function randomName() {
    return Math.round(Math.random() * (9 - 1) + 1);
}
randomName();

function createImage() {
    let pageImg = document.createElement("img");
    pageImg.src = `images/${randomName()}.png`;
    pageImg.alt = `${randomName()}`;

    return pageImg;
}

function createWrap() {
    let pageBody = document.querySelector("body");
    let imgWrap = document.createElement("div");
    imgWrap.classList.add("wrap");
    pageBody.append(imgWrap);
    imgWrap.append(createImage());
}
createWrap();
