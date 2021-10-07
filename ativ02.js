//#1
let txt = "abcdefghijklm";
console.log(txt.charAt(7));

let txt2 = "Posso comer bananas o dia todo";
console.log(txt2.slice(12,19));

let txt3 = "Olá, mundo!";
console.log(txt3.replace("Olá", "Bem-vindo"));

let txt4 = "Olá, mundo!";
console.log(txt4.toUpperCase());

let txt5 = "Olá, mundo!";
console.log(txt.toLowerCase());

let txt6 = "Posso comer bananas o dia todo";
console.log(txt6.length);

let str1 = "Hello ";
let str2 = "World!";
let str3 = str1.concat(str2);
console.log(str3);

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();
console.log(fruits);

const fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits2.pop();
fruits2.shift();
console.log(fruits2);

const fruits3 = ["Banana", "Orange", "Apple"];
fruits3.push("Uva", "Caju", "Kiwi");
console.log(fruits3);

const fruits4 = ["Banana", "Orange", "Apple"];
fruits4.unshift("Pera");
fruits4.unshift("Manga");
fruits4.pop();
console.log(fruits4);