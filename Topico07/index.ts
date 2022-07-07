//1-Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('teste'))

//2-constrains em Generics
function showProductName<T extends {name: string}>(obj: T): string {
  return `O nome do produto é: ${obj.name}`
}

const myObj = {name: 'porta', cor: 'preta'}
const otherObj = {name: 'carro', wheels: 4, engine: '1.0'}
const otherObj2 = {type: 'carro', wheels: 4, engine: '1.0'}

console.log(showProductName(myObj))
console.log(showProductName(otherObj))
// console.log(showProductName(otherObj2)) -- Argument of type '{ type: string; wheels: number; engine: string; }' is not assignable to parameter of type '{ name: string; }'.

//3-Interfaces com Generics
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {
  name: 'Fusca',
  wheels: 4,
  engine: 1.0,
  color: 'preto'
}

const myPen: Pen = {
  name: 'Bic',
  wheels: false,
  engine: false,
  color: 'azul'
}

console.log(myCar)
console.log(myPen)

//4-Type parameters
function getSomeKey<T, K extends keyof T> (obj: T, key: K) {
  return `A chave ${key} esta presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '8GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste')) -- Argument of type '"teste"' is not assignable to parameter of type '"ram" | "hd"'

//5-keyof type operator
type Character = {
  name: string
  age: number
  hasDriverLicense: boolean
}

type C = keyof Character

function showCharName(obj: Character, name: C) {
  return `O nome do personagem é ${obj[name]}`
}

const myChar: Character = {
  name: 'Goku',
  age: 10,
  hasDriverLicense: true
}

console.log(showCharName(myChar, 'name'))
// showCharName(myChar, 'type') -- Argument of type '"type"' is not assignable to parameter of type 'keyof Character'

//6-typeof type operator
const userName: string = 'Matheus'
const userName2: typeof userName = 'João'

type x = typeof userName
const userName3: x = 'Matheus'

console.log(userName)
console.log(userName2)
console.log(userName3)

//7-indexed access types
type Truck = {
  km: number
  kg: number
  description: string
}

type Km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga'
}

function showKm(km: Km) {
  console.log(`O veiculo percorreu ${km}Km`)
}

showKm(newTruck.km)

const newCar = {
  km: 5000,
  kg: 1000
}

showKm(newCar.km)

//8-conditional types
interface A {

}

interface B extends A {

}

interface Teste {
  showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
// const someVar2: myType = 'teste' -- Type 'string' is not assignable to type 'number'

type myTypeB = Teste extends {showNumber(): number} ? string : boolean

//9-template literals type
type testeA = 'text'
type CustomType = `some ${testeA}`

const testing: CustomType = `some text`
// const testing2: CustomType = `some text 2` -- Type '"some text 2"' is not assignable to type '"some text"'

type a1 = 'Testando'
type a2 = 'Union'

type a3 = `${a1}` | `${a2}`