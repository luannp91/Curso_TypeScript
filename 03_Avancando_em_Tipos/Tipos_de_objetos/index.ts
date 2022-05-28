//  7   -   Tipos de Objetos
function passCordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)        
}

const objCoord = {x: 329, y: 84.2}

passCordinates(objCoord)

const pessoaObj: {nome: string, surname: string} = {nome: "Johnny", surname: "B."}

//  8   -   Propiedades Opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    
    if (c) {
        console.log("C: " + c);        
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)