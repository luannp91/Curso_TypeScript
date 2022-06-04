//  3   -   Generic Function
function firstElement<T> (arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))

function mergeObjects<U, T> (obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Johnny"}, {age: 2022 - 1991, job: "Programmer"})

console.log(newObject)

console.log("*************************************************")

//  4   -   Constraints nas Generic Functions
function biggestNumber<T extends number | string> (a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a
    }
    else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("12", "5"))