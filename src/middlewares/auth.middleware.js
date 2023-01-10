import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import userService from "../services/user.service.js";

dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401);
        }

        const parts = authorization.split(" ");

        if (parts.length !== 2) {
            res.status(401);
        }

        const [schema, token] = parts;

        if (schema !== "Bearer") {
            res.sendStatus(401);
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                res.status(401).send({ message: "Token invalid" });
            }

            const user = await userService.findByIdService(decoded.id);
            if (!user || !user.id) {
                res.status(401).send({ message: "Invalid token" });
            }
            req.userId = user.id;

            return next();
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
