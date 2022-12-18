import { Router } from "express";
import { create, findAll, topNews, findById } from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/:id", findById);
router.get("/top", topNews);

export default router;
