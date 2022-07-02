console.log("Express + TS");

import express, { Request, Response } from "express";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello Express!!!")
})

app.post("/api/product", (req, res) => {
    console.log(req.body);
    
    return res.send("Produto adicionado!!!")
})

app.all("/api/product/check", (req, res) => {
    if (req.method === "POST") {
        return res.send("Inseriu algum registro!!!")
    }
    else if (req.method === "GET") {
        return res.send("Leu algum registro!!!")
    }
    else {
        return res.send("Não podemos realizar esta operação!!!")
    }
})

app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces")
})

app.get("api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.0,
        color: "Blue",
    sizes: ["P", "M", "G"],
    });
});

app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params);

    const id = req.params.id

    if (id === "1") {
        const product = {
            id: 1,
            name: "Boné",
            price: 10,
        }

        return res.json(product)

    } else 
    {
        return res.send("Produto não encontrado!!!")
    }    
})

app.listen(3000, () => {
    console.log("Aplicação de TypeScript + Express funcionando!!!");    
})