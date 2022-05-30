//  4   -   Operador in
class Dog {
    name
    breed

    constructor (name: string, breed?: string) {
        this.name = name

        if (breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bin = new Dog("Bin", "Pastor Alemão")

function showDogDetails(dog: Dog) {

    if ('breed' in dog) {
        console.log(`O cachorro é de raça ${dog.breed}`)        
    }
    else {
        console.log("O cachorro é um SRD")        
    }
}

showDogDetails(turca)
showDogDetails(bin)