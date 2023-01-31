// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення,
// що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

const cars = [
    {
        mark: "Mazda",
        img: "images/mazda/mazda.jpg",
        models: [
            { 
                model: "RX-7",
                img: "images/mazda/mazda_rx-7.jpg",
                engine: "2.5L",
                power: "320hp",
                maxspeed: "300km/h",
                price: "70000$",
                 
            },
            {
                model: "RX-8",
                img: "images/mazda/mazda_rx-8.jpg",
                engine: "2L",
                power: "215hp",
                maxspeed: "240km/h",
                price: "28000$",
            },
            {
                model: "Miata",
                img: "images/mazda/mazda_miata.jpg",
                engine: "1.6L",
                power: "115hp",
                maxspeed: "180km/h",
                price: "14000$",
            },
        ]
    },
    {
        mark: "Nissan",
        img: "images/nissan/nissan.jpg",
        models: [
            { 
                model: "Skyline R34",
                img: "images/nissan/r_34.jpg", 
                engine: "3",
                power: "420hp",
                maxspeed: "320km/h",
                price: "80000$",
            },
            {
                model: "GTR",
                img: "images/nissan/GTR.jpg",
                engine: "2.8",
                power: "600hp",
                maxspeed: "360km/h",
                price: "115000$",
            },
            {
                model: "Premiera",
                img: "images/nissan/premiera.jpg", 
                engine: "1.4",
                power: "120hp",
                maxspeed: "180km/h",
                price: "7000$",
            },
        ]
    },
    {
        mark: "Toyota",
        img: "images/toyota/toyota.jpg",
        models: [
            { 
                model: "Mark-2",
                img: "images/toyota/mark_2.jpg",
                engine: "3",
                power: "300hp",
                maxspeed: "280km/h",
                price: "60000$",
            },
            {
                model: "Supra",
                img: "images/toyota/Supra.jpg",
                engine: "2.8",
                power: "400hp",
                maxspeed: "320km/h",
                price: "95000$",
            },
            {
                model: "Celica",
                img: "images/toyota/Celica.jpg", 
                engine: "1.6",
                power: "180hp",
                maxspeed: "220km/h",
                price: "14000$",
            },
        ]
    },
];

let container = document.querySelector('.container');

function getCars(cars, mainWrap) {
    let markWrap = document.createElement('div');
    markWrap.classList.add('cards__wrap');
    mainWrap.append(markWrap);

    cars.forEach(element => {
        let markCard = document.createElement('div');
        let markImg = document.createElement('img');
        let markTitle = document.createElement('p');

        markCard.classList.add('card');
        markImg.setAttribute('src', `${element.img}`);
        markImg.setAttribute('alt', `${element.mark}`);
        markTitle.innerText = element.mark;

        markWrap.append(markCard);
        markCard.append(markImg);
        markCard.append(markTitle);

        markCard.addEventListener('click', (e) => {
            e.preventDefault();
            getModels(element.models, container);
        });
        

        console.log(element);
    });
}
getCars(cars, container);


function getModels(models, mainWrap) {

    let modelWrap = document.createElement('div');
    modelWrap.classList.add('models__wrap');
    mainWrap.append(modelWrap);

    models.forEach(element => {
        let modelCard = document.createElement('div');
        let modelPreviev = document.createElement('div');
        let modelImg = document.createElement('img');
        let modelTitle = document.createElement('p');
        
        modelImg.setAttribute('src', `${element.img}`);
        modelImg.setAttribute('alt', `${element.model}`);
        modelTitle.innerText = element.model;
    
        modelCard.classList.add('model__card');
        modelPreviev.classList.add('model__preview');
        
        modelCard.append(modelPreviev);
        modelPreviev.append(modelImg);
        modelPreviev.append(modelTitle);
        modelWrap.append(modelCard);
        console.log(element);

        modelCard.addEventListener('click', (e) => {
            e.preventDefault();
            getCarInfo(modelCard, element);
            
            
        });

        
    });
    
}

function getCarInfo(card, carInfo) {

    let modelDescr = document.createElement('div');
            modelDescr.classList.add('model__descr');
            card.append(modelDescr);
            card.style.width = 350 + 'px';

            let keys = Object.keys(carInfo);

            for (let i = 0, l = keys.length; i < l; i++) {

                if(keys[i] !== 'img' && keys[i] !== 'model') {

                    let modelDescrField = document.createElement('p');
                    modelDescr.append(modelDescrField);
                    modelDescrField.innerHTML = `${keys[i]}: ${carInfo[keys[i]]}`;
                    console.log(keys[i]);

                }
            }

            let modelBuyButton = document.createElement('button');
            modelBuyButton.classList.add('model__buy');
            modelBuyButton.innerText = 'Buy car';
            modelDescr.append(modelBuyButton);

            modelBuyButton.addEventListener('click', () => window.location.reload());
            
}