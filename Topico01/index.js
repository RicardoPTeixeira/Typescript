var firstName = "Ricardo";
var number = 1;
var boolean = true;
function greeting(name) {
    console.log("Hello ".concat(name));
}
greeting(firstName);
// greeting(number) nao compila pois a const number nao é uma string
// greeting(boolean) nao compila pois a const boolean nao é uma string
//desafio
var number1 = 10;
var number2 = 25;
function soma(x, y) {
    console.log(x + y);
}
soma(number1, number2);
soma(number1, number2);
