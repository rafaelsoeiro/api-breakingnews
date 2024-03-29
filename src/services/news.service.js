import News from "../models/News.js";

export const createService = (body) => News.create(body);

export const findAllService = (offset, limit) =>
    News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

export const countNews = () => News.countDocuments();

export const topNewsService = () =>
    News.findOne().sort({ _id: -1 }).populate("user");

export const findByIdService = (id) => News.findById(id).populate("user");

export const searchByTitleService = (title) =>
    News.find({
        title: { $regex: `${title || ""}`, $options: "i" },
    })
        .sort({ _id: -1 })
        .populate("user");

export const byUserService = (id) =>
    News.find({ user: id }).sort({ _id: -1 }).populate("user");

export const updateService = (id, titulo, texto, banner) =>
    News.findOneAndUpdate(
        { _id: id },
        { titulo, texto, banner },
        { rawResult: true }
    );
export const eraseService = (id) => News.findByIdAndDelete({ _id: id });

export const likeNewsService = (newsId, userId) =>
    News.findOneAndUpdate(
        { _id: newsId, "likes.userId": { $nin: [userId] } },
        { $push: { likes: { userId, created: new Date() } } }
    );

export const deleteLikeNewsService = (newsId, userId) =>
    News.findOneAndUpdate({ _id: newsId }, { $pull: { likes: { userId } } });

export const addCommentService = (newsId, userId, comment) => {
    const commentId = Math.floor(Date.now() * Math.random()).toString(24);

    return News.findOneAndUpdate(
        { _id: newsId },
        {
            $push: {
                comments: { commentId, userId, comment, createdAt: new Date() },
            },
        }
    );
};
export const deleteCommentService = (newsId, userId, commentId) => {
    return News.findOneAndUpdate(
        { _id: newsId },
        {
            $pull: {
                comments: { commentId, userId },
            },
        }
    );
};
