"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  1   -   Criando o Primeiro Decorator
function myDecorator() {
    console.log("Iniciando Decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando Decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myNewClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    myDecorator()
], myNewClass.prototype, "testing", null);
const myNewObj = new myNewClass();
myNewObj.testing();
//  2   -   Múltiplos Decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Executou a função a");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("Executou a função b");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
//  3   -   Class Decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "UserAgain") {
        console.log("Criando usuário");
    }
}
let UserAgain = class UserAgain {
    constructor(name) {
        this.name = name;
    }
};
UserAgain = __decorate([
    classDec
], UserAgain);
const karol = new UserAgain("Karol");
console.log(karol);
//  4   -   Decorator de Método
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class machineAgain {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], machineAgain.prototype, "showName", null);
const tractor = new machineAgain("Trator");
console.log(tractor.showName());
//  5   -   Acessor Decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showMonsterName() {
        return `Nome do Monstro: ${this.name}`;
    }
    get showMonsterAge() {
        return `Idade do Monstro: ${this.name}`;
    }
}
const pikachu = new Monster("Pikachu", 10);
console.log(pikachu);
//  6   -   Property Decorator
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class IDs {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], IDs.prototype, "id", void 0);
const newItems = new IDs("1");
console.log(newItems);
//  7   -   Exemplo Real com Class Decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const pen = new Pen(55);
console.log(newBook);
console.log(pen);
//  8   -   Exemplo Real com Method Decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já Postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu Primeiro Post!!!", newPost.alreadyPosted);
newPost.post("Meu Segundo Post!!!", newPost.alreadyPosted);
