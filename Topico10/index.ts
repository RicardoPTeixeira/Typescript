//1-exemplo decorator
function myDecorator(){
  console.log('iniciando decorator')
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log('executando decorator')
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
  }
}

class myClass {
  @myDecorator()
  testing() {
    console.log('terminando execucao do metodo')
  }
}

const myObj = new myClass()
myObj.testing()

//2-multiplos decorators
function a() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executou a')
  }
}

function b() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executou b')
  }
}

class MultipleDecorators {
  @a()
  @b()
  testing(){
    console.log('terminando a')
  }
}

const multipleDecorators = new MultipleDecorators()
multipleDecorators.testing()

//3-decorator de classe
function classDec(constructor: Function) {
  console.log(constructor)
  if(constructor.name === 'User') {
    console.log('criando usuario')
  }
}

@classDec
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const matheus = new User('Matheus')
console.log(matheus)

//4-decorator de metodo
function enumerable(value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    console.log(this)
    return `O nome da maquina é ${this.name}`
  }
}

const trator = new Machine('Trator')
console.log(trator.showName())

//5-acessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `O nome do monstro é ${this.name}`
  }

  get showAge() {
    return `O monstro tem ${this.age} anos`
  }
}

const charmander = new Monster('Charmander', 10)
console.log(charmander)

//6-property decorator
function formatNumber() {
  return function(target: Object, propertyKey: string) {
    let value: string
    const getter = function() {
      return value
    }

    const setter = function(newValue: string) {
      value = newValue.padStart(5, '0')
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    })
  }
}

class ID {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID('123')
console.log(newItem)
console.log(newItem.id)

//7-class decorator ex real
function createdDate(created: Function) {
  created.prototype.createdAt = new Date()
}

@createdDate
class Book {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(13)
const newPen = new Pen(23)

console.log(newBook)
console.log(newBook.createdAt)
console.log(newPen)
console.log(newPen.createdAt)

//8-method decorator ex real
function checkIfUserPosted() {
  return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value
    console.log(childFunction)
    descriptor.value = function(...args: any[]) {
      if(args[1] === true) {
        console.log('Usuario ja postou')
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }

    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post: ${content}`)

  }
}

const newPost = new Post()
newPost.post('Meu primeiro post', newPost.alreadyPosted)
newPost.post('Meu segundo post', newPost.alreadyPosted)

//9-property decorator ex real
function Max(limit: number) {
  return function(target: Object, propertyKey: string) {
    let value: string

    const getter = function() {
      return value
    }

    const setter = function(newValue: string) {
      if(newValue.length > limit) {
        console.log(`Valor maior que o limite que é ${limit}`)
      } else {
        value = newValue
        console.log(`Usuario cadastrado`)
      }
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    })
  }
}

class Admin {
  @Max(10)
  username

  constructor(username: string) {
    this.username = username
  }
}

const pedro = new Admin('Pedro')
const jose = new Admin('Jose123456789')