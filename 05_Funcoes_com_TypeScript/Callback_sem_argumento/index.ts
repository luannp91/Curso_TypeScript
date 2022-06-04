//  2   -   Callback como argumento
function newGreeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função!!!")

    const greet = f(userName)
    
    console.log(greet)    
}

preGreeting(newGreeting, "Johnny")
preGreeting(newGreeting, "Emma")