//  13  -   Interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)    
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

//  14  -   Interface x Type Alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Johnny", age: 30}

console.log(somePerson);

type personType = {
    name: string
}

//  15  -   Literal Types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`);
}

showDirection("left")

//  16  -   Non-Null Assertion Operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

//  17  -   BigInt
let n: bigint

n = 1000n

console.log(n)

console.log(typeof n);

//  18  -   Symbol
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

