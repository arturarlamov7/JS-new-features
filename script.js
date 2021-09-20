// Передача по ссылке или по значению spread оператор

"use strict";

//передача по значению (примитивные типы данных)
let a = 5,
    b = a,

b = b + 5;

console.log(b);
console.log(a);

//передача по ссылке
const obj = {
    a: 5,
    b: 1
}

const copy = obj;

//хотя мы модифицируем копию, менется изначальный обьект,
//так как мы в копии имеет ссыку на него 
copy.a = 10;

console.log(obj);
console.log(copy);

//клонирование обьекта в новый обьект
const newObj = Object.assign({}, obj);
newObj.a = 15;
console.log(newObj);

//Склонироватьь массив
const oldArray[0] = 5; 
console.log(oldArray);
console.log(newArray);

//Spread оператор, new features
const video = ['youtube', 'vimeo', 'facebook'],
        blogs = ['wordpress', 'twitter', 'blogger'],
        internet = [...video,...blogs, 'vk', 'instagram'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 8];

log(...num);

//клонирование массива с помощью spread
const ar = [4,3,0];
const NewAr = [...ar];

//клонирование обьекта с помощью spread 
const aaa = {
    first: 1,
    second: 2
};

const newA = {...aaa};


