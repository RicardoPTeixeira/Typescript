//1-importacao de arquivos
import importGreet from "./greet.js"

importGreet()

//2-import de variaves
import { x } from "./variable"
console.log(x)

//3-multiplas importacoes
import { a, b, myFunction } from "./multiple"
console.log(a)
console.log(b)
myFunction()

//4-alias
import { someName as name } from "./changeName"
console.log(name)

//5-importar tudo
import * as myNumbers from "./numbers"
console.log(myNumbers)
const nx = myNumbers.n1
console.log(nx)
myNumbers.n4()

//6-importando tipos
import { Human } from "./myType"
class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const matheus = new User("Matheus", 25)
console.log(matheus)