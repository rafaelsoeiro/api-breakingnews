import {
    createService,
    findAllService,
    countNews,
    topNewsService,
} from "../services/news.service.js";

const create = async (req, res) => {
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
const findAll = async (req, res) => {
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
        console.log(total);
        const currentUrl = req.baseUrl;
        console.log(currentUrl);
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

const topNews = async (req, res) => {
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
export { create, findAll, topNews };
