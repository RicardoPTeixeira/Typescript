//1-numbers
var number01 = 10;
console.log(number01);
console.log(typeof number01);
var number02 = 15.585756;
console.log(number02);
console.log(typeof number02);
console.log(number02.toPrecision(3));
//2-string
var name1 = 'Joao';
console.log(name1);
console.log(name1.toUpperCase());
var fullName;
var name2 = 'Silva';
fullName = name1 + ' ' + name2;
console.log(fullName);
console.log(typeof fullName);
//3-boolean
var a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
//4-inference e anotation
var ann = 'Teste';
var inf = 'Teste';
//inf = 1 ira dar erro pois inf é uma string
console.log(typeof inf);
//desafio
var x = 10;
var numberToString = x.toString();
console.log(typeof x);
console.log(typeof numberToString);
console.log('O numero é ' + numberToString);
