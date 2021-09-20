//json и глубокое клонирование обьектов

"use strict";

const person = {
    name: 'Alex',
    age: 28
}

//такой формат мы уже можем отправлятьна сервер
let toServer = JSON.stringify(person);

console.log(toServer);

let fromServer = JSON.parse(toServer);
console.log(fromServer);

//глубокое клонирование обьекта
const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Ann';
console.log(person);
console.log(clone);


