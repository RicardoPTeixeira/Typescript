"use strict";
function showProductDetails(product) {
    console.log(`O produto ${product.name} custa ${product.price}`);
    if (product.isAvailable) {
        console.log('Produto disponível');
    }
    else {
        console.log('Produto indisponível');
    }
}
const shirt = {
    name: 'Camisa',
    price: 49.99,
    isAvailable: true
};
const short = {
    name: 'Shorts',
    price: 39.99,
    isAvailable: false
};
showProductDetails(shirt);
showProductDetails(short);
function showUserDetails(user) {
    console.log(`O usuário tem o email ${user.email}`);
    if (user.role) {
        console.log(`O usuário tem a função ${user.role}`);
    }
}
const u1 = { email: 'u1@gmail.com', role: 'admin' };
const u2 = { email: 'u2@gmail.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 20;
// coords.z = 'teste' -- Type 'string' is not assignable to type 'number'
console.log(coords);
const matheus = {
    name: 'Matheus',
    age: 30
};
const goku = {
    name: 'Goku',
    age: 40,
    superPowers: ['genki dama', 'kamehameha']
};
console.log(matheus);
console.log(goku);
const arnold = {
    name: 'Arnold',
    gunType: 'Shotgun',
    caliber: 12
};
console.log(arnold);
//7-ReadOnlyArray
let myArray = ['Maca', 'Banana', 'Abacaxi'];
// myArray[3] = 'Melancia' -- Index signature in type 'readonly string[]' only permits reading.
console.log(myArray);
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] -- Type '[number, number, number, number, number, number]' is not assignable to type 'fiveNumbers'. Source has 6 element(s) but target allows only 5
// const mixedArray: fiveNumbers = [1, 'teste', 3, 4, 5] -- Type 'string' is not assignable to type 'number'
console.log(myNumberArray);
const anotherUser = ['Matheus', 30];
console.log(anotherUser);
anotherUser[0] = 'Goku';
// anotherUser[1] = '40' -- Type 'string' is not assignable to type 'number'
console.log(anotherUser);
//9-tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10 -- Cannot assign to '0' because it is a read-only property.
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
