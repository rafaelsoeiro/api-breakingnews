import { Router } from "express";
import {
    create,
    findAll,
    topNews,
    findById,
    searchByTitle,
    byUser,
    update,
    erase,
    likeNews,
    addComment,
    deleteComment,
} from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/search", searchByTitle);
router.get("/byUser", authMiddleware, byUser);
router.get("/:id", authMiddleware, findById);

router.patch("/:id", authMiddleware, update);
router.patch("/like/:id", authMiddleware, likeNews);
router.patch("/comment/:id", authMiddleware, addComment);
router.patch("/comment/:newsId/:commentId", authMiddleware, deleteComment);

router.delete("/:id", authMiddleware, erase);

export default router;
