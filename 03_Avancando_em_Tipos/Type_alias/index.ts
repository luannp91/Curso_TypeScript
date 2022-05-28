//  12  -   Type Alias
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)    
}

showId(1)
showId("200")
showId(123)