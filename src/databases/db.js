const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("wait connecting to the database");
    mongoose
        .connect(
            "mongodb+srv://root:root0000@cluster0.iu9zc9k.mongodb.net/?retryWrites=true&w=majority",
            // { useNewUrlParser: true, useUnifieldTopology: true }
        )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error));
};

module.exports = connectDatabase;
