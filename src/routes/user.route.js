const route = require("express").Router(); // instancia o express na variavel e prepara o ambiente para a criação de rotas
const userController = require("../controllers/user.controller");

route.get("/", userController.soma);
module.exports = route;
