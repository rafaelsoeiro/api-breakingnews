const route = require("express").Router(); // instancia o express na variavel e prepara o ambiente para a criação de rotas

const userController = require("../controllers/user.controller");

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", userController.findById);
route.patch("/:id", userController.update);

module.exports = route;
