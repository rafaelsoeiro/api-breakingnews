import mongoose from "mongoose";

const NewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
        required: true,
    },
    likes: {
        type: Array,
        required: true,
    },
    coments: {
        type: Array,
        required: true,
    },
});

const News = mongoose.model("News", NewSchema);

export default news;
