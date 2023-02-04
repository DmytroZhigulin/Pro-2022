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

function reload() {
    window.location.reload();
}

let container = document.querySelector('.container');


function getCars(cars, mainWrap) {
    let markWrap = document.createElement('div');
    markWrap.classList.add('cards__wrap');
    mainWrap.append(markWrap);


    let modelWrap = document.createElement('div');
    modelWrap.classList.add('models__wrap');
    mainWrap.append(modelWrap);

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
            getModels(element.models, modelWrap);
        });
    });
}
getCars(cars, container);


function getModels(models, modelWrap) {

    modelWrap.innerHTML = '';
    models.forEach(element => {
        let modelCard = document.createElement('div');
        let modelPreviev = document.createElement('div');
        let modelImg = document.createElement('img');
        let modelTitle = document.createElement('p');
        let modelDescr = document.createElement('div');
    
    
        
        modelImg.setAttribute('src', `${element.img}`);
        modelImg.setAttribute('alt', `${element.model}`);
        modelTitle.innerText = element.model;
        modelDescr.classList.add('model__descr');
    
        modelCard.classList.add('model__card');
        modelPreviev.classList.add('model__preview');

        modelWrap.append(modelCard);
        modelCard.append(modelPreviev);
        modelPreviev.append(modelImg);
        modelPreviev.append(modelTitle);
        modelCard.append(modelDescr);
        
        modelCard.addEventListener('click', (e) => {
            e.preventDefault();
            modelDescr.innerHTML = '';
            getCarInfo(modelWrap, modelCard, modelDescr, element);
            
        });
    });
}

function getCarInfo(mainWrap, card, descrField, carInfo) {

    card.style.width = 350 + 'px';
    let keys = Object.keys(carInfo);
    
    for (let i = 0, l = keys.length; i < l; i++) {

        if(keys[i] !== 'img' && keys[i] !== 'model') {
            
            let modelDescrField = document.createElement('p');
            descrField.append(modelDescrField);
            modelDescrField.innerHTML = `${keys[i]}: ${carInfo[keys[i]]}`;
        }
    }

    let modelBuyButton = document.createElement('button');
    modelBuyButton.classList.add('model__buy');
    modelBuyButton.innerText = 'Buy car';
    descrField.append(modelBuyButton);

    modelBuyButton.addEventListener('click', () => {
        // alert('Tanks');
        // setTimeout(reload, 2000);
        createForm(mainWrap, carInfo.model);
    });       
}


// Робимо на підставі минулого дз.

// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто (вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)

function createForm(wrap, model) {
    wrap.innerHTML = '';

    const deliveryCity = ['', 'Boston', 'LA', 'NY', 'Dallas', 'Chicago'];
    const deliveryPost = ['' ,1 , 2, 44, 56, 98, 101];
    const paymentType = ['Credit card', 'After shipping'];

    let form = document.createElement('form');
    let userBlock = document.createElement('div');
    let cityBlock = document.createElement('div');
    let quantityBlock = document.createElement('div');
    let postBlock = document.createElement('div');
    let paymentBlock = document.createElement('div');
    let commentBlock = document.createElement('div');

    form.classList.add('validationForm');
    userBlock.classList.add('main__info');
    cityBlock.classList.add('city__info');
    quantityBlock.classList.add('quantity__info');
    postBlock.classList.add('post__info');
    paymentBlock.classList.add('payment__info');
    commentBlock.classList.add('comment__info');

    form.append(userBlock);
    form.append(cityBlock);
    form.append(quantityBlock);
    form.append(postBlock);
    form.append(paymentBlock);
    form.append(commentBlock);
    
    let userLabel = document.createElement('label');
    let userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('name', 'name');
    userInput.setAttribute('id', 'user__info');
    userInput.classList.add('field');

    userLabel.innerText = 'Name & Surname';
    userBlock.append(userLabel);
    userBlock.append(userInput);

    let cityLabel = document.createElement('label');
    let citySelect = document.createElement('select');
    citySelect.setAttribute('id', 'city__info');
    citySelect.classList.add('field');
    createOptions(deliveryCity, citySelect);

    cityLabel.innerText = 'Choose your city';
    cityBlock.append(cityLabel);
    cityBlock.append(citySelect);

    let quantityLabel = document.createElement('label');
    let quantityInput = document.createElement('input');
    quantityInput.setAttribute('type', 'number');
    quantityInput.setAttribute('name', 'name');
    quantityInput.setAttribute('id', 'quantity__info');
    quantityInput.classList.add('field');

    quantityLabel.innerText = 'Quantity';
    quantityBlock.append(quantityLabel);
    quantityBlock.append(quantityInput);


    let postLabel = document.createElement('label');
    let postSelect = document.createElement('select');
    postSelect.setAttribute('id', 'post__info');
    postSelect.classList.add('field');
    createOptions(deliveryPost, postSelect);

    postLabel.innerText = 'Choose post office';
    postBlock.append(postLabel);
    postBlock.append(postSelect);

    let paymentTitle = document.createElement('p');
    paymentTitle.innerText = 'Payment method';
    paymentBlock.append(paymentTitle);

    paymentType.forEach( elem => {
        let paymentLabel = document.createElement('label');
        let input = document.createElement('input');

        paymentLabel.innerText = elem;
        paymentLabel.setAttribute('for', elem);

        input.setAttribute('type', 'radio');
        input.setAttribute('id', elem);
        input.setAttribute('value', elem);
        input.classList.add('field');
        

        paymentBlock.append(paymentLabel);
        paymentBlock.append(input);

    });
    

    let commentLabel = document.createElement('label');
    let commentArea = document.createElement('textarea');
    commentArea.setAttribute('id', 'comment__info');
    commentArea.classList.add('field');
    commentLabel.innerText = 'Comment';

    commentBlock.append(commentLabel);
    commentBlock.append(commentArea);


    let confirmButton = document.createElement('input');
    confirmButton.setAttribute('value', 'Confirm');
    confirmButton.setAttribute('type', 'submit');
    confirmButton.classList.add('confirmBtn');
    form.append(confirmButton);

    wrap.append(form);
    formValidate(form, model, wrap);
}


function createOptions(arr, wrap) {
    arr.forEach( element => {
        let option = document.createElement('option');
        option.innerText = element;
        option.setAttribute('value', element);
        wrap.append(option);
    });
}

function formValidate(form, model, wrap) {
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let counter = 0;
      let fomFields = document.querySelectorAll('input');
      
      fomFields.forEach(field => {
            if (field.value.length !== 0) {
                counter++;
            }
        });
        fomFields.length === counter ? showOrder(userOrder(model), wrap) : alert('You must fill all fields!');
    });
}


function userOrder(model) {
    const order = {
        product: model,
        name: document.getElementById('user__info').value,
        city: document.getElementById('city__info').value,
        quantity: document.getElementById('quantity__info').value,
        post: document.getElementById('post__info').value,
        pay: document.querySelector("input[type=radio]:checked").id,
        comment: document.getElementById('comment__info').value,
    };
    return order;
}

function showOrder(order, wrap) {
    wrap.innerHTML = '';

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    for (let key in order) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');

        td.innerText = `${key} : ${order[key]}`;

        tr.append(td);
        tbody.append(tr);
    }

    table.append(tbody);
    wrap.append(table);
}
