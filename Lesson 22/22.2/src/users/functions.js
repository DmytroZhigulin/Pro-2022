import { users } from "./data";

 export function getAllUsers() {

    let container = document.getElementById('container');
    
    users.forEach(user => {
        let { userName, userSurname, userAge, city, email } = user;

        let card = document.createElement('div');
        card.classList.add('user__card');

        let userMail = document.createElement('p');
        userMail.innerText = `email: ${email}`;

        let userField = document.createElement('p');
        userField.innerText = `User: ${userName} ${userSurname}`;

        let age = document.createElement('p');
        age.innerText = `Age: ${userAge}`;

        let userCity = document.createElement('p');
        userCity.innerText = `Lives in: ${city}`;

        card.append(userField);
        card.append(userMail);
        card.append(age);
        card.append(userCity);
        container.append(card);
    });
}

