// Необходимо реализовать алгоритм запроса у банкомата:
// баланса на карте
// выдачи наличных

// Входящие данные:

let userData = {
		'USD': 1000,
		'EUR': 900,
		'UAH': 15000,
		'BIF': 20000,
		'AOA': 100
	},
	bankData = {
		'USD': {
			max: 3000,
			min: 100,
			img: '💵'
		},
		'EUR': {
			max: 1000,
			min: 50,
			img: '💶'
		},
		'UAH': {
			max: 0,
			min: 0,
			img: '💴'
		},
		'GBP': {
			max: 10000,
			min: 100,
			img: '💷'
		}
	};

function getUserСurrency(data) {
    const userСurrency= [];

    for (let currency in data) {
        userСurrency.push(currency);
    }
    return userСurrency;
}

function getBankСurrency(data) {
    const bankСurrency= [];
    
    for (let currency in data) {
        if (data[currency].max !== 0 && userData[currency]) {
            bankСurrency.push(currency);
        }
    }
    
    return bankСurrency;
}


// Для этого пишем функцию getMoney, которая:

// в качестве входящих аргументов принимает объекты userData и bankData.
// возвращает Promise, в котором условием перехода в первый .then является ответ юзера на вопрос 'Посмотреть баланс на карте?’.
// Если юзер выбирает Да (Yes, Подтвердить), то вызываем функцию resolve(userData)
// В функции resolve, в зависимости от доступных пользователю валют (userData), предлагаем пользователю ввести валюту, по которой будет выведен баланс.
// Если пользователь вводить в prompt название НЕдопустимой для него валюты, продолжаем запрашивать валюту, пока не будет введена допустимая.
// При вводе пользователем названия допустимой ему валюты – выводим данные о балансе по данной валюте в консоль, например: ‘Баланс составляет: 1000 USD’.
// Если юзер выбирает Отмена (No), то взываем функцию reject({userData: userData, bankData: bankData})
// В функции reject, в зависимости от доступных пользователю валют (userData) и доступных валют в текущем банкомате bankData (с НЕ нулевым значением свойства max, что говорит об отсутствии в данный момент купюр этой валюты в банкомате), предлагаем пользователю ввести валюту, по которой будет произведено снятие наличных и сумму снятия.
// Если пользователь вводить в prompt название НЕдопустимой для него и для банкомата валюты, продолжаем запрашивать валюту, пока не будет введена допустимая.
// Если пользователь вводить в prompt сумму превышающую max для данной валюты, выводим в консоль сообщение: `Введенная сумма больше допустимой. Максимальная сумма снятия: …`
// Если пользователь вводить в prompt сумму меньше min для данной валюты, выводим в консоль сообщение: `Введенная сумма меньше допустимой. Минимальная сумма снятия: …`
// При вводе пользователем допустимой ему и текущему банкомату название валюты и сумму – выводим сообщение об успешном снятии наличных в консоль, например: ‘Вот Ваши денежки 200 USD 💵’.
// Финальное сообщение, которое вне зависимости от выбора операции должен получить юзер в консоли – 'Спасибо, хорошего дня 😊'

function getMoney(userData, bankData) {
    return new Promise((resolve, reject) => {
        confirm("Проверить баланс на карте?") ? resolve(userData) : reject({userData: userData, bankData: bankData});
    });
}
let currency;

getMoney(userData, bankData)
    .then(
        (userData) => {

            do {
                currency = prompt(`Введите одну из доступных валют: ${[...getUserСurrency(userData)]}`).toUpperCase();
            } while (getUserСurrency(userData).indexOf(currency) === -1);

            console.log(`Ваш баланс: ${userData[currency]} ${currency}`);
        },
        (userData, bankData) => {
           
            do {
                currency = prompt(`Введите валюту, которую хотите снять: ${[...getBankСurrency(userData.bankData)]}`).toUpperCase();
            } while (getBankСurrency(userData.bankData).indexOf(currency) === -1);

            return Promise.reject(currency);
        }
    )
    .then(
        () => {},
        currency => {
            let sum = prompt(`Введите сумму которую хотите снять`);

            if (sum < bankData[currency].min) {
                console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${bankData[currency].min} ${currency}`);
            }
            else if (sum > bankData[currency].max) {
                console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${bankData[currency].max} ${currency}`);
            }
            else {
                alert(`Вот Ваши денежки: ${sum} ${currency} ${bankData[currency].img}`);
            }
        }
    )
    .finally(() => console.log('Спасибо, хорошего дня 😊'));
