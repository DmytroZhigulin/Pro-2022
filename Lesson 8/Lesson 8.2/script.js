// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3

// sum(5) = 8

// sum(20) = 28


function loopNum() {
    let count = 0;
    return function(total) {
        count += total;
        console.log(count);
    };
}
const sum = loopNum();
sum(3);
sum(5);
sum(20);
