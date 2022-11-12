import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("wait connecting to the database");
    mongoose.connect(
            process.env.CONNECT_DATABASE_URI,
            //     { useNewUrlParser: true, useUnifieldTopology: true }
        )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error));
};

export default connectDatabase;
