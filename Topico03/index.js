"use strict";
//1-array
//metodo mais utilizado
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
const nomes = ['Joao', 'Maria'];
console.log(nomes);
//metodo menos utilizado
const nums = [100, 200];
const names = ['Enzo', 'Valentina'];
//2-any
const arr1 = [1, 'teste', true, []];
//3-parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//soma('a','b')
//4-retorno de funcao
function greeting(name) {
    // return 5 nao funciona pois se epsera retornar uma string
    return `Ola ${name}`;
}
console.log(greeting('Matheus'));
//5-funcao anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
}, 2000);
//6-tipos de objetos
function passCoordinates(coord) {
    console.log('X coordinate: ' + coord.x);
    console.log('Y coordinate: ' + coord.y);
}
const objCoord = { x: 367, y: 798 };
passCoordinates(objCoord);
const pessoaObj = { nome: 'Ricardo', surname: 'Teixeira', idade: 19 };
//7-propriedades opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c) {
        console.log('C: ' + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
//8-vcalidacao props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Ola, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting('Ricardo', 'Teixeira'));
console.log(advancedGreeting('Ricardo'));
//9-union types
function showBalance(balance) {
    console.log(`O saldo é ${balance}`);
}
showBalance(100);
showBalance('500');
const arr2 = [1, 'teste', true];
//avancando
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuario nao aprovado';
    }
    return `A funcao do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('admin'));
function showID(id) {
    console.log(`O ID é ${id}`);
}
showID(1);
showID('200');
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: 'Ricardo', age: 19 };
console.log(somePerson);
// type personType = {
//   age: number
// }
//13-literal types
let test;
// test = 1
// test = 'testandoo'
test = 'testando';
function showDirection(dir) {
    console.log(`A direcao é ${dir}`);
}
// showDirection('top')
showDirection('left');
//14-non-null assertion operator
const p = document.getElementById('some-p');
console.log(p.innerText);
//15-bigint
let n;
// n = 1
n = 1000n;
console.log(n);
//15-symbol
let symbolA = Symbol('a');
let symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
