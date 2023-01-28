// Написать код, который сформирует 2 запроса за различными файлами json (data.json, data2.json).
// Необходимо соединить из двух полученных объектов массивы children и вывести результат в консоль.
// debugger;
let users = [];
function getInfo(method, path, callback) {
    let xml = new XMLHttpRequest();
    xml.open(method, path);
    xml.send();

    let parse = response => JSON.parse(response);
    
    xml.addEventListener("readystatechange", () => {
        if(xml.readyState === 4 && xml.status === 200) {
                const response = parse(xml.response).children;
                callback(response);
            }
    });
    
}

function makeArr(response) {
    response.forEach((element) => {
        users.push(element);
    });
}
getInfo("GET", "json/data.json", makeArr);
getInfo("GET", "json/data2.json", makeArr);
console.log(users);
