"use strict";
//  9   -   Validando Argumento Opcional
function advancedGreenting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreenting("Johnny", "B."));
console.log(advancedGreenting("Emma"));
