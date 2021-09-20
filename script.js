"use strict";

//const obj = new Object(); //один из вариантов создания обьектов

//самый частый вариант создания обьекта
const option = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(option.name);
console.log(option['name']); // реже исп. вариант нотации

//delete option.name; //удаление какого-либо свойства из обьекта

console.log(option);

//перебрать все элементы обьекта
for (let key in option){
    console.log(`Свойство ${key} имеет значение ${option[key]}`);
}

//перебрать все элементы обьекта
let counter = 0;
for (let key in option){
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]){
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
            counter++;
        }

    } else {
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
        counter++;
    }
}
//количество свойств обьекта
console.log(counter);

console.log(Object.keys(option));
console.log(Object.keys(option).length);

//Добавим поведение для обьекта
const option2 = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Yes!");
    }
};

option2.makeTest();

//деструктуризация обьекта (вытаскиваем нужные нам свойства)
const {border, bg} = option2.colors;
console.log(border);

/*Задание
Создайте обьекта game
в нем 7 свойства
и для одного из свойств = - сделайте свойство в виде объекта, состоящего из 3 свойств
Добавьте два метода и вывозите их.
С помощью деструктуризации выведете 2 любых свойства в консоль
*/

