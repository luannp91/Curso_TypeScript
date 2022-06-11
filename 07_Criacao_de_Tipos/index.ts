//  1   -   Revisão de Generics
function showData<T> (arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("Testando Generics"))
console.log(showData(true))
console.log(showData(["Teste"]))

//  2   -   Reduzindo tipos aceitos com Constraint em Generics
function showProductName<T extends {name: string}> (obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObj= {price: 19.99, category: "Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))

//  3   -   Generics com Interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Cars = MyObject<number, number, string>
type Pens = MyObject<boolean, boolean, string>

const myCar: Cars = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branca"}
const myPen: Pens = {name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)

//  4   -   Type Parameters
function getSomeKey<T, K extends keyof T> (obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '64GB'
}

console.log(getSomeKey(server, 'ram'))

//  5   -   Keyof Type Operator
type Characters = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Characters

function showCharName(obj: Characters, key: C): string {
    return `${obj[key]}`
}

let currentTime = new Date();

const myChar: Characters = {
    name: "Johnny",
    age: currentTime.getFullYear() - 1991,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))

//  6   -   Typeof Type Operator
const userName1: string = "Johnny"

const userName2: typeof userName1 = "Emma"

type x = typeof userName1

const userName3: x = "Amy"

//  7   -   Indexed access Types
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem ${km} Km`)    
}

showKm(newTruck.km)

const newCar = {
    km: 50000,
    kg: 1000
}

showKm(newCar.km)

//  8   -   Conditional Types
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5

type myTypeB = Teste extends {showNumbers(): number } ? string : boolean

//  9   -   Template Literals Type
type TestA = "text"

type CustomType = `some ${TestA}`

const testing: CustomType = "some text"

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`