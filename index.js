import express from "express";
import connectDatabase from "./src/databases/db.js";
import userRoute from "./src/routes/user.route.js";

// const userRoute = require("./src/routes/user.route");
// const connectDatabase = require("./src/databases/db");

const app = express();
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
