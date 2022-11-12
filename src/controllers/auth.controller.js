import bcrypt from "bcrypt";
import { loginService } from "../services/auth.service.js";

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginService(email);
        if (!user) {
            res.status(404).send({ message: "User or password no found" });
        }
        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
            res.status(404).send({ message: "User or password no found" });
        }

        res.status(200).send("login success");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export { login };
