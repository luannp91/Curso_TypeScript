"use strict";
//  1   -   Revisão de Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando Generics"));
console.log(showData(true));
console.log(showData(["Teste"]));
//  2   -   Reduzindo tipos aceitos com Constraint em Generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branca" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
//  4   -   Type Parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '64GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
let currentTime = new Date();
const myChar = {
    name: "Johnny",
    age: currentTime.getFullYear() - 1991,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
//  6   -   Typeof Type Operator
const userName1 = "Johnny";
const userName2 = "Emma";
const userName3 = "Amy";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem ${km} Km`);
}
showKm(newTruck.km);
const newCar = {
    km: 50000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
