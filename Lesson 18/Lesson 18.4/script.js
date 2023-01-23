// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) 
// і генерує список з елементів:
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>


// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>
//         <ul>
//             <li>1.1</li>
//             <li>1.2</li>
//             <li>1.3</li>
//         </ul>
//     </li>
//     <li>3</li>
// </ul>

const numArr = [1, 2, 3, 4, 5, [1.1, 1.2], 6, [2.1, 2.2, [3.1, 3.2], 2.3], 7];

function generateList(arr) {
    let uList = document.createElement('ul'); //Создаем ul

    arr.forEach(element => { // Проходим по всем элемнтам массива
        let listI = document.createElement('li'); // создаем на каждый элемент li
        uList.append(listI); // Вставляем li в ul
        
        
        if(Array.isArray(element)) { // Если тип element при переборе - массив
            listI.append(generateList(element)); // то вызываем заново функцию и результат (список) записываем в li
        } else {
            listI.innerHTML = element; // если не массив то записываем в li значение element
        }
    });
    
    return uList; // В конце возвращаем один ul со всеми вложенными элементами
}
document.querySelector('.container').append(generateList(numArr));// вызываем функцию при получении элемента со страницы,
// и вставляем в элемент то что возвращает функиия - т.е финальный ul список.