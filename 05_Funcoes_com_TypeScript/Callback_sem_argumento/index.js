"use strict";
//  2   -   Callback como argumento
function newGreeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!!!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(newGreeting, "Johnny");
preGreeting(newGreeting, "Emma");
