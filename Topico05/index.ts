//1-funcao sem retorno/void
function withoutReturn():void {
  console.log('Essa funcao nao tem retorno')
  // return = 1 -- Type 'number' is not assignable to type 'void'
}

withoutReturn()

//2-callback como argumento
function greeting(name: string):string {
  return `Ola ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log('Preparando a funcao')
  const greet = f(userName)
  // const greet = f(3) -- Argument of type 'number' is not assignable to parameter of type 'string'
  console.log(greet)
}

preGreeting(greeting, 'Matheus')
// preGreeting('asd', 'Matheus') -- Argument of type 'string' is not assignable to parameter of type '(name: string) => string'.

//3-generic functions
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([0, 1, 2, 3, 4]))
console.log(firstElement(['a', 'b', 'c', 'd', 'e']))
// console.log(firstElement('Teste')) -- Argument of type 'string' is not assignable to parameter of type 'any[]'

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: 'Jose'}, {age: 30, job: 'Programador'})

console.log(newObject)

//4-constrains
function biggestNumber<T extends number | string>(a: T, b: T):T {
  let biggest: T

  if(+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber('8', '14'))
// console.log(biggestNumber('5', 3)) -- os 2 tipos precisam ser iguais

//5-especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [5,6]))
console.log(mergeArrays<number | string>([1,2,3], ['teste','testando']))

//6-parametros opcionais
function modernGreeting(name: string, greet?: string) {
  if(greet) {
    return `Ola ${greet} ${name}, tudo bem?`
  }
  return `Ola ${name}, tudo bem?`
}

console.log(modernGreeting('Matheus', 'Sr.'))
console.log(modernGreeting('Joao'))

//7-parametro default
function somaDefault(n: number, m = 10):number {
  return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(15,20))

//8-unknown
function doSomething(x: unknown) {
  if(Array.isArray(x)) {
    console.log(x[0])
  } else if(typeof x === 'number') {
    console.log('X é um numero')
  }
}

doSomething([1, 2, 3])
doSomething(2)

//9-never
function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

// showErrorMessage('Algum erro')

//10-rest
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5))
console.log(sumAll(123, 107))
// console.log(sumAll('teste')) -- Argument of type 'string' is not assignable to parameter of type 'number'

//11-destruturing como parametro
function showProductDetails({name, price}: {name: string, price: number}): string {
  return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: 'Camisa', price: 49.99}

console.log(showProductDetails(shirt))
// console.log(showProductDetails({name: 'teste', age: 10})) -- Argument of type '{ name: string; age: number; }' is not assignable to parameter of type '{ name: string; price: number; }'. Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; price: number; }'