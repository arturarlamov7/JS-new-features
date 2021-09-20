//Массив, псевдомассив

"use strict";

const arr = [1,2,5,8,9];

console.log(arr);

//удалить последний элемент из массива
arr.pop();
console.log(arr);

arr.push(10); //добавить элемент в конце массива
console.log(arr);

//перебрать элементы
for (let i = o; i < arr.length; i++){
    console.log(arr[i]);
}

for (let value of arr){  //не работает с обьектом
    console.log(value);
}

//длина массива не всегда длина) последний индекс, +1
const arr2 = [1,2,5,8,9];
//arr2[99] = 0; // так нельзя
console.log(arr.length);
console.log(arr2);

//методы массив
//часто исп. для перебора. Недостаток в отличии от обычных циклов - нельзя остановить
arr2.forEach(function(item, i, arr2){
    console.log(`${i}: ${item} внутри массива ${arr2}` );
});

//сроку в массив. Например большой список товаров через запятую - в массив
const str = prompt("","");
const products = str.split(",");
console.log(products);
products.sort(); //всегда сортирует как строки
console.log(products);
//обратная операция
console.log(products.join("; "));

//функции для сортировки чисел. Передаеться в call-back
//описание 
products.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}
console.log(products);

//методы не работают для псевдомассив


