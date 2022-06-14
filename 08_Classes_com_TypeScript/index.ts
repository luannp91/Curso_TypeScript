//  1   -   Campos em Classes
class Users {
    name!: string
    age!: number
}

const kurt = new Users()

console.log(kurt)

kurt.name = "Kurt"

console.log(kurt)


//  2   -   Constructor
class NewUser {
    name
    age

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const amy = new NewUser("Amy", 22)

console.log(amy)

//  3   -   Propriedades ReadOnly
class Auto {
    name
    readonly wheel = 4

    constructor (name: string) {
        this.name = name
    }
}

const mobi = new Auto("Mobi")

console.log(mobi)

console.log(mobi.wheel)

mobi.name = "Mobi Like"

//  4   -   Herança e Super
class Machine {
    name

    constructor (name: string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor (name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

//  5   -   Métodos
class Dwarf {
    name

    constructor (name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger")        
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy);

//  6   -   This
class HeavyTruck {
    model
    hp

    constructor (model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`)        
    }
}

const volvo = new HeavyTruck("Volvo", 800)
const scania = new HeavyTruck("Scania", 950)

volvo.showDetails()
scania.showDetails()

//  7   -   Getters
class Persons {
    name
    surname

    constructor (name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const johnnyB = new Persons("Johnny", "B")

console.log(johnnyB.name)

console.log(johnnyB.fullName)


//  8   -   Setters
class Coordinates {
    x!: number
    y!: number

    set fillX (x: number) {
        if (x === 0) {
            return
        }

        this.x = x

        console.log("X inserido com sucesso!!!")        
    }

    set fillY (y: number) {
        if (y === 0) {
            return
        }

        this.y = y

        console.log("Y inserido com sucesso!!!")        
    }

    get getCoordinates() {
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoordinates = new Coordinates()

myCoordinates.fillX = 15
myCoordinates.fillY = 0
myCoordinates.fillY = 10

console.log(myCoordinates)

console.log(myCoordinates.getCoordinates)

//  9   -   Herdando Interfaces
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor (title: string) {
        this.title = title
    }

    itemTitle() {
        return `O título do post é: ${this.title}`
    }
}

const myPost = new blogPost("Hello World")

console.log(myPost.itemTitle())

//  10  -   Override de Métodos
class Base {
    someMethod() {
        console.log("Alguma Coisa")        
    }
}

class Nova extends Base {
    someMethod(): void {
        console.log("Testando outra coisa")        
    }
}

const myObject = new Nova()

myObject.someMethod()

//  11  -   Visibilidade: public
class D {
    public x = 10
}

class E extends D {

}

const cInstance = new D()

console.log(cInstance.x)

const dIstance = new D()

console.log(dIstance.x)

//  12  -   Visibilidade: protected
class F {
    protected x = 10

    protected protectedMethod() {
        console.log("Este método é protegido")
    }
}

class G extends F {

    showX() {
        console.log("X: " + this.x)
    }

    showProtectedMethod() {
        this.protectedMethod()
    }
}

const gInstance = new G()

gInstance.showX()

gInstance.showProtectedMethod()

//  13  -   Visibilidade: private
class PrivateClass {
    private name = "Private"

    showName() {
        return this.name
    }
}

const pObj = new PrivateClass()

console.log(pObj.showName())

//  14  -   Static Members
class StaticMenbers {
    static prop = "Teste static"

    static staticMethod() {
        console.log("Este é um método estático")        
    }
}

console.log(StaticMenbers.prop)

StaticMenbers.staticMethod()

//  15  -   Generic Class
class item<T, U> {
    first
    second

    constructor (first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }
}

const newItem = new item("Caixa", "Surpresa")

console.log(newItem)

//  16  -   Parameter Properties
class ParameterProperties {
    constructor (public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Quantidade Total: ${this.qty}`
    }

    get showPrice() {
        return `Quantidade Total: ${this.price}`
    }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99)

console.log(newShirt.name)

console.log(newShirt.showPrice)

console.log(newShirt.showQty)

//  17  -   Class Expressions
const myClass = class<T> {
    name;

    constructor (name: T) {
        this.name = name
    }
};

const pessoa = new myClass("Karoliny");

console.log(pessoa)

console.log(pessoa.name)

//  18  -   Classe Abstrata
abstract class AbstractClass {
    abstract showName(): void;
}

class AbstractExample extends AbstractClass {
    name: string;

    constructor (name: string) {
        super();
        this.name = name
    }

    showName(): void {
        console.log(`O nome é: ${this.name}`);        
    }
}

const newAbstractObject = new AbstractExample("Johnny");

newAbstractObject.showName();

//  19  -   Relação entre Classes
class Doggy {
    name!: string;
}

class Catty {
    name!: string;
}

const doguinho: Doggy = new Catty();

console.log(doguinho);
