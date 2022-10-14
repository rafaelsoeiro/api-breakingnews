const express = require("express");
const app = express();
const userRoute = require('./src/routes/user.route')

app.use("/hello", userRoute)


//ROTAS 
// http METHOD -- CRUD  (create, read, delete, upadate)
    // GET - Pega uma info
    // POST - Cria uma info
    // PUT - Altera toda a info
    // PATH - Altera parte de uma info
    // DELETE - Apaga uma info


app.listen(3000);
