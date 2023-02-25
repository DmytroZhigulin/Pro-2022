const API = "https://63f9f88abeec322c57eae484.mockapi.io/";
const univers = "/universes";
const heroes = "/heroes";

async function controller(method, action, body) {
    let URL = `${API}${action}`;
    const params = {
        method,
        headers: {
            "Content-Type": "application/json",
        }, 
    };
    if(body) params.body = JSON.stringify(body);
    

    const response = await fetch(URL, params);
    const data = await response.json();

    return data;
}

// controller("GET", `${univers}`)
//     .then(data => console.log(data));

// получаем категории и вставляем их в инпут
const comicsSelect = document.querySelector('select[data-name="heroComics"]');

async function loadComics() {

  const universes = await controller('GET', univers);
  comicsSelect.innerHTML = "";

  universes.forEach(comics => {
    comicsSelect.innerHTML += `<option value="${comics.name}">${comics.name}</option>`;
  });
}
loadComics();

// Получаем персонажей с сервера
async function getHeroes() {
  const data = await controller("GET", heroes);
  data.forEach(renderHero);
}


//Вешаем обработчик события (добавления перса) на сервер
const addHeroBtn = document.getElementById("heroesForm");

addHeroBtn.addEventListener("submit", async (e) => {
  e.preventDefault();

  let heroName = document.querySelector('input[data-name="heroName"]').value;
  let isFavourite = document.querySelector('input[data-name="heroFavourite"]');

  const data = await controller("GET", heroes);

  const isHeroExists = data.some(item => item.name === heroName);
  if (isHeroExists) {
    console.log(`Герой ${heroName} уже есть в вашем списке`);
  } else {
    const response = await controller("POST", heroes, {
      name: heroName,
      comics: comicsSelect.value,
      favourite: isFavourite.checked,
      });
    renderHero(response);
  }
});



// Рендерим персонажа после добавления на сервер в таблице с добавлением полей, чекбокса и кнопки
async function renderHero(element) {
  // Получаем таблицу и создаем новую строку
  const tableBody = document.getElementById("tableBody");
  const tableRow = document.createElement("tr");

  // Устанавливаем идентификатор строки равным идентификатору элемента
  tableRow.id = element.id;

  // Создаем ячейку для имени героя и добавляем ее в строку
  const heroTableName = document.createElement("td");
  heroTableName.innerText = element.name;
  tableRow.appendChild(heroTableName);

  // Создаем ячейку для комикса и добавляем ее в строку
  const comicsTableName = document.createElement("td");
  comicsTableName.innerText = element.comics;
  tableRow.appendChild(comicsTableName);

  // Создаем ячейку для избранного и добавляем ее в строку
  const favouriteCheckboxField = document.createElement("td");

  // Создаем элементы для переключателя избранного
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  // Добавляем обработчик клика на переключатель избранного
  input.addEventListener("click", async () => {
    await controller("PUT", `${heroes}/${element.id}`, {
      favourite: input.checked,
    });
  });

  // Если элемент является избранным, устанавливаем значение переключателя избранного в true
  if (element.favourite) {
    input.checked = true;
  }

  // Добавляем переключатель избранного в ячейку и ячейку в строку
  label.appendChild(input);
  favouriteCheckboxField.appendChild(label);
  tableRow.appendChild(favouriteCheckboxField);

  // Создаем ячейку для кнопки удаления и добавляем ее в строку
  const buttonField = document.createElement("td");
  const delButton = document.createElement("button");
  delButton.innerText = "Delete";

  // Добавляем обработчик клика на кнопку удаления
  delButton.addEventListener("click", () => {
    controller("DELETE", `${heroes}/${element.id}`);
    document.getElementById(element.id).remove();
  });

  // Добавляем кнопку удаления в ячейку и ячейку в строку
  buttonField.appendChild(delButton);
  tableRow.appendChild(buttonField);

  // Добавляем строку в таблицу
  tableBody.prepend(tableRow);
}
getHeroes();
