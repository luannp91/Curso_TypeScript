const data = new Date();
const year = data.getFullYear();


//  1   -   Importação de Arquivos
import importGreet from "./greet.js";

importGreet();


//  2   -   Importação de Variáveis
import { x } from "./variable"

console.log(x);


//  3   -   Múltiplas Importações
import { a, b, myFunction } from "./multiple";

console.log(a);
console.log(b);
myFunction();


//  4   -   Alias de Importação
import { someName as name } from "./changename.js";

console.log(name);


//  5   -   Importando diversos itens
import * as myNumbers from "./numbers";

console.log(myNumbers);

const nX = myNumbers.n1

console.log(nX);


//  6   -   Importando Tipos
import { Human } from "./mytypes.js";

class User implements Human {
    name;
    age;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const johnny = new User("Johnny", year - 1991)

console.log(johnny);