import {
    createService,
    findAllService,
    findByIdService,
    countNews,
    topNewsService,
    searchByTitleService,
    byUserService,
    updateService,
} from "../services/news.service.js";

export const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;

        if (!title || !banner || !text) {
            res.status(400).send({
                message: "Submit all fields for registration",
            });
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId,
        });

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send({ message: err.massege });
    }
};
export const findAll = async (req, res) => {
    try {
        let { limit, offset } = req.query;
        limit = Number(limit);
        offset = Number(offset);
        if (!limit) {
            limit = 5;
        }
        if (!offset) {
            offset = 0;
        }

        const next = offset + limit;
        const total = await countNews();
        
        const currentUrl = req.baseUrl;
        
        const nextUrl =
            next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previus = offset - limit < 0 ? null : offset - limit;
        const previousUrl =
            previus != null
                ? `${currentUrl}?limit=${limit}&offset=${previus}`
                : null;

        const news = await findAllService(offset, limit);
        if (news.length === 0) {
            return res
                .status(400)
                .send({ message: "Thare are no registered news" });
        }

        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar,
            })),
        });
    } catch (err) {
        res.status(500).send({ message: err.massege });
    }
};
export const topNews = async (req, res) => {
    try {
        const news = await topNewsService();
        if (!news) {
            return res.status(400).send({ message: "There no registred post" });
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar,
            },
        });
    } catch (err) {
        res.status(500).send({ message: err.massege });
    }
};
export const findById = async (req, res) => {
    try {
        const { id } = req.params;

        const news = await findByIdservice(id);
        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar,
            },
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
export const searchByTitle = async (req, res) => {
    try {
        const { title } = req.query;
        const news = await searchByTitleService(title);
        if (news.length === 0) {
            return res.status(400).send({
                message: "Thare no news registraded with this title",
            });
        }
        return res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar,
            })),
        });
    } catch (err) {
        res.status(500).send({ message: err.massege });
    }
};
export const byUser = async (req, res) => {
    try {
        const id = req.userId;
        const news = await byUserService(id);
        res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar,
            })),
        });
    } catch (error) {
        res.status(500).send({ message: error.massege });
    }
};
export const update = async (req, res) => {
    try {
        const { title, text, banner } = req.body;
        const { id } = req.params;

        if (!title && !banner && !text) {
            res.status(400).send({
                message: "Submit at least one field to update the News",
            });
        }

        const news = await findByIdService(id);

        if (String(news.user._id) !== req.userId) {
            return res.status(400).send({
                message: "You didn't update this News",
            });
        }

        await updateService(id, title, text, banner);

        return res.send({ message: "News successfully updated!" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
