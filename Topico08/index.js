"use strict";
//1-campos em classes
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = 'Matheus';
matheus.age = 25;
// matheus.job = 'Software Engineer' -- Property 'job' does not exist on type 'User'
console.log(matheus);
//2-constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser('João', 25);
console.log(joao);
//3-campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car('Fusca');
console.log(fusca);
//4-heranca e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
//5-metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello stranger`);
    }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy);
jimmy.greet();
//6-this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.model} com ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck('Volvo', 200);
volvo.showDetails();
//7-getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const joseSilva = new Person('José', 'Silva');
console.log(joseSilva.fullName);
//8-setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log(`X inserido com sucesso: ${this.x}`);
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log(`Y inserido com sucesso: ${this.y}`);
    }
}
const coords = new Coords();
coords.fillX = 0;
coords.fillY = 0;
console.log(coords);
coords.fillX = 15;
coords.fillY = 19;
console.log(coords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é ${this.title}`;
    }
}
const myPost = new blogPost('Hello World');
console.log(myPost.itemTitle());
class TestingInteface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é ${this.title}`;
    }
}
const teste = new TestingInteface('Teste');
console.log(teste.itemTitle());
//10-override de metodos
class Base {
    someMethod() {
        console.log('Base');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('Nova');
    }
}
const nova = new Nova();
nova.someMethod();
//11-visibilidade: public
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
class D extends C {
}
const dInstance = new D();
console.log(dInstance.x);
//12-visibilidade: protected
class E {
    constructor() {
        this.x = 15;
    }
    protectedMethod() {
        console.log('Protected');
    }
}
class F extends E {
    showX() {
        console.log(this.x);
    }
    showProtected() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtected();
//13-visibilidade: private
class G {
    constructor() {
        this.x = 20;
    }
    privateMethod() {
        console.log('Private');
    }
    showX() {
        console.log(this.x);
    }
    showPrivate() {
        this.privateMethod();
    }
}
const gInstance = new G();
// gInstance.x -- Property 'x' is private and only accessible within class 'G'
// gInstance.privateMethod() -- Property 'privateMethod' is private and only accessible within class 'G'
gInstance.showX();
gInstance.showPrivate();
//14-static members
class StaticMembers {
    static staticMethod() {
        console.log('Static Method');
    }
}
StaticMembers.prop = 'Static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//15-generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get firstItem() {
        return `Primeiro item: ${this.first}`;
    }
    get secondItem() {
        return `Segundo item: ${this.second}`;
    }
}
const newItem = new Item('Hello', 10);
console.log(newItem.firstItem);
console.log(newItem.secondItem);
//16-parameters properties
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Quantidade: ${this.qty}`;
    }
    get showPrice() {
        return `Preço: ${this.price}`;
    }
}
const newShirt = new ParametersProperties('Shirt', 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.qty) -- Property 'qty' is private and only accessible within class 'ParametersProperties'
// console.log(newShirt.price) -- Property 'price' is private and only accessible within class 'ParametersProperties'
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
//17-class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('João');
console.log(pessoa);
//18-classe abstrata
class AbstractClass {
}
// const newObj = new AbstractClass() -- Cannot create an instance of an abstract class
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`Nome: ${this.name}`);
    }
}
const abstractExample = new AbstractExample('João');
abstractExample.showName();
//19-relacoes entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
