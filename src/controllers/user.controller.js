const userService = require("../services/user.service");

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({ message: "submit all fields for registration" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating user" });
    }

    res.status(201).json({
        message: "User created sucessfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.length === 0) {
        return res
            .status(400)
            .send({ message: "Thare are no registered users" });
    }
    res.send(users);
};

const findById = async (req, res) => {
    const id = req.params.id;

    const user = req.user;

    res.send(user);
};

const update = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;
    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).send({ message: "submit at least one for update" });
    }

    const { id, user } = req;

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    );
    res.send({ message: "User succesfully updated" });
};

module.exports = {
    create,
    findAll,
    findById,
    update,
};
