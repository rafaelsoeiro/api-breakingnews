const express = require("express");
const app = express();
const connectDatabase = require("./src/databases/db");

const userRoute = require("./src/routes/user.route");
const port = 3000; // variavel de ambiente

connectDatabase();

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () =>
    console.log(`O servidor está rodando na porta: ${port}`)
);

//ROTAS
// http METHOD -- CRUD  (create, read, delete, upadate)
// GET - Pega uma info
// POST - Cria uma info
// PUT - Altera toda a info
// PATH - Altera parte de uma info
// DELETE - Apaga uma info
