//  1   -   Integração TS + Express
console.log("Express + TS");


//  2   -   Iniciando o Express
import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello Express!!!")
})

app.listen(3000, () => {
    console.log("Aplicação de TypeScript + Express funcionando!!!");    
})