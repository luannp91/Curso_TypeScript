//  5   -   Especificar tipos de Argumentos
function mergeArrays<T> (arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6]))
console.log(mergeArrays<number | string> ([1, 2, 3], ["teste", "testando"]))

console.log("*******************************************");

//  6   -   Parâmetros opcionais
function modernGreeting (name: string, greet?: string) {

    if (greet) {
        return`Olá ${greet} ${name}, tudo bem????`
    }

    return `Olá ${name}, tudo bem????`
}

console.log(modernGreeting("Johnny"))
console.log(modernGreeting("Emma", "Dra"))

console.log("*******************************************");

//  7   -   Parâmetro default
function somaDefault(n: number, m = 10): number {
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(15, 12))

console.log("*******************************************");

//  8   -   O Tipo Unknown
function doSomething(x: unknown) {

    if (Array.isArray(x)) {
        console.log(x[0])        
    }
    else if (typeof x === "number") {
        console.log("X é um número")        
    }
}

doSomething([1, 2, 3])
doSomething(5)

console.log("*******************************************");

//  9   -   O tipo never
function showErrorMessage (msg: string): never {
    throw new Error(msg)
}

//  10  -   Rest Operator
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(5, 348, 2348))

console.log("*******************************************");

//  11  -   Destructuring como parâmetro
function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$ ${price}`
}

const shirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt))