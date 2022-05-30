//  3   -   instanceof
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const john = new User("John")
const emma = new SuperUser("Emma")

console.log(john)
console.log(emma)

function userGreeting(user: object) {

    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)        
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`)        
    }
}

userGreeting(john)
userGreeting(emma)

