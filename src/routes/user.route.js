import express from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middlewares.js";

const router = express.Router(); // instancia o express na variavel e prepara o ambiente para a criação de rotas

//router.verboHTTP("/URL",middleware, controller);
router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findById);
router.patch("/:id", validId, validUser, userController.update);

export default router;
