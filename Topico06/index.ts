//1-tipo para interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product) {
  console.log(`O produto ${product.name} custa ${product.price}`)
  if(product.isAvailable) {
    console.log('Produto disponível')
  } else {
    console.log('Produto indisponível')
  }
}

const shirt: Product = {
  name: 'Camisa',
  price: 49.99,
  isAvailable: true
}

const short: Product = {
  name: 'Shorts',
  price: 39.99,
  isAvailable: false
}

showProductDetails(shirt)
showProductDetails(short)

//2-propriedade opcional em interface
interface User {
  email: string
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o email ${user.email}`)
  if(user.role) {
    console.log(`O usuário tem a função ${user.role}`)
  }
}

const u1: User = {email: 'u1@gmail.com', role: 'admin'}
const u2: User = {email: 'u2@gmail.com'}

showUserDetails(u1)
showUserDetails(u2)

//3-readonly
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4
}

console.log(fusca)
// fusca.wheels = 5 -- Cannot assign to 'wheels' because it is a read-only property.

//4-Index signature
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 20
// coords.z = 'teste' -- Type 'string' is not assignable to type 'number'

console.log(coords)

//5-Extending types
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superPowers: string[]
}

const matheus: Human = {
  name: 'Matheus',
  age: 30
}

const goku: SuperHuman = {
  name: 'Goku',
  age: 40,
  superPowers: ['genki dama', 'kamehameha']
}

console.log(matheus)
console.log(goku)

//6-intersection types
interface Character {
  name: string
}

interface Gun {
  gunType: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: 'Arnold',
  gunType: 'Shotgun',
  caliber: 12
}

console.log(arnold)

//7-ReadOnlyArray
let myArray: ReadonlyArray<string> = ['Maca', 'Banana', 'Abacaxi']

// myArray[3] = 'Melancia' -- Index signature in type 'readonly string[]' only permits reading.

console.log(myArray)

myArray.forEach((item) => {
  console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)

//8-tuplas
type fiveNumbers = [number, number, number, number, number]
// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] -- Type '[number, number, number, number, number, number]' is not assignable to type 'fiveNumbers'. Source has 6 element(s) but target allows only 5
// const mixedArray: fiveNumbers = [1, 'teste', 3, 4, 5] -- Type 'string' is not assignable to type 'number'

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ['Matheus', 30]

console.log(anotherUser)

anotherUser[0] = 'Goku'
// anotherUser[1] = '40' -- Type 'string' is not assignable to type 'number'

console.log(anotherUser)

//9-tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10 -- Cannot assign to '0' because it is a read-only property.
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1, 2])