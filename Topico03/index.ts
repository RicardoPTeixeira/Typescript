//1-array
//metodo mais utilizado
let numbers: number[] = [1, 2, 3]
numbers.push(4)
console.log(numbers)

const nomes: string[] = ['Joao', 'Maria']

console.log(nomes)

//metodo menos utilizado
const nums: Array<number> = [100, 200]
const names: Array<string> = ['Enzo', 'Valentina']

//2-any
const arr1: any = [1, 'teste', true, []]

//3-parametros tipados

function soma(a:number, b:number) {
  console.log(a+b)
}

soma(4,5)
//soma('a','b')

//4-retorno de funcao
function greeting(name:string):string {
  // return 5 nao funciona pois se epsera retornar uma string
  return `Ola ${name}`
}

console.log(greeting('Matheus'))

//5-funcao anonima
setTimeout(function() {
  const sallary: number = 1000
  // console.log(parseFloat(sallary))
}, 2000)

//6-tipos de objetos
function passCoordinates(coord: {x: number, y: number}) {
  console.log('X coordinate: ' + coord.x)
  console.log('Y coordinate: ' + coord.y)
}

const objCoord = {x: 367, y: 798}
passCoordinates(objCoord)

const pessoaObj:{nome:string, surname:string, idade:number} = {nome: 'Ricardo', surname: 'Teixeira', idade: 19}

//7-propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log('A: ' + a)
  console.log('B: ' + b)
  if(c) {
    console.log('C: ' + c)
  }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)

//8-vcalidacao props opcionais
function advancedGreeting(firstName: string, lastName?: string) {
  if(lastName !== undefined) {
    return `Ola, ${firstName} ${lastName}, tudo bem?`
  }
  return `Ola, ${firstName}, tudo bem?`
}

console.log(advancedGreeting('Ricardo', 'Teixeira'))
console.log(advancedGreeting('Ricardo'))

//9-union types
function showBalance(balance: string | number) {
  console.log(`O saldo é ${balance}`)
}

showBalance(100)
showBalance('500')

const arr2: Array<number | string | boolean> = [1, 'teste', true]

//avancando
function showUserRole(role: boolean | string) {
  if(typeof role === 'boolean') {
    return 'Usuario nao aprovado'
  }

  return `A funcao do usuario é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('admin'))

//10-type alias
type ID = string | number

function showID(id: ID) {
  console.log(`O ID é ${id}`)
}

showID(1)
showID('200')

//11-interfaces
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
  x: 10,
  y: 15,
  z: 20
}

showCoords(coordObj)

//12-alias x Interace
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {name: 'Ricardo', age: 19}

console.log(somePerson)

type personType = {
  name: string
}

// type personType = {
//   age: number
// }

//13-literal types
let test: 'testando'

// test = 1
// test = 'testandoo'
test = 'testando'

function showDirection(dir: 'left' | 'right' | 'center') {
  console.log(`A direcao é ${dir}`)
}

// showDirection('top')
showDirection('left')

//14-non-null assertion operator
const p = document.getElementById('some-p')

console.log(p!.innerText)

//15-bigint
let n: bigint

// n = 1
n = 1000n

console.log(n)

//15-symbol
let symbolA: symbol = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)