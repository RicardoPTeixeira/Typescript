//1-numbers
let number01:number = 10

console.log(number01)
console.log(typeof number01)

const number02:number = 15.585756

console.log(number02)
console.log(typeof number02)
console.log(number02.toPrecision(3))

//2-string
const name1:string = 'Joao'

console.log(name1)
console.log(name1.toUpperCase())

let fullName:string

const name2:string = 'Silva'

fullName = name1 + ' ' + name2

console.log(fullName)
console.log(typeof fullName)

//3-boolean
let a:boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

//4-inference e anotation
const ann: string = 'Teste'
let inf = 'Teste'

//inf = 1 ira dar erro pois inf é uma string

console.log(typeof inf)

//desafio
const x:number = 10
const numberToString = x.toString()
console.log(typeof x)
console.log(typeof numberToString)
console.log('O numero é ' + numberToString)