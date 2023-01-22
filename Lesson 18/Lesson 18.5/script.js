// Реалізовуємо форму для реєстрації.

// Поля:

// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”


// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
const form = document.getElementById('form');
const button = document.getElementById('form__button');

button.addEventListener('click', (e) => {
    e.preventDefault();

    let values = [];

    let name = document.getElementById('get-name');
    values.push(name.value);

    let surname = document.getElementById('get-surname');
    values.push(surname.value);

    let adress = document.getElementById('get-adress');
    values.push(adress.value);

    let gender = document.querySelectorAll('#gender');
    for( let i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            values.push(gender[i].value);  
        }
    }

    let city = document.getElementById('city');
    values.push(city.value);
    
    let language = document.querySelectorAll('#language');
    let languages = [];
    for( let i = 0; i < language.length; i++) {
        if(language[i].checked) {
            languages.push(language[i].value); 
            
        }
    }
    
    form.style.display = 'none';
    createTable(values, languages);
});
    
function createTable(value, lang) {
    let container = document.querySelector('.container');
    let table = document.createElement('table');
    container.append(table);

    let fieldNames = ["Name:", "Surname:", "Adress:", "Gender:", "City:", "Languages:"];
    let td = document.createElement('td');
    table.append(td);

    for(let i = 0; i < fieldNames.length; i++) {
        let tr = document.createElement('tr');
        td.append(tr);
        tr.innerHTML = `${fieldNames[i]} ${value[i]}`;
        
        if(i === fieldNames.length - 1) {
            tr.innerHTML = `${fieldNames[i]} ${[...lang]}`;
        }
    }
}
