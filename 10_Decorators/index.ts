//  1   -   Criando o Primeiro Decorator
function myDecorator() {

    console.log("Iniciando Decorator")

    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando Decorator")
        
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)                        
    }
    
}

class myNewClass {
    @myDecorator()
    testing() {
        console.log("Terminando execução do método")        
    }
}

const myNewObj = new myNewClass();

myNewObj.testing();


//  2   -   Múltiplos Decorators
function a() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou a função a")        
    }
}

function b() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou a função b")        
    }
}

class MultipleDecorators {
    @a()
    @b()
    testing() {
        console.log("Terminando execução")        
    }
}

const multiple = new MultipleDecorators()

multiple.testing()


//  3   -   Class Decorator
function classDec(constructor: Function) {
    console.log(constructor)
    if (constructor.name === "UserAgain") {
        console.log("Criando usuário")        
    }  
}

@classDec
class UserAgain {
    name

    constructor(name: string) {
        this.name = name
    }
}

const karol = new UserAgain("Karol")

console.log(karol)


//  4   -   Decorator de Método
function enumerable(value: boolean) {
    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class machineAgain {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        console.log(this);
        
        return `O nome da máquina é: ${this.name}`
    }
}

const tractor = new machineAgain("Trator")

console.log(tractor.showName())


//  5   -   Acessor Decorator
class Monster {
    name?
    age?

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }

    get showMonsterName() {
        return `Nome do Monstro: ${this.name}`
    }

    get showMonsterAge() {
        return `Idade do Monstro: ${this.name}`
    }
}

const pikachu = new Monster("Pikachu", 10)

console.log(pikachu)


//  6   -   Property Decorator
function formatNumber() {

    return function(target: Object, propertKey: string) {

        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        })
    }
}

class IDs {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItems = new IDs("1")

console.log(newItems);


//  7   -   Exemplo Real com Class Decorator
function createdDate (created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor (id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor (id: number) {
        this.id = id
    }
}

const newBook = new Book(12)
const pen = new Pen(55)

console.log(newBook)
console.log(pen)


//  8   -   Exemplo Real com Method Decorator
function checkIfUserPosted() {
    return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value
        console.log(childFunction) 
        descriptor.value = function(...args: any[]) {
            if (args[1] === true) {
                console.log("Usuário já Postou")
                return null                
            }
            else {
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
        console.log(`Post do usuário: ${content}`)        
    }
}

const newPost = new Post()

newPost.post("Meu Primeiro Post!!!", newPost.alreadyPosted)

newPost.post("Meu Segundo Post!!!", newPost.alreadyPosted)