import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./src/databases/db.js";
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js";

dotenv.config();

// const userRoute = require("./src/routes/user.route");
// const connectDatabase = require("./src/databases/db");
 
const app = express();
const port = process.env.PORT || 3000; // variavel de ambiente

connectDatabase();

app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);
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
