"use strict";
function showProductDetail(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}`);
    if (product.isAvailable) {
        console.log("Produto disponível");
    }
}
const shirts = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetail(shirts);
showProductDetail({ name: "Tênis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = {
    email: "johnny@email.com", role: "Admin",
    name: ""
};
const u2 = {
    email: "emma@email.com",
    name: ""
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const johnny = {
    name: "Johnny",
    age: 2022 - 1991
};
console.log(johnny);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
//  7   -   ReadOnly Array
let myArray = ["Maça", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Johnny", 2022 - 1991];
console.log(anotherUser[0]);
anotherUser[0] = "Emma";
console.log(anotherUser[0]);
//  9   -   Tuplas ReadOnly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
