//1-type guard
function sum(a: number | string, b: number | string) {
  if(typeof a === 'string' && typeof b === 'string') {
    console.log(parseFloat(a)+parseFloat(b))
  } else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a+b)
  } else {
    console.log('Impossivel fazer a operacao')
  }
}

sum('4', '5')
sum(4, 5)
sum('4', 5)
sum(4, '5')

//2-checagem de valor
function operations(arr: number[], operation: string | undefined) {
  if(operation) {
    if(operation === 'sum') {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if(operation === 'multiply') {
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }
  } else {
    console.log('Defina uma operacao')
  }
}

operations([1,2,3])
operations([1,2,3], 'sum')
operations([1,2,3], 'multiply')

//3-instanceof
class User {
  name
  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const jhon = new User('John')
const paul = new SuperUser('Paul')

console.log(jhon)
console.log(paul)

function userGreeting(user: object){
  if(user instanceof SuperUser) {
    console.log(`Ola ${user.name}, deseja ver os dados do sistema?`)
  } else if(user instanceof User) {
    console.log(`Ola ${user.name}`)
  }
}

userGreeting(jhon)
userGreeting(paul)

//4-operador in
class Dog {
  name
  breed
  constructor(name: string, breed?: string) {
    this.name = name
    if(breed) {
      this.breed = breed
    }
  }
}

const turca = new Dog('Turca')
const bob = new Dog('Bob', 'Pastor alemao')

function showDogDetails(dog: Dog) {
  if('breed' in dog) {
    console.log(`O cachorro ${dog.name} é da raca ${dog.breed}`)
  } else {
    console.log(`O cachorro ${dog.name} é sem raca definida ou um vira-lata`)
  }
}

showDogDetails(turca)
showDogDetails(bob)

console.log('---------------------')
//5-desafio
function userReview(stars: number | boolean) {
  if(!stars) {
    console.log('O usuario nao deixou nenhuma review')
  } else if(typeof stars === 'number') {
    if(stars === 1) {
      console.log(`Pessimo trabalho, a nota do usuario foi ${stars}`)
    } else if(stars === 2) {
      console.log(`Trabalho ruim, a nota do usuario foi ${stars}`)
    } else if(stars === 3) {
      console.log(`Trabalho mediano, a nota do usuario foi ${stars}`)
    } else if(stars === 4) {
      console.log(`Bom trabalho, a nota do usuario foi ${stars}`)
    } else if(stars === 5) {
      console.log(`Otimo trabalho, a nota do usuario foi ${stars}`)
    } else {
      console.log('Envie uma nota valida de 1 a 5')
    }
  } else {
    console.log("Entrada invalida. Envie uma nota ou 'false'")
  }
}

userReview(false)
userReview(true)
userReview(1)
userReview(2)
userReview(3)
userReview(4)
userReview(5)
userReview(6)
userReview('1')
