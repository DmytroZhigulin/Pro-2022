// Создать объект с такой структурой: 
// obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } 
// Написать функцию convert(obj), которая получает аргументом obj. Функция должна вернуть новый объект вида:

// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }

const obj = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30 
    }, 
    foo2: { 
        k: 23, 
        p: 13 
    } 
}; 



let newObj = {};

function convert(object) {

    for ( let key in object) {
        

        if (typeof(object[key]) === 'object') {
            
            let clone = object[key]
            for ( let key in clone) {

                newObj[key] = clone[key];
        
            } 
        } else {
            newObj[key] = object[key];
        }
    } 
    return newObj;
}
convert(obj);
console.log(newObj);
