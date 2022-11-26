// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>



// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {

    let randomKey = '';
    for( let i = 0; i < length; i++) {

        let newKey = Math.floor(Math.random() * characters.length);
        randomKey += characters[newKey];

    }
    return randomKey;
}

const key = generateKey(16, characters);
console.log(key);