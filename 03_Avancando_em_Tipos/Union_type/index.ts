//  10  -   Union Types
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$ ${balance}`)    
}

showBalance(100)
showBalance("500")

//  11  -   Avançando com Union Types
function showUserRole(role:boolean | string) {
    
    if (typeof role === "boolean") {
        return "Usuário não aprovado"
    }
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

