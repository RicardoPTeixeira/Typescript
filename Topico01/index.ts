const firstName = "Ricardo"
const number = 1
const boolean = true

function greeting(name: string) {
    console.log(`Hello ${name}`)
}

greeting(firstName)
// greeting(number) nao compila pois a const number nao é uma string
// greeting(boolean) nao compila pois a const boolean nao é uma string

//desafio
const number1 = 10
const number2 = 25

function soma(x: number, y: number) {
    console.log(x + y)
}

soma(number1, number2)
soma(number1, number2)