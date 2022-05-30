"use strict";
//  1   -   Type Guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!!!");
    }
}
sum("4", "56");
sum(12, 42.5);
sum("5", 6);
