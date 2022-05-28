"use strict";
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Johnny", age: 30 };
console.log(somePerson);
//  15  -   Literal Types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
//  16  -   Non-Null Assertion Operators
const p = document.getElementById("some-p");
console.log(p.innerText);
//  17  -   BigInt
let n;
n = 1000n;
console.log(n);
console.log(typeof n);
//  18  -   Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
