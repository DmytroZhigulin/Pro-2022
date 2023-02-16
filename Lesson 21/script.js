// Вверху страницы находится инпут и кнопка. Пользователь может ввести туда username любого пользователя гитхаб.
// Когда пользователь ввел логин, он может нажать на кнопку "Найти". В этот момент приложение должно отправить
// запрос на API Github и получить информацию о пользователе

// Данные для пользователя берем из запроса https://api.github.com/users/{{login}} , где логин - это логин выбраного
//пользователя.
// Н-р для пользователя vladimirkr url будет https://api.github.com/users/vladimirkr
// После получения данных нужно показать аватар пользователя (свойство avatar_url), количество репозиториев
// (свойство public_repos), количество фоловеров (свойство followers) и количество наблюдаемых (свойство following)



// Если такого юзернейма не существует гитхаб вернет ошибку (404). Попробуйте обработать ее в .catch

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const login = document.querySelector("input");
    controller(`https://api.github.com/users/${login.value}`, `${login.value}`);
});

async function controller(action, login) {
    try {
        const response = await fetch(action);
		if(response.ok) {
			const data = await response.json();
            console.log(data);
            renderUserCard(data);
            
		} else {
            throw new Error(response.status);
		}
    } catch (err) {
        alert(`There is no user with id ${login}`);
    }
}

function renderUserCard(data) {
    const userCardsWrap = document.querySelector(".cards__wrap");
    userCardsWrap.innerHTML = "";

    let userCard= document.createElement('div');
    let userAvatar = document.createElement('img');
    let userRepositories = document.createElement('p');
    let userFollowers = document.createElement('p');
    let userWatchRepositories = document.createElement('p');

    userCard.classList.add('card');

    userCardsWrap.append(userCard);
    userCard.append(userAvatar);
    userCard.append(userRepositories);
    userCard.append(userFollowers);
    userCard.append(userWatchRepositories);

    userAvatar.setAttribute('src', `${data.avatar_url}`);
    userRepositories.innerText = `User's ropositories: ${data.public_repos}`;
    userFollowers.innerText = `User's followers: ${data.followers}`;
    userWatchRepositories.innerText = `User watch repositories: ${data.following}`;
}