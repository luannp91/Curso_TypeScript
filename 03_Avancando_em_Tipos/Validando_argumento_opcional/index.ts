//  9   -   Validando Argumento Opcional
function advancedGreenting(firstName:string, lastName?: string) {
    
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreenting("Johnny", "B."))
console.log(advancedGreenting("Emma"))

