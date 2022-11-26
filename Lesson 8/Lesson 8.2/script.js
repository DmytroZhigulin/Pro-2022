// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3

// sum(5) = 8

// sum(20) = 28


let counter = 0;
function sum(argument) {
    counter += argument;
    console.log(counter);
    return counter;  
}    
sum(3);
sum(5);
sum(20);
