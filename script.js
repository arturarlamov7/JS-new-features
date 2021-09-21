//Самовызывающиеся функция. Приемы, используемые в модулях

"use strict";

const num = 1;

//анонимная самовызывающаяся функция (создаем локальную область видимости)
(function(){
    let num = 2;
    console.log(num);
    console.log(num + 1);

}());

console.log(num);

//обьектный интерфейс (второй способ модульности)
const user = (function(){
    const privat = function(){
        console.log('I am privat');
    };

    return {
        sayHello: privat //экспортируем наружу локальное свойство
    }
}());

user.sayHello();

