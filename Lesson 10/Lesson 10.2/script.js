// Написать функцию assignObjects(obj1, obj2),
// которая принимает аргументами 2 объекта и возвращает новый, 
// который состоит из свойств обоих объектов (склеить). 
// Если свойство повторяется, то взять значение второго объекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }

let obj1 = { 
    x: 10, 
    y: 20 
};
    
let obj2 = { 
    z: 30 
};
let obj3 = { 
    x: 10 
}; 
let obj4 = { 
    x: 20,
    y: 30 
};


let assignObjects = function (obj1, obj2) {

    for ( let key in obj1) {
        newObj[key] = obj1[key];
    } 
    for ( let key in obj2) {
        newObj[key] = obj2[key];
    } 
    
}
let newObj = assignObjects(obj1, obj4);
console.log(newObj);
