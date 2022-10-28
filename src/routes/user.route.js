const route = require("express").Router(); // instancia o express na variavel e prepara o ambiente para a criação de rotas
const userController = require("../controllers/user.controller");
const { validId, validUser } = require("../middlewares/global.middlewares");

//route.verboHTTP("/URL",middleware, controller);

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", validId, validUser, userController.findById);
route.patch("/:id", validId, validUser, userController.update);

module.exports = route;
