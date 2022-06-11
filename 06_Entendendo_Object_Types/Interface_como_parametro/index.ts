//  1   -   Tipo de Objeto para Função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetail (product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}`)
    if (product.isAvailable) {
        console.log("Produto disponível")        
    }    
}

const shirts: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetail(shirts)
showProductDetail({name: "Tênis", price: 129.99, isAvailable: false})

//  2   -   Interface com Parâmetro opcional
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o email: ${user.email}`)
    
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`)        
    }
}

const u1: User = {
    email: "johnny@email.com", role: "Admin",
    name: ""
}
const u2: User = {
    email: "emma@email.com",
    name: ""
}

showUserDetails(u1)
showUserDetails(u2)

//  3   -   Propiedades ReadOnly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

//  4   -   Index Signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

//  5   -   Extending Interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const johnny: Human = {
    name: "Johnny",
    age: 2022 - 1991
} 

console.log(johnny)


//  6   -   Intersection Types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

//  7   -   ReadOnly Array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item);    
})

console.log(myArray)

//  8   -   Tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Johnny", 2022 - 1991]

console.log(anotherUser[0])

anotherUser[0] = "Emma"

console.log(anotherUser[0])

//  9   -   Tuplas ReadOnly
function showNumber(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])        
}

showNumber([1, 2])