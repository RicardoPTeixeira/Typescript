"use strict";
//1-Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('teste'));
//2-constrains em Generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'porta', cor: 'preta' };
const otherObj = { name: 'carro', wheels: 4, engine: '1.0' };
const otherObj2 = { type: 'carro', wheels: 4, engine: '1.0' };
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = {
    name: 'Fusca',
    wheels: 4,
    engine: 1.0,
    color: 'preto'
};
const myPen = {
    name: 'Bic',
    wheels: false,
    engine: false,
    color: 'azul'
};
console.log(myCar);
console.log(myPen);
//4-Type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} esta presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '8GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `O nome do personagem é ${obj[name]}`;
}
const myChar = {
    name: 'Goku',
    age: 10,
    hasDriverLicense: true
};
console.log(showCharName(myChar, 'name'));
// showCharName(myChar, 'type') -- Argument of type '"type"' is not assignable to parameter of type 'keyof Character'
//6-typeof type operator
const userName = 'Matheus';
const userName2 = 'João';
const userName3 = 'Matheus';
console.log(userName);
console.log(userName2);
console.log(userName3);
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
function showKm(km) {
    console.log(`O veiculo percorreu ${km}Km`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = `some text`;
